document.addEventListener("DOMContentLoaded", () => {
    // Usuarios precargados (puedes editar o agregar más)
    const predefinedUsers = [
        {
            firstName: "Luis",
            lastName: "Rey",
            city: "NEW YORK",
        },
        {
            firstName: "Valeria",
            lastName: "Lopez",
            city: "CDMX",
        },
        {
            firstName: "Carlos",
            lastName: "Ramirez",
            city: "Monterrey",
        },
        {
            firstName: "Fernanda",
            lastName: "Martinez",
            city: "Guadalajara",
        }
    ];

    // Obtener datos del usuario actual desde localStorage (si hay)
    const currentUser = JSON.parse(localStorage.getItem("userData"));

    // Si hay datos nuevos, los agregamos a la lista
    if (currentUser) {
        predefinedUsers.push(currentUser);
    }

    const cardsContainer = document.getElementById("cards");

    predefinedUsers.forEach(user => {
        const card = document.createElement("div");
        card.className = "vip-card";
        card.innerHTML = `
            <h3>${user.firstName} ${user.lastName}</h3>
            <p><strong>City:</strong> ${user.city}</p>
        `;
        cardsContainer.appendChild(card);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    fetch("vip.json")
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector(".grid-container");

            data.forEach(event => {
                const card = document.createElement("div");
                card.classList.add("event-card");

                card.innerHTML = `
                    <!-- Aquí agregamos loading="lazy" para la carga diferida de las imágenes -->
                    <img src="${event.url}" alt="${event.title}" loading="lazy">
                    <div class="event-info">
                        <h3>${event.title}</h3>
                        <p>${event.description}</p>
                    </div>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error loading event data:", error);
        });
});

// Función para inicializar el menú hamburguesa
function initHamburgerMenu() {
    // Crear botón hamburguesa si no existe
    if (!document.querySelector('.menu-toggle')) {
        const menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '☰';
        document.querySelector('header').prepend(menuToggle);
    }
    
    // Crear overlay si no existe
    if (!document.querySelector('.nav-overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);
    }
    
    // Elementos del menú
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav');
    const overlay = document.querySelector('.nav-overlay');
    
    // Función para alternar el menú
    function toggleMenu() {
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
    }
    
    // Eventos
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });
    
    overlay.addEventListener('click', toggleMenu);
    
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initHamburgerMenu);

import { updateLastModified } from './utils.js';

document.addEventListener("DOMContentLoaded", () => {
    updateLastModified();
});
