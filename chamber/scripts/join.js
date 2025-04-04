// Menú hamburguesa
const nav = document.querySelector("nav");
if (nav) {
    const menuToggle = document.createElement("div");
    menuToggle.className = "menu-toggle";
    menuToggle.innerHTML = "☰ Menu";
    nav.insertBefore(menuToggle, nav.firstChild);
    
    const navList = document.querySelector("nav ul");
    const body = document.body;  // Añadimos una referencia al cuerpo

    if (navList) {
        menuToggle.addEventListener("click", (event) => {
            // Evitar que se propague el evento de clic
            event.stopPropagation();
            navList.classList.toggle("active");
            if (navList.classList.contains("active")) {
                // Cuando el menú se abre, desplazamos el contenido hacia abajo
                body.style.overflow = 'hidden'; // Desactiva el scroll
                document.documentElement.style.scrollBehavior = 'smooth'; // Para una transición suave
            } else {
                // Restauramos el scroll cuando el menú se cierra
                body.style.overflow = ''; // Reactiva el scroll
            }
        });
    }

    // Cerrar el menú si se hace clic fuera del menú
    document.addEventListener("click", (event) => {
        if (!nav.contains(event.target) && navList.classList.contains("active")) {
            navList.classList.remove("active");
            body.style.overflow = '';  // Restauramos el scroll
        }
    });

    // Evitar que el clic en el menú se propague
    navList.addEventListener("click", (event) => {
        event.stopPropagation();
    });
}
