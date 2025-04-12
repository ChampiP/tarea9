// Mostrar la sección "Sobre Nosotros" con una animación
const sobreNosotrosSection = document.querySelector('.sobre-nosotros');
const content = document.querySelector('.content');

window.addEventListener('scroll', () => {
    if (sobreNosotrosSection.getBoundingClientRect().top < window.innerHeight) {
        content.classList.add('show');
    }
});

// Agregar animaciones a las imágenes
const images = document.querySelectorAll('.images img');

images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});