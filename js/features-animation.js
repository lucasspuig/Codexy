document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Observar todas las tarjetas de características
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        // Agregar un pequeño retraso para cada tarjeta
        setTimeout(() => {
            observer.observe(card);
        }, index * 100);
    });
});
