// Menu functionality
export function initMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelector('.nav-links');

    if (!menuToggle || !nav || !navLinks) {
        console.error('Menu elements not found');
        return;
    }

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        if (nav.classList.contains('active')) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }
    });

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            navLinks.style.display = 'none';
        });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
            navLinks.style.display = 'none';
        }
    });
}
