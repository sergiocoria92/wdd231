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