

//menu interactivo:
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todos los enlaces del menú
    const menuLinks = document.querySelectorAll('.nav-list a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar la redirección inmediata

            // Agregar la clase de parpadeo al elemento li (en lugar de al enlace)
            this.parentElement.classList.add('blink');

            // Después de un breve delay, redirigir
            setTimeout(() => {
                window.location.href = this.href; // Redirige a la URL del enlace
            }, 500); // El delay debe coincidir con el tiempo de la animación
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.getElementById("home-link");
    const joinusLink = document.getElementById("joinus-link");
    const vipLink = document.getElementById("vip-link");

    const indicator = document.getElementById("indicator");
    const indicatorImg = document.getElementById("indicator-img");

    // Función para mover el indicador debajo del enlace activo
    function moveIndicator(link) {
        const linkRect = link.getBoundingClientRect(); // Obtener las coordenadas del enlace
        const linkLeft = linkRect.left; // Posición horizontal
        const linkWidth = linkRect.width; // Ancho del enlace
        
        // Mover el indicador al centro del enlace
        indicator.style.transform = `translateX(${linkLeft + (linkWidth / 2) - (indicatorImg.width / 2)}px)`;
    }

    // Verifica qué página está activa y coloca el indicador debajo del enlace correspondiente
    const currentPage = window.location.pathname;

    // Función para agregar la clase "active" y mover el indicador
    function activateLink(link) {
        homeLink.classList.remove("active");
        joinusLink.classList.remove("active");
        vipLink.classList.remove("active");

        link.classList.add("active");
        moveIndicator(link); // Mueve el indicador
    }

    if (currentPage.includes("index.html")) {
        activateLink(homeLink);
    } else if (currentPage.includes("join_us.html")) {
        activateLink(joinusLink);
    } else if (currentPage.includes("vip_material.html")) {
        activateLink(vipLink);
    }

    // Añadir eventos de clic para cambiar el enlace activo y mover el indicador
    homeLink.addEventListener('click', function() {
        activateLink(homeLink);
    });

    joinusLink.addEventListener('click', function() {
        activateLink(joinusLink);
    });

    vipLink.addEventListener('click', function() {
        activateLink(vipLink);
    });
});





// Actualiza la fecha de última modificación
const lastModifiedElement = document.querySelector("#last-modified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = "Última modificación: " + document.lastModified;
}


const url = "https://sergiocoria92.github.io/wdd231/chamber/data/members.json";




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
