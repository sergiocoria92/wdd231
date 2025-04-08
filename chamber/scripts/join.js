// Menú hamburguesa
const nav = document.querySelector("nav");
if (nav) {
    const menuToggle = document.createElement("div");
    menuToggle.className = "menu-toggle";
    menuToggle.innerHTML = "☰ Menu";
    nav.insertBefore(menuToggle, nav.firstChild);
    
    const navList = document.querySelector("nav ul");
    const body = document.body;

    if (navList) {
        menuToggle.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevenir la propagación del clic

            // Alternar la visibilidad del menú
            navList.classList.toggle("active");


        });
    }

    // Cerrar el menú si se hace clic fuera del menú
    document.addEventListener("click", (event) => {
        if (!nav.contains(event.target) && navList.classList.contains("active")) {
            navList.classList.remove("active");
            body.style.overflow = '';  // Restaurar el scroll
            body.style.paddingRight = ''; // Eliminar el padding extra
        }
    });

    // Evitar que el clic en el menú se propague
    navList.addEventListener("click", (event) => {
        event.stopPropagation();
    });
}

// Actualiza la fecha de última modificación
const lastModifiedElement = document.querySelector("#last-modified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = "Última modificación: " + document.lastModified;
}

// Nota de membresía
const membershipRadios = document.querySelectorAll('input[name="membership-level"]');
const membershipNote = document.getElementById('membershipNote');
const noteContent = document.getElementById('noteContent');
const closeNote = document.querySelector('.close-note');

membershipRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.checked) {
            noteContent.textContent = this.dataset.info;
            membershipNote.classList.add('active');
            
            const radioPosition = this.getBoundingClientRect();
            membershipNote.style.top = `${radioPosition.top + window.scrollY}px`;
        }
    });
});

// Cerrar nota
closeNote.addEventListener('click', function() {
    membershipNote.classList.remove('active');
});

// Cerrar nota al hacer clic fuera
document.addEventListener('click', function(event) {
    if (!membershipNote.contains(event.target)) {
        let isRadio = false;
        membershipRadios.forEach(radio => {
            if (radio.contains(event.target)) {
                isRadio = true;
            }
        });
        
        if (!isRadio) {
            membershipNote.classList.remove('active');
        }
    }
});