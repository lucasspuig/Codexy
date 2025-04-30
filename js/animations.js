// Prevenir scroll automático
if (window.location.hash) {
    window.scrollTo(0, 0);
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 1);
}

document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                requestAnimationFrame(() => {
                    entry.target.classList.add('visible');
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar la sección hero y activar animaciones
    const hero = document.querySelector('.hero');
    if (hero) {
        // Si estamos al inicio de la página, activar las animaciones después de un pequeño delay
        if (window.scrollY < 50) {
            setTimeout(() => {
                hero.classList.add('visible');
            }, 100);
        } else {
            observer.observe(hero);
        }
    }

    // Limpiar el hash de la URL sin causar scroll
    if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname);
        window.scrollTo(0, 0);
    }
});
