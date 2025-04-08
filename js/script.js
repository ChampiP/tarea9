// Script personalizado para mejorar la experiencia de usuario

document.addEventListener("DOMContentLoaded", function () {
    // Ejemplo: Smooth scrolling al hacer click en los enlaces del navbar
    const links = document.querySelectorAll('.navbar-nav a');
    for (const link of links) {
      link.addEventListener('click', smoothScroll);
    }
  
    function smoothScroll(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        window.scroll({
          top: targetSection.offsetTop - 60,  // Ajusta según altura del navbar
          behavior: "smooth"
        });
      }
    }
  
    // Ejemplo: Añadir efecto de aparición (fade-in) a elementos al hacer scroll
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
  
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });
  