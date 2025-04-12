
    window.addEventListener("DOMContentLoaded", () => {
        const params = new URLSearchParams(window.location.search);

        document.getElementById("first-name").textContent = params.get("name") || "";
        document.getElementById("last-name").textContent = params.get("last-name") || "";
        document.getElementById("email").textContent = params.get("email") || "";
        document.getElementById("mobile").textContent = params.get("mobile") || "";
        document.getElementById("city").textContent = params.get("city") || "";
        document.getElementById("age").textContent = params.get("age") || "";
    });

// Actualiza la fecha de última modificación
const lastModifiedElement = document.querySelector("#last-modified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = "last-modified: " + document.lastModified;
}




// Función para inicializar el menú hamburguesa
function initHamburgerMenu() {
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
    
    // Función para alternar el menú
    function toggleMenu() {
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
    }
    
    // Eventos
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });
    
    overlay.addEventListener('click', toggleMenu);
    
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initHamburgerMenu);
