document.addEventListener('DOMContentLoaded', function() {
    // Manejar formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            const mailtoLink = `mailto:codexyoficial@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
`Nombre: ${name}
Email: ${email}

Mensaje:
${message}`
            )}`;

            window.location.href = mailtoLink;
            contactForm.reset();
            alert('Abriendo tu cliente de correo...');
        });
    }

    // Manejar formulario de newsletter
    const newsletterForm = document.getElementById('footerNewsletter');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;

            const mailtoLink = `mailto:codexyoficial@gmail.com?subject=${encodeURIComponent('Nueva suscripción al newsletter')}&body=${encodeURIComponent(
`Nuevo suscriptor al newsletter:
Email: ${email}`
            )}`;

            window.location.href = mailtoLink;
            newsletterForm.reset();
            alert('Abriendo tu cliente de correo...');
        });
    }
});
