document.addEventListener('DOMContentLoaded', () => {
    // Animación de entrada para los elementos
    const animateElements = () => {
        const elements = document.querySelectorAll('.contact-method, .form-group');
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            setTimeout(() => {
                el.style.transition = 'all 0.6s ease';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    };

    // Validación del formulario
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        // Efecto de label flotante
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });

        // Validación en tiempo real
        input.addEventListener('input', () => {
            validateInput(input);
        });
    });

    const validateInput = (input) => {
        const parent = input.parentElement;
        const errorElement = parent.querySelector('.error-message') || 
                           createErrorElement(parent);

        if (input.validity.valid) {
            parent.classList.remove('error');
            errorElement.style.display = 'none';
        } else {
            parent.classList.add('error');
            errorElement.style.display = 'block';
            errorElement.textContent = getErrorMessage(input);
        }
    };

    const createErrorElement = (parent) => {
        const error = document.createElement('span');
        error.className = 'error-message';
        parent.appendChild(error);
        return error;
    };

    const getErrorMessage = (input) => {
        const validity = input.validity;
        
        if (validity.valueMissing) return 'Este campo es requerido';
        if (validity.typeMismatch) {
            if (input.type === 'email') return 'Por favor, ingresa un email válido';
            return 'Formato inválido';
        }
        if (validity.tooShort) return `Mínimo ${input.minLength} caracteres`;
        if (validity.tooLong) return `Máximo ${input.maxLength} caracteres`;
        
        return 'Valor inválido';
    };

    // Manejo del envío del formulario
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Validar todos los campos
        let isValid = true;
        inputs.forEach(input => {
            validateInput(input);
            if (!input.validity.valid) isValid = false;
        });

        if (!isValid) return;

        // Animación de envío
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Enviando...';

        try {
            // Simular envío (reemplazar con tu endpoint real)
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Mostrar mensaje de éxito
            showNotification('¡Mensaje enviado con éxito!', 'success');
            form.reset();
            inputs.forEach(input => {
                input.parentElement.classList.remove('focused');
            });
        } catch (error) {
            showNotification('Error al enviar el mensaje. Por favor, intenta nuevamente.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    });

    // Sistema de notificaciones
    const showNotification = (message, type = 'success') => {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <p>${message}</p>
        `;
        
        document.body.appendChild(notification);
        
        // Animación de entrada
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Remover después de 5 segundos
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    };

    // Iniciar animaciones
    animateElements();
});
