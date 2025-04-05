// Menú hamburguesa
const nav = document.querySelector("nav");
if (nav) {
    const menuToggle = document.createElement("div");
    menuToggle.className = "menu-toggle";
    menuToggle.innerHTML = "☰ Menu";
    nav.insertBefore(menuToggle, nav.firstChild);
    
    const navList = document.querySelector("nav ul");
    const body = document.body;  // Añadimos una referencia al cuerpo

    if (navList) {
        menuToggle.addEventListener("click", (event) => {
            // Evitar que se propague el evento de clic
            event.stopPropagation();
            navList.classList.toggle("active");
            if (navList.classList.contains("active")) {
                // Cuando el menú se abre, desplazamos el contenido hacia abajo
                body.style.overflow = 'hidden'; // Desactiva el scroll
                document.documentElement.style.scrollBehavior = 'smooth'; // Para una transición suave
            } else {
                // Restauramos el scroll cuando el menú se cierra
                body.style.overflow = ''; // Reactiva el scroll
            }
        });
    }

    // Cerrar el menú si se hace clic fuera del menú
    document.addEventListener("click", (event) => {
        if (!nav.contains(event.target) && navList.classList.contains("active")) {
            navList.classList.remove("active");
            body.style.overflow = '';  // Restauramos el scroll
        }
    });

    // Evitar que el clic en el menú se propague
    navList.addEventListener("click", (event) => {
        event.stopPropagation();
    });
}




// Function to fetch the data and create cards
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const content = document.querySelector('.grid-container');
        
        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <figure>
                    <img src="images/${item.titulo.toLowerCase().replace(/ /g, '-')}.jpg" alt="${item.titulo}">
                </figure>
                <h2>${item.titulo}</h2>
                <address>${item.url}</address>
                <p>${item.descripcion}</p>
                <button onclick="window.location.href='${item.url}'">Aprender más</button>
            `;

            content.appendChild(card);
        });
    });

// Function to handle the welcome message based on the last visit
const welcomeMessage = document.getElementById('welcomeMessage');
const lastVisit = localStorage.getItem('lastVisit');

if (!lastVisit) {
    welcomeMessage.innerHTML = "<p>¡Bienvenido! Si tienes alguna pregunta, háznoslo saber.</p>";
    localStorage.setItem('lastVisit', Date.now());
} else {
    const timeDifference = Math.floor((Date.now() - lastVisit) / (1000 * 3600 * 24)); // in days

    if (timeDifference < 1) {
        welcomeMessage.innerHTML = "<p>¡Vuelvo pronto! ¡Genial!</p>";
    } else {
        const dayText = timeDifference === 1 ? 'día' : 'días';
        welcomeMessage.innerHTML = `<p>Tu última visita fue hace ${timeDifference} ${dayText}.</p>`;
    }

    localStorage.setItem('lastVisit', Date.now());
}



// Actualiza la fecha de última modificación
const lastModifiedElement = document.querySelector("#last-modified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = "Última modificación: " + document.lastModified;
}
