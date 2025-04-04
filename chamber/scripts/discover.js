// Selecciona los botones y el contenedor
const gridViewButton = document.querySelector("#grid-view");
const listViewButton = document.querySelector("#list-view");
const cardsContainer = document.querySelector("#cards");
const apiKey = "9a247fcfd5710ac0dad8e8fb5f70b136";
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Querétaro,MX&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Querétaro,MX&units=metric&appid=${apiKey}`;


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
    cardsContainer.innerHTML = ""; // Limpia el contenedor antes de añadir nuevos elementos

    const title = document.createElement("h2");
    title.textContent = "Featured Users";
    cardsContainer.appendChild(title);

    const goldMembers = directory.filter(business => business["membership level"] === "3-gold");

    if (goldMembers.length === 0) {
        cardsContainer.innerHTML += "<p>No featured users available.</p>";
        return;
    }

    // Mezcla aleatoriamente el array
    const shuffledMembers = goldMembers.sort(() => Math.random() - 0.5);

    // Selecciona hasta 3 miembros
    const selectedMembers = shuffledMembers.slice(0, 3);

    selectedMembers.forEach(business => {
        let card = document.createElement("section");
        card.classList.add("card");

        let fullName = document.createElement("h2");
        fullName.textContent = business.name || "Nombre no disponible";

        let image = document.createElement("img");
        image.src = business.image || "images/default-image.jpg"; // Asegúrate que la ruta sea correcta
        image.alt = `${business.name || "Business"} logo`;
        image.style.width = "100px";

        let address = document.createElement("p");
        address.textContent = `Address: ${business.address || "No disponible"}`;

        let phone = document.createElement("p");
        phone.textContent = `Phone: ${business.phone || "No disponible"}`;

        let hours = document.createElement("p");
        hours.textContent = `Hours: ${business.hours || "No disponible"}`;

        let urlLink = document.createElement("a");
        urlLink.href = business.url || "#";
        urlLink.textContent = business.url ? "Visit Website" : "No Website Available";
        urlLink.target = "_blank";

        card.append(fullName, image, address, phone, hours, urlLink);
        cardsContainer.appendChild(card);
    });
}

// Llama a la función para obtener los datos
getBusinessData();

// Manejo del menú móvil
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");
mobileMenu.addEventListener("click", () => navList.classList.toggle("active"));




// Obtiene y muestra el clima actual
async function getCurrentWeather() {
    const weatherElement = document.getElementById("current-weather");
    
    try {
        const response = await fetch(weatherUrl);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        
        const temp = data.main.temp.toFixed(1);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        weatherElement.innerHTML = `
            <p>Temperature: ${temp}°C</p>
            <p>${description}</p>
            <img src="${iconUrl}" alt="${description}" class="weather-icon">
        `;
    } catch (error) {
        console.error("Error fetching current weather:", error);
        weatherElement.textContent = "Failed to load current weather.";
    }
}

// Obtiene y muestra el pronóstico del clima
async function getWeatherForecast() {
    const forecastElement = document.getElementById("weather-forecast");
    
    try {
        const response = await fetch(forecastUrl);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        
        let forecastHtml = "<ul>";
        // Mostrar pronóstico para las próximas 3 horas
        data.list.slice(0, 3).forEach(forecast => {
            const temp = forecast.main.temp.toFixed(1);
            const time = forecast.dt_txt;
            const description = forecast.weather[0].description;
            forecastHtml += `<li>${time}: ${temp}°C, ${description}</li>`;
        });
        forecastHtml += "</ul>";
        
        forecastElement.innerHTML = forecastHtml;
    } catch (error) {
        console.error("Error fetching weather forecast:", error);
        forecastElement.textContent = "Failed to load forecast.";
    }
}

// Llama a las funciones al cargar la página
getCurrentWeather();
getWeatherForecast();
