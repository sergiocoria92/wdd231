
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


// Actualiza la fecha de última modificación
const lastModifiedElement = document.querySelector("#last-modified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = "Última modificación: " + document.lastModified;
}



document.addEventListener("DOMContentLoaded", function() {
    // Mostrar los valores de los parámetros en la URL
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById('first-name').textContent = urlParams.get('name');
    document.getElementById('last-name').textContent = urlParams.get('last-name');
    document.getElementById('email').textContent = urlParams.get('email');
    document.getElementById('mobile').textContent = urlParams.get('mobile');
    document.getElementById('business').textContent = urlParams.get('business');
    document.getElementById('date').textContent = urlParams.get('timestamp');})

    document.addEventListener("DOMContentLoaded", function () {
        // Obtener la fecha y hora actual
        const currentDate = new Date();
        
        // Formatear la fecha en un formato más legible
        const formattedDate = currentDate.toLocaleString(); // Esto devuelve la fecha y hora en el formato local (dependiendo del navegador del usuario)
    
        // Establecer el valor de la fecha en el campo correspondiente
        document.getElementById('date').textContent = formattedDate;
    });
    


