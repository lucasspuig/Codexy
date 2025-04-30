document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    const minScrollDistance = 50; // Mínima distancia de scroll para activar

    // Prevenir scroll automático inicial
    window.history.scrollRestoration = 'manual';

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#inicio' || targetId === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                // Limpiar el hash sin causar scroll
                history.pushState('', document.title, window.location.pathname);
            } else {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Si el usuario ha scrolleado más que la distancia mínima
        if (currentScroll > minScrollDistance) {
            // Scrolleando hacia abajo
            if (currentScroll > lastScrollTop) {
                header.classList.add('nav-hidden');
            } 
            // Scrolleando hacia arriba
            else {
                header.classList.remove('nav-hidden');
            }
        } else {
            // Si está cerca del top, siempre mostrar el nav
            header.classList.remove('nav-hidden');
        }
        
        lastScrollTop = currentScroll;
    }, false);
});
