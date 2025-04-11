
    window.addEventListener("DOMContentLoaded", () => {
        const params = new URLSearchParams(window.location.search);

        document.getElementById("first-name").textContent = params.get("name") || "";
        document.getElementById("last-name").textContent = params.get("last-name") || "";
        document.getElementById("email").textContent = params.get("email") || "";
        document.getElementById("mobile").textContent = params.get("mobile") || "";
        document.getElementById("city").textContent = params.get("city") || "";
        document.getElementById("age").textContent = params.get("age") || "";
    });

// Actualiza la fecha de última modificación
const lastModifiedElement = document.querySelector("#last-modified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = "Última modificación: " + document.lastModified;
}

