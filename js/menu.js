document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Menú principal
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        nav.classList.toggle('active');
        if (nav.classList.contains('active')) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
            // Cerrar todos los dropdowns
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

    // Dropdowns
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('a');
        dropdownLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                dropdown.classList.toggle('active');
            }
        });
    });

    // Cerrar menú al hacer click en un enlace que no sea dropdown
    const links = document.querySelectorAll('.nav-links a:not(.dropdown > a)');
    links.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            navLinks.style.display = 'none';
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target)) {
            nav.classList.remove('active');
            navLinks.style.display = 'none';
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});
