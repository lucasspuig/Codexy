// Carousel functionality
export function initCarousel() {
    const carousel = document.querySelector('.process-carousel');
    if (!carousel) return;

    const prevButton = document.querySelector('.process-control.prev');
    const nextButton = document.querySelector('.process-control.next');
    let currentRotation = 0;

    // Control buttons
    prevButton.addEventListener('click', () => {
        currentRotation += 90;
        carousel.style.transform = `rotateY(${currentRotation}deg)`;
    });

    nextButton.addEventListener('click', () => {
        currentRotation -= 90;
        carousel.style.transform = `rotateY(${currentRotation}deg)`;
    });

    // Pause/resume rotation on hover
    carousel.addEventListener('mouseenter', () => {
        carousel.style.animationPlayState = 'paused';
    });

    carousel.addEventListener('mouseleave', () => {
        carousel.style.animationPlayState = 'running';
    });
}
