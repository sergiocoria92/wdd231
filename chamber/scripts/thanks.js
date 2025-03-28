document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM completamente cargado'); // Para verificar que el script se carga correctamente

    // 1. Actualizar última modificación
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = "Última modificación: " + document.lastModified;
    }


    });

    // 6. Configurar el campo oculto para la fecha y hora
    const timestampField = document.getElementById('timestamp');
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    // 7. Menú móvil (si existe) - Esto puede ser la fuente del error inicial
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    } else {
        console.warn('Elementos de menú móvil no encontrados');
    }
