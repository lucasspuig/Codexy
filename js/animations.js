document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar la sección hero
    const hero = document.querySelector('.hero');
    if (hero) {
        observer.observe(hero);
    }

    // Activar animaciones inmediatamente si estamos en la parte superior de la página
    if (window.scrollY < 100 && hero) {
        hero.classList.add('visible');
    }
});
