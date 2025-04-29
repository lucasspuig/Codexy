// Services functionality
export function initServices() {
    // Manejo de servicios expandibles
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(item => {
        const header = item.querySelector('.service-header');
        header.addEventListener('click', () => {
            // Cerrar otros servicios abiertos
            serviceItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Alternar el estado del servicio actual
            item.classList.toggle('active');
        });
    });

    // Manejo de pestañas de servicios
    const serviceTabs = document.querySelectorAll('.service-tab');
    const serviceContents = document.querySelectorAll('.service-content');

    serviceTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remover clase active de todas las pestañas
            serviceTabs.forEach(t => t.classList.remove('active'));
            // Agregar clase active a la pestaña clickeada
            tab.classList.add('active');

            // Mostrar el contenido correspondiente
            const service = tab.dataset.service;
            serviceContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${service}-content`) {
                    content.classList.add('active');
                }
            });
        });
    });
}
