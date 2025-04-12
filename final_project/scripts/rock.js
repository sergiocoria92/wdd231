import { updateLastModified } from './utils.js';

document.addEventListener("DOMContentLoaded", () => {
    updateLastModified();  // ✅ DOM: Manipulación del contenido en el footer con `document.lastModified`
    blinkIcons();
});

// Función para parpadear los íconos
function blinkIcons() {
    const iconFrames = document.querySelectorAll('.icon-frame'); // ✅ DOM: Selección de múltiples elementos del documento (NodeList = Array-like)

    setInterval(() => {
        iconFrames.forEach(frame => { // ✅ ARRAY: Uso de forEach para iterar sobre el NodeList (comportamiento de arreglo)
            frame.style.borderColor = frame.style.borderColor === 'rgba(0, 255, 0, 0.8)' 
                ? 'rgba(0, 255, 0, 0.2)' 
                : 'rgba(0, 255, 0, 0.8)';
        });
    }, 500);
}

// Hamburger menu
document.addEventListener('DOMContentLoaded', function() {
    if (!document.querySelector('.menu-toggle')) {
        const menuToggle = document.createElement('button'); // ✅ DOM: Creación de un elemento del documento
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '☰';
        document.querySelector('header').prepend(menuToggle); // ✅ DOM: Inserción del botón al DOM
    }

    if (!document.querySelector('.nav-overlay')) {
        const overlay = document.createElement('div'); // ✅ DOM: Creación de un div
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay); // ✅ DOM: Agregado al cuerpo del documento
    }

    const menuToggle = document.querySelector('.menu-toggle'); // ✅ DOM
    const navMenu = document.querySelector('.nav'); // ✅ DOM
    const overlay = document.querySelector('.nav-overlay'); // ✅ DOM

    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('active'); // ✅ DOM: Manipulación de clases
        overlay.classList.toggle('active'); // ✅ DOM
    });

    overlay.addEventListener('click', function() {
        navMenu.classList.remove('active'); // ✅ DOM
        overlay.classList.remove('active'); // ✅ DOM
    });

    document.querySelectorAll('.nav a').forEach(link => { // ✅ DOM + ARRAY: Selección de links y recorrido con forEach (array-like)
        link.addEventListener('click', function() {
            navMenu.classList.remove('active'); // ✅ DOM
            overlay.classList.remove('active'); // ✅ DOM
        });
    });
});
