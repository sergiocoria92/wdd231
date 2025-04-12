// JavaScript para hacer parpadear los marcos de los iconos
function blinkIcons() {
    const iconFrames = document.querySelectorAll('.icon-frame');
    
    setInterval(() => {
        iconFrames.forEach(frame => {
            // Alternamos el color del borde entre el verde fosforescente y transparente
            frame.style.borderColor = frame.style.borderColor === 'rgba(0, 255, 0, 0.8)' ? 'rgba(0, 255, 0, 0.2)' : 'rgba(0, 255, 0, 0.8)';
        });
    }, 500); // Parpadeo cada 1 segundo (1000ms)
}

// Ejecutar la función al cargar la página
window.onload = blinkIcons;

// Actualiza la fecha de última modificación
const lastModifiedElement = document.querySelector("#last-modified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = "last-modified: " + document.lastModified;
}



/*hamburger */

document.addEventListener('DOMContentLoaded', function() {
    // Crear el ícono de hamburguesa
    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger-menu');
    for (let i = 0; i < 3; i++) {
        const div = document.createElement('div');
        hamburger.appendChild(div);
    }

    // Agregar el ícono de hamburguesa antes del menú
    const header = document.querySelector('header');
    header.appendChild(hamburger);

    // Seleccionar el menú y el ícono de hamburguesa
    const menu = document.querySelector('.nav');

    // Agregar un evento de clic al ícono de hamburguesa
    hamburger.addEventListener('click', () => {
        // Alternar la clase 'active' para mostrar u ocultar el menú
        menu.classList.toggle('active');
    });
});
