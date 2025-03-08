document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.createElement("button");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "☰";
    
    const nav = document.querySelector("nav");
    const menu = document.querySelector("nav ul");

    // Solo agrega el botón si estamos en una pantalla pequeña
    if (window.innerWidth <= 768) {
        nav.prepend(menuToggle);
    }

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Ajusta cuando la pantalla cambia de tamaño
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            menu.classList.remove("active");
            if (menuToggle.parentElement === nav) {
                nav.removeChild(menuToggle);
            }
        } else {
            if (!document.querySelector(".menu-toggle")) {
                nav.prepend(menuToggle);
            }
        }
    });
});




document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("last-modified").textContent = "Last Modified: " + document.lastModified;
});

function filterSelection(category) {
    let buttons = document.querySelectorAll(".course-buttons button");
    
    if (category === "all") {
        buttons.forEach(button => button.style.display = "inline-block");
    } else {
        buttons.forEach(button => {
            if (button.classList.contains(category)) {
                button.style.display = "inline-block";
            } else {
                button.style.display = "none";
            }
        });
    }
}
