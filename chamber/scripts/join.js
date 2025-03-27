// Actualiza la fecha de última modificación
const lastModifiedElement = document.querySelector("#last-modified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = "Última modificación: " + document.lastModified;
}

const url = "https://sergiocoria92.github.io/wdd231/chamber/data/members.json";

// Manejo del menú móvil
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");
mobileMenu.addEventListener("click", () => navList.classList.toggle("active"));



// Función para obtener la fecha y hora actual y colocarla en el campo oculto
document.addEventListener("DOMContentLoaded", function() {
    var currentDate = new Date(); // Obtener la fecha y hora actual
    var timestampField = document.getElementById("timestamp"); // Seleccionar el campo oculto
    timestampField.value = currentDate.toISOString(); // Asignar la fecha y hora actual al campo (en formato ISO)
});
