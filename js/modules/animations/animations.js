// Animations functionality
export function initAnimations() {
    // Animación de aparición al scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('split-text')) {
                    splitTextAnimation(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observar elementos con animaciones
    document.querySelectorAll('.service-item, .reveal-text, .split-text').forEach(element => {
        observer.observe(element);
    });

    // Animación de texto dividido
    function splitTextAnimation(element) {
        const text = element.textContent;
        element.textContent = '';
        [...text].forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.transitionDelay = `${i * 0.05}s`;
            element.appendChild(span);
        });
    }

    // Animación de fondo
    function createBackgroundElements() {
        const container = document.querySelector('.background-animation');
        if (!container) return;

        for (let i = 0; i < 15; i++) {
            const span = document.createElement('span');
            span.style.left = `${Math.random() * 100}%`;
            span.style.animationDelay = `${Math.random() * 25}s`;
            span.style.width = span.style.height = `${Math.random() * 30 + 10}px`;
            container.appendChild(span);
        }
    }

    // Efecto de rotación del mockup al hacer scroll
    function handleMockupRotation() {
        const mockup = document.querySelector('.mockup-laptop');
        if (!mockup) return;

        const mockupRect = mockup.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollProgress = (windowHeight - mockupRect.top) / (windowHeight + mockupRect.height);
        
        if (scrollProgress > 0 && scrollProgress < 1) {
            const rotation = 5 - (scrollProgress * 5);
            mockup.style.transform = `perspective(1000px) rotateX(${rotation}deg)`;
        }
    }

    // Inicializar animaciones
    createBackgroundElements();
    window.addEventListener('scroll', handleMockupRotation);
}
