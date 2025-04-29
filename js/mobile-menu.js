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
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.querySelector('.dropdown-content').classList.toggle('show');
                this.querySelector('.fa-plus').classList.toggle('rotate');
            }
        });
    });
});
