// Selecciona los botones y el contenedor
const gridViewButton = document.querySelector("#grid-view");
const listViewButton = document.querySelector("#list-view");
const cardsContainer = document.querySelector("#cards");

// Establece la vista en cuadrícula por defecto
cardsContainer.classList.add("grid-view");

// Cambia a vista cuadrícula
gridViewButton.addEventListener("click", () => {
    cardsContainer.classList.remove("list-view");
    cardsContainer.classList.add("grid-view");
});

// Cambia a vista lista
listViewButton.addEventListener("click", () => {
    cardsContainer.classList.remove("grid-view");
    cardsContainer.classList.add("list-view");
});



// Actualiza la fecha de última modificación
const lastModifiedElement = document.querySelector("#last-modified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = "Última modificación: " + document.lastModified;
}

const cards = document.querySelector('#cards');
const url = "https://sergiocoria92.github.io/wdd231/chamber/data/members.json";

// Verifica que el contenedor #cards exista
if (!cards) {
    console.error("No se encontró el contenedor #cards en el HTML.");
}

// Obtiene los datos del JSON
async function getBusinessData() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        
        console.table(data);
        
        // Verifica que la data es un array antes de usar forEach
        if (!Array.isArray(data)) {
            throw new Error("El formato de datos no es un array.");
        }

        displayBusinesses(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Muestra los negocios en tarjetas
function displayBusinesses(directory) {
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

        // Asignar valores del JSON con validaciones
        fullName.textContent = business.name || "Nombre no disponible";
        address.textContent = `Address: ${business.address || "No disponible"}`;
        phone.textContent = `Phone: ${business.phone || "No disponible"}`;
        hours.textContent = `Hours: ${business.hours || "No disponible"}`;
        
        // Configurar el enlace
        if (business.url) {
            urlLink.href = business.url;
            urlLink.textContent = "Visit Website";
            urlLink.target = "_blank"; // Abrir en una nueva pestaña
        } else {
            urlLink.textContent = "No disponible";
            urlLink.style.color = "gray"; // Opcional, para indicar que no hay enlace
        }

        businessSector.textContent = `Sector: ${business["business sector"] || "No disponible"}`;
        membershipLevel.textContent = `Membership Level: ${business["membership level"] || "No disponible"}`;

        // Configurar la imagen con valor por defecto
        image.src = business.image || "default-image.jpg";
        image.alt = `${business.name || "Negocio"} logo`;
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

        // Agregar la card al contenedor si existe
        if (cards) {
            cards.appendChild(card);
        }
    });
}

// Llama a la función para obtener los datos
getBusinessData();


const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

// Alternar menú hamburguesa al hacer clic
mobileMenu.addEventListener("click", () => {
    navList.classList.toggle("active");
});



const apiKey = '9a247fcfd5710ac0dad8e8fb5f70b136';
const city = 'Querétaro,MX';

// Obtener clima actual
async function getCurrentWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        document.getElementById('current-weather').textContent = 
            `Temperature: ${data.main.temp}°C, ${data.weather[0].description}`;
    } catch (error) {
        document.getElementById('current-weather').textContent = 'Error loading current weather.';
        console.error(error);
    }
}

// Obtener pronóstico semanal
async function getCurrentWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
        document.getElementById('current-weather').textContent = 
            `Temperature: ${data.main.temp}°C, ${data.weather[0].description}`;
    } catch (error) {
        document.getElementById('current-weather').textContent = 'Error loading current weather.';
        console.error("Error fetching current weather:", error);
    }
}
