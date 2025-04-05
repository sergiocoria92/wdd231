// Hamburger menu
const nav = document.querySelector("nav");
if (nav) {
    const menuToggle = document.createElement("div");
    menuToggle.className = "menu-toggle";
    menuToggle.innerHTML = "☰ Menu";
    nav.insertBefore(menuToggle, nav.firstChild);
    
    const navList = document.querySelector("nav ul");
    const body = document.body;

    if (navList) {
        menuToggle.addEventListener("click", (event) => {
            event.stopPropagation();
            navList.classList.toggle("active");
            body.style.overflow = navList.classList.contains("active") ? 'hidden' : '';
        });
    }

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!nav.contains(event.target) && navList.classList.contains("active")) {
            navList.classList.remove("active");
            body.style.overflow = '';
        }
    });

    navList.addEventListener("click", (event) => {
        event.stopPropagation();
    });
}

// Function to fetch the data and create cards
fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
        const content = document.querySelector('.grid-container');
        
        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <figure>
                    <img src="${item.url}" alt="${item.title}" loading="lazy">
                </figure>
                <div class="card-content">
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                    <button onclick="window.location.href='${item.url}'">Learn More</button>
                </div>
            `;
        
            content.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error loading JSON data:', error);
        document.querySelector('.grid-container').innerHTML = 
            '<p>Unable to load attractions. Please try again later.</p>';
    });

// Function to handle the welcome message based on the last visit
const welcomeMessage = document.getElementById('welcomeMessage');
const lastVisit = localStorage.getItem('lastVisit');

if (!lastVisit) {
    welcomeMessage.innerHTML = "<p>Welcome! Feel free to ask if you have any questions.</p>";
    localStorage.setItem('lastVisit', Date.now());
} else {
    const timeDifference = Math.floor((Date.now() - lastVisit) / (1000 * 3600 * 24)); // in days

    if (timeDifference < 1) {
        welcomeMessage.innerHTML = "<p>Back so soon! Awesome!</p>";
    } else {
        const dayText = timeDifference === 1 ? 'day' : 'days';
        welcomeMessage.innerHTML = `<p>Your last visit was ${timeDifference} ${dayText} ago.</p>`;
    }

    localStorage.setItem('lastVisit', Date.now());
}

// Update last modified date
document.addEventListener('DOMContentLoaded', () => {
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Updated: ${new Date(document.lastModified).toLocaleDateString()}`;
    }
});