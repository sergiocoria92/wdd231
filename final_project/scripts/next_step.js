document.addEventListener("DOMContentLoaded", () => {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
        document.getElementById("first-name").textContent = userData.firstName || "";
        document.getElementById("last-name").textContent = userData.lastName || "";
        document.getElementById("email").textContent = userData.email || "";
        document.getElementById("mobile").textContent = userData.mobile || "";
        document.getElementById("city").textContent = userData.city || "";
        document.getElementById("age").textContent = userData.age || "";
    }  
    else {
        console.warn("No se encontraron datos en localStorage");
      }
    });



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



import { updateLastModified } from './utils.js'; // import function from utils.js

document.addEventListener("DOMContentLoaded", () => {
    updateLastModified();
});



document.addEventListener("DOMContentLoaded", () => {
    const data = JSON.parse(localStorage.getItem("jurFormData"));
  
    if (data) {
      document.getElementById("first-name").textContent = data.name || '';
      document.getElementById("last-name").textContent = data["last-name"] || '';
      document.getElementById("email").textContent = data.user_email || '';
      document.getElementById("mobile").textContent = data.mobile || '';
      document.getElementById("city").textContent = data.city || '';
      document.getElementById("age").textContent = data.age || '';
    }
  });
  