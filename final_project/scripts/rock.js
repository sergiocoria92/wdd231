// blink icons
function blinkIcons() {
    const iconFrames = document.querySelectorAll('.icon-frame');
    
    setInterval(() => {
        iconFrames.forEach(frame => { //aray of elements to chance the frame color
            frame.style.borderColor = frame.style.borderColor === 'rgba(0, 255, 0, 0.8)' ? 'rgba(0, 255, 0, 0.2)' : 'rgba(0, 255, 0, 0.8)';
        });
    }, 500); 
}
window.onload = blinkIcons;

/*hamburger*/

document.addEventListener('DOMContentLoaded', function() {
    if (!document.querySelector('.menu-toggle')) {
        const menuToggle = document.createElement('button'); // create DOM element
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '☰';
        document.querySelector('header').prepend(menuToggle);
    }
    
    // overlay 
    if (!document.querySelector('.nav-overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);
    }
    
    // Elements
    const menuToggle = document.querySelector('.menu-toggle'); //DOM elements
    const navMenu = document.querySelector('.nav'); //DOM elements
    const overlay = document.querySelector('.nav-overlay'); //DOM elements
    
    //click
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('active'); //DOM to manipulate classes 
        overlay.classList.toggle('active');
    });
    
    // Overlay click 
    overlay.addEventListener('click', function() {
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
    });
    
    // close menu
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
/*end hamburger */
    

    blinkIcons();
    updateLastModified();
});

function blinkIcons() {
    const iconFrames = document.querySelectorAll('.icon-frame'); //DOM elements
    setInterval(() => {
        iconFrames.forEach(frame => {
            frame.style.borderColor = frame.style.borderColor === 'rgba(0, 255, 0, 0.8)' 
                ? 'rgba(0, 255, 0, 0.2)' 
                : 'rgba(0, 255, 0, 0.8)';
        });
    }, 500);
}

import { updateLastModified } from './utils.js';

document.addEventListener("DOMContentLoaded", () => {
    updateLastModified();
});
    