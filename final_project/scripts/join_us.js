// Obtener elementos del DOM
const emailRadio = document.getElementById('notification-email');
const phoneRadio = document.getElementById('notification-phone');
const sideMessage = document.getElementById('side-message');
const messageContent = document.getElementById('message-content');
const closeMessageBtn = document.querySelector('.close-message');

// Mostrar mensaje lateral cuando se selecciona una opción
emailRadio.addEventListener('change', function() {
    if (this.checked) {
        messageContent.textContent = this.getAttribute('data-info');
        sideMessage.style.display = 'block';
    }
});

phoneRadio.addEventListener('change', function() {
    if (this.checked) {
        messageContent.textContent = this.getAttribute('data-info');
        sideMessage.style.display = 'block';
    }
});

// Cerrar mensaje al hacer clic en la X
closeMessageBtn.addEventListener('click', function() {
    sideMessage.style.display = 'none';
});

// Cerrar mensaje automáticamente después de 5 segundos
emailRadio.addEventListener('change', function() {
    if (this.checked) {
        setTimeout(() => {
            sideMessage.style.display = 'none';
        }, 5000);
    }
});

phoneRadio.addEventListener('change', function() {
    if (this.checked) {
        setTimeout(() => {
            sideMessage.style.display = 'none';
        }, 5000);
    }
});




document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        // Evita que se recargue la página si estás en modo de pruebas
        // event.preventDefault();

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

        // Guarda el objeto como string JSON en localStorage
        localStorage.setItem("userData", JSON.stringify(userData));
    });
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


// Actualiza la fecha de última modificación
const lastModifiedElement = document.querySelector("#last-modified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = "last-modified: " + document.lastModified;
}



