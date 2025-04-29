document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.process-track');
    const slides = Array.from(track.children);

    const dotsContainer = document.querySelector('.process-dots');

    let currentIndex = 0;
    let radius = Math.min(window.innerWidth, window.innerHeight) * 0.45;
    let autoplayInterval;
    let isDragging = false;
    let startX;
    let currentRotation = 0;
    const autoplayDelay = 4000;
    const rotationSpeed = 0.25;

    // Crear los dots
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.setAttribute('aria-label', `Slide ${index + 1}`);
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.children);

    function lerp(start, end, t) {
        return start * (1 - t) + end * t;
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function calculatePositions(rotation) {
        const angleStep = (2 * Math.PI) / slides.length;
        return slides.map((_, index) => {
            const angle = angleStep * index + rotation;
            const x = Math.sin(angle) * radius;
            const z = Math.cos(angle) * radius;
            const scale = lerp(0.6, 1, (z + radius) / (2 * radius));
            const opacity = lerp(0.3, 1, (z + radius) / (2 * radius));
            return { angle, x, z, scale, opacity };
        });
    }

    function updateSlides(positions) {
        positions.forEach(({ angle, x, z, scale, opacity }, index) => {
            const slide = slides[index];
            slide.style.transform = `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${-angle * 180 / Math.PI}deg) scale(${scale})`;
            slide.style.opacity = opacity;
            slide.style.zIndex = Math.floor((z + radius) * 10);
        });
    }

    function rotateCarousel(direction, smooth = true) {
        const targetRotation = currentRotation - (direction * (2 * Math.PI / slides.length));
        
        if (smooth) {
            const startRotation = currentRotation;
            const startTime = performance.now();
            const duration = 800;

            function animate(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easedProgress = easeInOutQuad(progress);
                
                currentRotation = lerp(startRotation, targetRotation, easedProgress);
                const positions = calculatePositions(currentRotation);
                updateSlides(positions);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    currentIndex = (currentIndex + direction + slides.length) % slides.length;
                    updateDots();
                }
            }

            requestAnimationFrame(animate);
        } else {
            currentRotation = targetRotation;
            const positions = calculatePositions(currentRotation);
            updateSlides(positions);
            currentIndex = (currentIndex + direction + slides.length) % slides.length;
            updateDots();
        }
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function handleDragStart(e) {
        isDragging = true;
        startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
        track.style.transition = 'none';
        stopAutoplay();
    }

    function handleDragMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
        const delta = (startX - x) * rotationSpeed;
        const rotation = currentRotation - (delta / radius);
        const positions = calculatePositions(rotation);
        updateSlides(positions);
    }

    function handleDragEnd(e) {
        if (!isDragging) return;
        isDragging = false;
        track.style.transition = '';
        const x = e.type === 'mouseup' ? e.clientX : e.changedTouches[0].clientX;
        const delta = startX - x;
        
        if (Math.abs(delta) > 50) {
            rotateCarousel(Math.sign(delta));
        } else {
            const positions = calculatePositions(currentRotation);
            updateSlides(positions);
        }
        
        startAutoplay();
    }

    function nextSlide() { rotateCarousel(1); }
    function prevSlide() { rotateCarousel(-1); }

    function startAutoplay() {
        stopAutoplay();
        autoplayInterval = setInterval(nextSlide, autoplayDelay);
    }

    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    }



    dotsContainer.addEventListener('click', e => {
        const targetDot = e.target.closest('button');
        if (!targetDot || !targetDot.classList.contains('dot')) return;

        const targetIndex = dots.findIndex(dot => dot === targetDot);
        const direction = ((targetIndex - currentIndex + slides.length / 2) % slides.length) - slides.length / 2;
        rotateCarousel(Math.sign(direction));
        stopAutoplay();
        startAutoplay();
    });

    // Drag support
    track.addEventListener('mousedown', handleDragStart);
    track.addEventListener('touchstart', handleDragStart);
    window.addEventListener('mousemove', handleDragMove);
    window.addEventListener('touchmove', handleDragMove, { passive: false });
    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('touchend', handleDragEnd);

    // Mouse interaction
    track.addEventListener('mouseenter', stopAutoplay);
    track.addEventListener('mouseleave', startAutoplay);

    // Resize handling
    window.addEventListener('resize', () => {
        radius = Math.min(window.innerWidth, window.innerHeight) * 0.35;
        const positions = calculatePositions(currentRotation);
        updateSlides(positions);
    });

    // Initialize
    const positions = calculatePositions(currentRotation);
    updateSlides(positions);
    updateDots();
    startAutoplay();
});
