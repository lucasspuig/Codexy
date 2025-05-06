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
  
//animaciones secciones de preguntas//

  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".questions__padding");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Aplicar con delay escalonado
          setTimeout(() => {
            entry.target.classList.add("animate");
          }, index * 200); // 200ms de diferencia por cada bloque
          observer.unobserve(entry.target); // solo una vez
        }
      });
    }, {
      threshold: 0.5 // se activa cuando el 30% del elemento está visible
    });

    elements.forEach(el => observer.observe(el));
  });

//animaciones footer//

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".footer");
  const footerItems = [
    document.querySelector(".footer-logo"),
    ...document.querySelectorAll(".footer-section"),
    document.querySelector(".newsletter-form")
  ];

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        footer.classList.add("animate");

        footerItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("animate");
          }, index * 200); // delay escalonado
        });

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  observer.observe(footer);
});

//animaciones de por que elegirnos//
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".feature-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        entry.target.classList.add("animate-in");
      }
    });
  }, {
    threshold: 0.5
  });

  cards.forEach(card => observer.observe(card));
});