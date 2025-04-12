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



/*hamburger*/
// Crear elementos dinámicos para el menú móvil
document.addEventListener('DOMContentLoaded', function() {
    // Crear botón hamburguesa si no existe
    if (!document.querySelector('.menu-toggle')) {
        const menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '☰';
        document.querySelector('header').prepend(menuToggle);
    }
    
    // Crear overlay si no existe
    if (!document.querySelector('.nav-overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);
    }
    
    // Elementos del menú
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav');
    const overlay = document.querySelector('.nav-overlay');
    
    // Alternar menú al hacer clic
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en overlay
    overlay.addEventListener('click', function() {
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
/*end hamburger */
    
    // Resto de tu código JavaScript...
    blinkIcons();
    updateLastModified();
});

function blinkIcons() {
    const iconFrames = document.querySelectorAll('.icon-frame');
    setInterval(() => {
        iconFrames.forEach(frame => {
            frame.style.borderColor = frame.style.borderColor === 'rgba(0, 255, 0, 0.8)' 
                ? 'rgba(0, 255, 0, 0.2)' 
                : 'rgba(0, 255, 0, 0.8)';
        });
    }, 500);
}

import { updateLastModified } from './utils.js';

document.addEventListener("DOMContentLoaded", () => {
    updateLastModified();
});
    