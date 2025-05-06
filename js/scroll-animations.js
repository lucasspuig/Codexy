// Configuración de animaciones

// Configuración del Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
    // Configuración del observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Animar contadores si existen
                if (entry.target.querySelectorAll('.achievement-number').length > 0) {
                    animateCounters(entry.target);
                }
                
                // Animar elementos escalonados
                const staggerItems = entry.target.querySelectorAll('.stagger-item');
                staggerItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('fade-in');
                    }, index * 200);
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Observar todas las secciones con scroll
    document.querySelectorAll('.scroll-section').forEach(section => {
        observer.observe(section);
    });

    // Función para animar contadores
    function animateCounters(section) {
        const counters = section.querySelectorAll('.achievement-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 segundos
            const step = target / (duration / 16); // 60 FPS
            let current = 0;
            
            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            requestAnimationFrame(updateCounter);
        });
    }
});

