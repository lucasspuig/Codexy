// Scroll functionality
export function initScroll() {
    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Barra de progreso
    function updateProgressBar() {
        const progress = document.querySelector('.progress-line');
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progress.style.width = `${scrolled}%`;
    }

    // Efecto parallax
    function handleParallax() {
        document.querySelectorAll('.parallax').forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(window.scrollY * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }

    // Event listeners
    window.addEventListener('scroll', () => {
        updateProgressBar();
        handleParallax();
    });
}
