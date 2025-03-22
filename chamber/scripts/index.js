// Selecciona los botones y el contenedor
const gridViewButton = document.querySelector("#grid-view");
const listViewButton = document.querySelector("#list-view");
const cardsContainer = document.querySelector("#cards");

// Verifica que el contenedor #cards exista
if (!cardsContainer) {
    console.error("No se encontró el contenedor #cards en el HTML.");
}



// Actualiza la fecha de última modificación
const lastModifiedElement = document.querySelector("#last-modified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = "Última modificación: " + document.lastModified;
}

const url = "https://sergiocoria92.github.io/wdd231/chamber/data/members.json";

// Obtiene los datos del JSON
// Obtiene los datos del JSON
async function getBusinessData() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();

        if (!Array.isArray(data)) throw new Error("El formato de datos no es un array.");
        
        displayGoldMembers(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
// Muestra solo 3 negocios aleatorios con '3-gold'
function displayGoldMembers(directory) {
    const title = document.createElement('h2');
    title.textContent = "Featured Users";
    cardsContainer.innerHTML = ""; // Limpia el contenedor antes de añadir nuevos elementos
    cardsContainer.appendChild(title);

    const goldMembers = directory.filter(business => business["membership level"] === "3-gold");

    if (goldMembers.length === 0) {
        cardsContainer.innerHTML += "<p>No featured users available.</p>";
        return;
    }

    // Mezcla el array aleatoriamente
    const shuffledMembers = goldMembers.sort(() => 0.5 - Math.random());

    // Toma solo los primeros 3 miembros
    const selectedMembers = shuffledMembers.slice(0, 3);

    selectedMembers.forEach(business => {
        let card = document.createElement('section');
        card.classList.add("card");

        let fullName = document.createElement('h2');
        fullName.textContent = business.name || "Nombre no disponible";

        let image = document.createElement('img');
        image.src = business.image || "default-image.jpg";
        image.alt = `${business.name || "Business"} logo`;
        image.style.width = "100px";

        let address = document.createElement('p');
        address.textContent = `Address: ${business.address || "No disponible"}`;

        let phone = document.createElement('p');
        phone.textContent = `Phone: ${business.phone || "No disponible"}`;

        let hours = document.createElement('p');
        hours.textContent = `Hours: ${business.hours || "No disponible"}`;

        let urlLink = document.createElement('a');
        urlLink.href = business.url || "#";
        urlLink.textContent = business.url ? "Visit Website" : "No Website Available";
        urlLink.target = "_blank";

        card.append(fullName, image, address, phone, hours, urlLink);
        cardsContainer.appendChild(card);
    });
}
