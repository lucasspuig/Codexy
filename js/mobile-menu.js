document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navButtons = document.querySelector('.nav-buttons');

    // Toggle menu on click
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        navButtons.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navLinks.contains(event.target) || 
                            menuToggle.contains(event.target) ||
                            navButtons.contains(event.target);
        
        if (!isClickInside && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            navButtons.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Handle dropdown menus in mobile view
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('a');
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        const dropdownIcon = dropdown.querySelector('.fa-plus');
        let isOpen = false;

        dropdownLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                
                isOpen = !isOpen;
                if (isOpen) {
                    dropdownContent.style.display = 'block';
                    dropdownIcon.classList.add('rotate');
                } else {
                    dropdownContent.style.display = 'none';
                    dropdownIcon.classList.remove('rotate');
                }
            }
        });
    });

    // Cerrar dropdowns cuando se hace click fuera
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            dropdowns.forEach(dropdown => {
                const dropdownContent = dropdown.querySelector('.dropdown-content');
                const dropdownIcon = dropdown.querySelector('.fa-plus');
                if (!dropdown.contains(e.target)) {
                    dropdownContent.style.display = 'none';
                    dropdownIcon.classList.remove('rotate');
                    dropdown.isOpen = false;
                }
            });
        }
    });
});
