// inicio.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Sección de Inicio cargada exitosamente.");
  
    // Smooth scroll para los enlaces del navbar y botones de llamada a la acción
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          window.scroll({
            top: target.offsetTop - 60,  // Ajuste para navbar fijo
            behavior: "smooth"
          });
        }
      });
    });
  
    // Ejemplo opcional: activar la animación 'fade-in' para elementos que tengan esta clase
    const faders = document.querySelectorAll(".fade-in");
    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    }, appearOptions);
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });
  