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
        lastModifiedElement.textContent = "Last Modified: " + document.lastModified;
    }
});

// Filtra los botones por categoría
function filterSelection(category) {
    const buttonsContainer = document.querySelector(".course-buttons");
    if (!buttonsContainer) return; // Evita errores si el contenedor no existe

    const buttons = buttonsContainer.querySelectorAll("button");

    buttons.forEach(button => {
        // Mostrar solo los botones que coinciden con la categoría
        button.style.display = (category === "all" || button.classList.contains(category)) ? "inline-block" : "none";
    });
}
