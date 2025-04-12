import { updateLastModified } from './utils.js';

document.addEventListener("DOMContentLoaded", () => {
    renderPredefinedUsers();
    loadEventData();
    initHamburgerMenu();
    updateLastModified();
});

function renderPredefinedUsers() {
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

    // Agrega usuario actual desde localStorage si existe
    const currentUser = JSON.parse(localStorage.getItem("userData"));
    if (currentUser) {
        predefinedUsers.push(currentUser);
    }

    const cardsContainer = document.getElementById("cards");

    //templates literals when building strings
    predefinedUsers.forEach(user => {
        const card = document.createElement("div");
        card.className = "vip-card";
        card.innerHTML = `
            <h3>${user.firstName} ${user.lastName}</h3>
            <p><strong>City:</strong> ${user.city}</p>
        `;
        cardsContainer.appendChild(card);
    });
}
//async function loadEventData() {
async function loadEventData() {
    try {
        const response = await fetch("vip.json"); // Fetch the JSON data -API
        const data = await response.json();

        const container = document.querySelector(".grid-container");

        data.forEach(event => {
            const card = document.createElement("div");
            card.classList.add("event-card");

            card.innerHTML = `
                <img src="${event.url}" alt="${event.title}" loading="lazy">
                <div class="event-info">
                    <h3>${event.title}</h3>
                    <p>${event.description}</p>
                </div>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Error loading event data:", error);
    }
}

function initHamburgerMenu() {
    if (!document.querySelector('.menu-toggle')) {
        const menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '☰';
        document.querySelector('header').prepend(menuToggle);
    }

    if (!document.querySelector('.nav-overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav');
    const overlay = document.querySelector('.nav-overlay');

    function toggleMenu() {
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    menuToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleMenu();
    });

    overlay.addEventListener('click', toggleMenu);

    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
}


