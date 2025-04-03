

//menu interactivo:
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todos los enlaces del menú
    const menuLinks = document.querySelectorAll('.nav-list a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar la redirección inmediata

            // Agregar la clase de parpadeo al elemento li (en lugar de al enlace)
            this.parentElement.classList.add('blink');

            // Después de un breve delay, redirigir
            setTimeout(() => {
                window.location.href = this.href; // Redirige a la URL del enlace
            }, 500); // El delay debe coincidir con el tiempo de la animación
        });
    });
});



