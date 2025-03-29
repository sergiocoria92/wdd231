// Actualiza la fecha de última modificación
document.addEventListener("DOMContentLoaded", function() {
    // Actualizar la fecha de última modificación
    const lastModifiedElement = document.querySelector("#last-modified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = "Last modified: " + document.lastModified;
        }
    });

    // Timestamp
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    // Menú hamburguesa
    const nav = document.querySelector("nav");
    if (nav) {
        const menuToggle = document.createElement("div");
        menuToggle.className = "menu-toggle";
        menuToggle.innerHTML = "☰ Menu";
        nav.insertBefore(menuToggle, nav.firstChild);
        
        const navList = document.querySelector("nav ul");
        if (navList) {
            menuToggle.addEventListener("click", () => {
                navList.classList.toggle("active");
            });
        }
    }

    // Funcionalidad del modal
const modal = document.getElementById('membershipModal');
if (modal) {
    const modalContent = document.getElementById('modalContent');
    const closeBtn = document.querySelector('.close-modal');
    
    // Obtener todos los botones de radio
    const membershipRadios = document.querySelectorAll('input[name="membership-level"]');
    
    // Agregar evento click a cada botón de radio
    membershipRadios.forEach(radio => {
        radio.addEventListener('click', function() {
            const info = this.getAttribute('data-info');
            modalContent.innerHTML = `<h3>${this.value.toUpperCase()} Membership</h3><p>${info}</p>`;
            modal.style.display = 'block';
        });
    });
    
    // Cerrar el modal cuando se hace clic en X
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    // Cerrar el modal cuando se hace clic fuera del modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}