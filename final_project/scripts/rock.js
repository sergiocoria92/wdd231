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
    lastModifiedElement.textContent = "Última modificación: " + document.lastModified;
}
