// Actualiza la fecha de última modificación
const lastModifiedElement = document.querySelector("#last-modified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = "Última modificación: " + document.lastModified;
}






const cards = document.querySelector('#cards');

const url = "https://sergiocoria92.github.io/wdd231/data/members.json";

async function getBusinessData() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        console.table(data);
        displayBusinesses(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getBusinessData();

const displayBusinesses = (directory) => {
    directory.forEach((business) => {
        // Crear elementos
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let hours = document.createElement('p');
        let urlLink = document.createElement('a');

        // Asignar valores del JSON
        fullName.textContent = business.name;
        address.textContent = `Address: ${business.address}`;
        phone.textContent = `Phone: ${business.phone}`;
        hours.textContent = `Hours: ${business.hours}`;
        urlLink.href = business.url;
        urlLink.textContent = "Visit Website";
        urlLink.target = "_blank"; // Abrir en una nueva pestaña

        // Agregar elementos a la card
        card.appendChild(fullName);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(hours);
        card.appendChild(urlLink);

        // Agregar la card al contenedor
        cards.appendChild(card);
    });
};
