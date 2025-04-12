


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
                    <img src="${event.url}" alt="${event.title}">
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



// Actualiza la fecha de última modificación
const lastModifiedElement = document.querySelector("#last-modified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = "Última modificación: " + document.lastModified;
}

