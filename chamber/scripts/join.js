// Actualiza la fecha de última modificación
document.addEventListener("DOMContentLoaded", function() {
    const lastModifiedElement = document.querySelector("#last-modified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = "Last modified: " + document.lastModified;
    }

    // Timestamp
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    // Menú hamburguesa
    const nav = document.querySelector("nav");
    if (nav) {
        const menuToggle = document.createElement("div");
        menuToggle.className = "menu-toggle";
        menuToggle.innerHTML = "☰ Menu";
        nav.insertBefore(menuToggle, nav.firstChild);
        
        const navList = document.querySelector("nav ul");
        if (navList) {
            menuToggle.addEventListener("click", () => {
                navList.classList.toggle("active");
            });
        }
    }

    // Modal functionality
    const modal = document.getElementById('membershipModal');
    if (modal) {
        const modalContent = document.getElementById('modalContent');
        const closeBtn = document.querySelector('.close-modal');
        
        // Get all radio buttons
        const membershipRadios = document.querySelectorAll('input[name="membership-level"]');
        
        // Add click event to each radio button
        membershipRadios.forEach(radio => {
            radio.addEventListener('click', function() {
                const info = this.getAttribute('data-info');
                modalContent.innerHTML = `<h3>${this.value.toUpperCase()} Membership</h3><p>${info}</p>`;
                modal.style.display = 'block';
            });
        });
        
        // Close modal when clicking X
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                modal.style.display = 'none';
            });
        }
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    }
});