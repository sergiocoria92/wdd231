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
        let image = document.createElement('img');
        let businessSector = document.createElement('p');
        let membershipLevel = document.createElement('p');

        // Asignar valores del JSON
        fullName.textContent = business.name;
        address.textContent = `Address: ${business.address}`;
        phone.textContent = `Phone: ${business.phone}`;
        hours.textContent = `Hours: ${business.hours}`;
        urlLink.href = business.url;
        urlLink.textContent = "Visit Website";
        urlLink.target = "_blank"; // Abrir en una nueva pestaña
        businessSector.textContent = `Sector: ${business["business sector"]}`;
        membershipLevel.textContent = `Membership Level: ${business["membership level"]}`;

        // Configurar la imagen
        image.src = business.image;
        image.alt = `${business.name} logo`;
        image.style.width = "100px"; // Ajusta el tamaño si es necesario

        // Agregar elementos a la card
        card.appendChild(fullName);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(hours);
        card.appendChild(businessSector);
        card.appendChild(membershipLevel);
        card.appendChild(urlLink);

        // Agregar la card al contenedor
        cards.appendChild(card);
    });
};
