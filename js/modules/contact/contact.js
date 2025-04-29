// Contact form functionality
export function initContact() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Aquí puedes agregar la lógica para enviar el formulario
        const formData = new FormData(contactForm);
        
        // Ejemplo de envío del formulario
        try {
            // Aquí iría la llamada a tu API
            console.log('Formulario enviado', Object.fromEntries(formData));
            alert('Mensaje enviado con éxito');
            contactForm.reset();
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            alert('Error al enviar el mensaje');
        }
    });
}
