document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Menú principal
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        nav.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        if (nav.classList.contains('active')) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }
    });

    // Dropdowns
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('a');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        dropdownLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                
                // Cerrar otros dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });
                
                dropdown.classList.toggle('active');
                
                // Mostrar/ocultar el contenido del dropdown
                if (dropdownContent) {
                    if (dropdown.classList.contains('active')) {
                        dropdownContent.style.display = 'block';
                        dropdownContent.style.opacity = '1';
                        dropdownContent.style.visibility = 'visible';
                        dropdownContent.style.transform = 'translateY(0)';
                    }
                }
            }
        });
    });

    // Cerrar menú al hacer click en un enlace que no sea dropdown
    const links = document.querySelectorAll('.nav-links a:not(.dropdown > a)');
    links.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            document.body.classList.remove('menu-open');
            navLinks.style.display = 'none';
        });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target)) {
            nav.classList.remove('active');
            document.body.classList.remove('menu-open');
            navLinks.style.display = 'none';
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});
