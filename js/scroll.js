document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    const minScrollDistance = 50; // Mínima distancia de scroll para activar

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#inicio') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
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
