// Hamburger menu implementation
const nav = document.querySelector("nav");
if (nav) {
    const menuToggle = document.createElement("div");
    menuToggle.className = "menu-toggle";
    menuToggle.innerHTML = "☰ Menu";
    menuToggle.setAttribute('aria-label', 'Toggle navigation menu'); // Mejora accesibilidad
    nav.insertBefore(menuToggle, nav.firstChild);
    
    const navList = document.querySelector("nav ul");
    const body = document.body;

    if (navList) {
        menuToggle.addEventListener("click", (event) => {
            event.stopPropagation();
            navList.classList.toggle("active");
            menuToggle.setAttribute('aria-expanded', navList.classList.contains("active")); // Accesibilidad
            body.style.overflow = navList.classList.contains("active") ? 'hidden' : '';
        });
    }

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!nav.contains(event.target) && navList && navList.classList.contains("active")) {
            navList.classList.remove("active");
            menuToggle.setAttribute('aria-expanded', 'false');
            body.style.overflow = '';
        }
    });

    navList?.addEventListener("click", (event) => {
        event.stopPropagation();
    });
}

// Function to fetch the data and create cards with lazy loading
fetch('data/data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const content = document.querySelector('.grid-container');
        
        // Create intersection observer for lazy loading
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '200px' // Carga antes de que llegue al viewport
        });
        
        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.setAttribute('role', 'article'); // Mejora semántica

            card.innerHTML = `
                <figure>
                    <img data-src="${item.url}" alt="${item.title}" 
                         loading="lazy" width="400" height="300"
                         class="lazy-load">
                </figure>
                <div class="card-content">
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                    <button onclick="window.location.href='${item.url}'" 
                            aria-label="Learn more about ${item.title}">
                        Learn More
                    </button>
                </div>
            `;
            
            content.appendChild(card);
            
            // Observar la imagen para lazy loading avanzado
            const img = card.querySelector('img');
            observer.observe(img);
        });
    })
    .catch(error => {
        console.error('Error loading JSON data:', error);
        document.querySelector('.grid-container').innerHTML = 
            '<p class="error-message">Unable to load attractions. Please try again later.</p>';
    });

// Function to handle the welcome message based on the last visit
const welcomeMessage = document.getElementById('welcomeMessage');
if (welcomeMessage) {
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
}

// Update last modified date
document.addEventListener('DOMContentLoaded', () => {
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Updated: ${new Date(document.lastModified).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })}`;
    }
});

// Optional: Add a small delay for loading animation
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.createElement('div');
    loader.className = 'content-loader';
    document.querySelector('.grid-container').appendChild(loader);
    
    setTimeout(() => {
        loader.remove();
    }, 1000);
});