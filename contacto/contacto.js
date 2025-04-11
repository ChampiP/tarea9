fetch('contacto/contacto.html') // Asegúrate de especificar la carpeta y el archivo
.then(response => response.text())
.then(data => {
    document.getElementById('Contacto').innerHTML = data; // Inserta el contenido en el div
})
.catch(error => console.error('Error al cargar la sección:', error)); // Manejo de errores
