//DOM
const emailRadio = document.getElementById('notification-email');
const phoneRadio = document.getElementById('notification-phone');
const sideMessage = document.getElementById('side-message'); //MODAL
const messageContent = document.getElementById('message-content');
const closeMessageBtn = document.querySelector('.close-message');

// Event listeners para el modal
if (phoneRadio && sideMessage && messageContent && closeMessageBtn) {
    phoneRadio.addEventListener('change', function() {
        if (this.checked) {
            messageContent.textContent = this.getAttribute('data-info');
            sideMessage.style.display = 'block';
            
            // Cerrar automáticamente después de 5 segundos
            setTimeout(() => {
                sideMessage.style.display = 'none';
            }, 5000);
        }
    });

    emailRadio.addEventListener('change', function() {
        if (this.checked) {
            messageContent.textContent = this.getAttribute('data-info');
            sideMessage.style.display = 'block';
            
            // Cerrar automáticamente después de 5 segundos
            setTimeout(() => {
                sideMessage.style.display = 'none';
            }, 5000);
        }
    });

    closeMessageBtn.addEventListener('click', function() {
        sideMessage.style.display = 'none';
    });
}






document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Detiene el submit normal
  
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
  
      // Guardamos en localStorage
      localStorage.setItem("jurFormData", JSON.stringify(data));
  
      // Redireccionamos a la siguiente página
      window.location.href = "next_step.html";
    });
  });
  





// hamburger menu
function initHamburgerMenu() {
    if (!document.querySelector('.menu-toggle')) {
        const menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '☰';
        document.querySelector('header').prepend(menuToggle);
    }
    
    // Create overlay 
    if (!document.querySelector('.nav-overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);
    }
    
    //Menu elements
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav');
    const overlay = document.querySelector('.nav-overlay');
    
    //
    function toggleMenu() {
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
    }
    
    // Events
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });
    
    overlay.addEventListener('click', toggleMenu);
    
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
}

// DOM 
document.addEventListener('DOMContentLoaded', initHamburgerMenu);


import { updateLastModified } from './utils.js';

document.addEventListener("DOMContentLoaded", () => {
    updateLastModified();
});
