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
            event.preventDefault(); // Evita que el formulario se envíe
    
            const userData = {
                firstName: document.getElementById("name").value,
                lastName: document.getElementById("last-name").value,
                email: document.getElementById("user-email").value,
                mobile: document.getElementById("user-mobile").value,
                city: document.getElementById("city").value,
                age: document.getElementById("age").value,
                notification: document.querySelector("input[name='notification']:checked")?.value || "",
                message: document.getElementById("user-description").value,
                timestamp: new Date().toISOString()
            };
    
            localStorage.setItem("userData", JSON.stringify(userData));
            window.location.href = "next_step.html";
            
            alert("Datos guardados correctamente"); // Opcional: confirmación
            form.reset(); // Opcional: limpia el formulario
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
