// Prevenir scroll automático
if (window.location.hash) {
    window.scrollTo(0, 0);
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 1);
}

document.addEventListener('DOMContentLoaded', function() {
    // Observer para el hero
    const heroObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                requestAnimationFrame(() => {
                    entry.target.classList.add('visible');
                });
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });



    // Observar la sección hero
    const hero = document.querySelector('.hero');
    if (hero) {
        if (window.scrollY < 50) {
            setTimeout(() => {
                hero.classList.add('visible');
            }, 100);
        } else {
            heroObserver.observe(hero);
        }
    }



    // Limpiar el hash de la URL sin causar scroll
    if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname);
        window.scrollTo(0, 0);
    }
});
   ///mockuo iphone///

  document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.5 // actúa cuando el 30% del elemento es visible
    });

    const target = document.querySelector('.mockup-container');
    if (target) observer.observe(target);
  });

////animaciones para portfolio////

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".portfolio-item");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Solo animar una vez
        }
      });
    }, { threshold: 0.7 });

    items.forEach((item) => {
      observer.observe(item);
    });
  });

  //animacion tarjeta de servicio//

  document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Solo animar una vez
        }
      });
    }, { threshold: 0.7 });

    items.forEach((item) => {
      observer.observe(item);
    });
  });
  
  //fotter brand//
  document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".footer-logo");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Solo animar una vez
        }
      });
    }, { threshold: 0.7 });

    items.forEach((item) => {
      observer.observe(item);
    });
  });
  