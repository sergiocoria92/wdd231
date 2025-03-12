document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const menu = document.querySelector("nav ul");

    // Verifica que los elementos 'nav' y 'menu' existan antes de proceder
    if (!nav || !menu) return; // Si no existen, se sale de la función

    function createMenuToggle() {
        const menuToggle = document.createElement("button");
        menuToggle.classList.add("menu-toggle");
        menuToggle.innerHTML = "☰";

        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("active");
        });

        return menuToggle;
    }

    let menuToggle;

    // Solo agrega el botón si estamos en una pantalla pequeña
    if (window.innerWidth <= 768) {
        menuToggle = createMenuToggle();
        nav.prepend(menuToggle);
    }

    // Ajusta cuando la pantalla cambia de tamaño
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            // Elimina el botón de menú en pantallas grandes
            menu.classList.remove("active");
            const toggleButton = document.querySelector(".menu-toggle");
            if (toggleButton) {
                nav.removeChild(toggleButton);
            }
        } else {
            // Agrega el botón solo si no existe
            if (!document.querySelector(".menu-toggle")) {
                menuToggle = createMenuToggle();
                nav.prepend(menuToggle);
            }
        }
    });

// Actualiza la fecha de última modificación
const lastModifiedElement = document.querySelector("#last-modified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = "Última modificación: " + document.lastModified;
}

    // Llamamos a la función para aplicar los colores en los botones de cursos completos al cargar la página
    highlightCompletedCourses();
});

// Función que resalta los cursos "completos"
function highlightCompletedCourses() {
    const buttonsContainer = document.querySelector(".course-buttons");
    if (!buttonsContainer) return; // Evita errores si el contenedor no existe

    const buttons = buttonsContainer.querySelectorAll("button");

    buttons.forEach(button => {
        // Lógica para cursos completos (WDD 130, WDD 131, CSE 110 y CSE 111)
        if (button.classList.contains('wdd') && (button.textContent === 'WDD 130' || button.textContent === 'WDD 131') || 
            button.classList.contains('cse') && (button.textContent === 'CSE 110' || button.textContent === 'CSE 111')) {
            // Si es un curso completo, mantenemos el color naranja
            button.style.backgroundColor = "orange";
            button.style.color = "white";
        }
    });
}

// Filtra los botones por categoría
function filterSelection(category) {
    const buttonsContainer = document.querySelector(".course-buttons");
    if (!buttonsContainer) return; // Evita errores si el contenedor no existe

    const buttons = buttonsContainer.querySelectorAll("button");

    buttons.forEach(button => {
        // Mostrar solo los botones que coinciden con la categoría
        if (category === "all" || button.classList.contains(category)) {
            button.style.display = "inline-block";
        } else {
            button.style.display = "none";
        }

        // Lógica para cursos completos (WDD 130, WDD 131, CSE 110 y CSE 111)
        if (button.classList.contains('wdd') && (button.textContent === 'WDD 130' || button.textContent === 'WDD 131') || 
            button.classList.contains('cse') && (button.textContent === 'CSE 110' || button.textContent === 'CSE 111')) {
            // Si es un curso completo, mantenemos el color naranja
            button.style.backgroundColor = "orange";
            button.style.color = "white";
        } else {
            // Restablecer el color a lo normal si no es un curso completo
            button.style.backgroundColor = "";
            button.style.color = "";
        }
    });
}
