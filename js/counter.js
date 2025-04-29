document.addEventListener('DOMContentLoaded', () => {
    // Función para animar el contador
    function animateValue(element, start, end, duration) {
        const range = end - start;
        const increment = range / (duration / 16); // 60fps aprox
        let current = start;
        const suffix = element.dataset.suffix || '';

        const animate = () => {
            current += increment;
            if ((increment >= 0 && current >= end) || (increment < 0 && current <= end)) {
                element.textContent = end + suffix;
                return;
            }
            element.textContent = Math.floor(current) + suffix;
            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }

    // Función para verificar si un elemento está en el viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Inicializar contadores
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;

    function initCounters() {
        if (!animated && statNumbers.length > 0 && isInViewport(statNumbers[0])) {
            animated = true;
            statNumbers.forEach(number => {
                const value = parseInt(number.dataset.value);
                const suffix = number.textContent.includes('+') ? '+' : 
                              number.textContent.includes('%') ? '%' : '';
                number.dataset.suffix = suffix;
                animateValue(number, 0, value, 2000);
            });
        }
    }

    // Verificar al cargar y al hacer scroll
    initCounters();
    window.addEventListener('scroll', initCounters);
});

