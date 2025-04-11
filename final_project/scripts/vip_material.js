document.addEventListener("DOMContentLoaded", () => {
    const data = JSON.parse(localStorage.getItem("userData"));
    const cardsContainer = document.getElementById("cards");

    if (data) {
        const card = document.createElement("div");
        card.className = "vip-card";
        card.innerHTML = `
            <h3>${data.firstName} ${data.lastName}</h3>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.mobile}</p>
            <p><strong>City:</strong> ${data.city}</p>
            <p><strong>Age:</strong> ${data.age}</p>
            <p><strong>Notification:</strong> ${data.notification}</p>
            <p><strong>Message:</strong> ${data.message}</p>
        `;
        cardsContainer.appendChild(card);
    }
});


document.addEventListener("DOMContentLoaded", () => {
    // Usuarios precargados (puedes editar o agregar más)
    const predefinedUsers = [
        {
            firstName: "Luis",
            lastName: "Rey",
            email: "rey@rey.com",
            mobile: "12121212",
            city: "NEW YORK",
            age: "25",
            notification: "phone",
            message: "hi there!"
        },
        {
            firstName: "Valeria",
            lastName: "Lopez",
            email: "val@correo.com",
            mobile: "2223334444",
            city: "CDMX",
            age: "28",
            notification: "email",
            message: "¡Me encanta esta comunidad!"
        },
        {
            firstName: "Carlos",
            lastName: "Ramirez",
            email: "carlos.ram@live.com",
            mobile: "5533441122",
            city: "Monterrey",
            age: "35",
            notification: "phone",
            message: "¿Cuándo es el próximo evento?"
        },
        {
            firstName: "Fernanda",
            lastName: "Martinez",
            email: "fermart@gmail.com",
            mobile: "9876543210",
            city: "Guadalajara",
            age: "30",
            notification: "email",
            message: "Thanks for the support!"
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
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.mobile}</p>
            <p><strong>City:</strong> ${user.city}</p>
            <p><strong>Age:</strong> ${user.age}</p>
            <p><strong>Notification:</strong> ${user.notification}</p>
            <p><strong>Message:</strong> ${user.message}</p>
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

