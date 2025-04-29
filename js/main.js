// Import modules
import { initMenu } from './modules/menu/menu.js';
import { initTheme } from './modules/theme/theme.js';
import { initCarousel } from './modules/carousel/carousel.js';
import { initServices } from './modules/services/services.js';
import { initAnimations } from './modules/animations/animations.js';
import { initScroll } from './modules/scroll/scroll.js';
import { initContact } from './modules/contact/contact.js';
import { initQuestions } from './modules/questions/questions.js';

// Initialize all modules when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    initTheme();
    initCarousel();
    initServices();
    initAnimations();
    initScroll();
    initContact();
    initQuestions();
});
