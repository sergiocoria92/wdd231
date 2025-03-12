// Actualiza la fecha de última modificación
const lastModifiedElement = document.querySelector("#last-modified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = "Última modificación: " + document.lastModified;
}



// 
const cards = document.querySelector('#cards');

const url = "https://sergiocoria92.github.io/wdd231/chamber/json/directory.json";



async function getProphetData() {
    // Obtener los datos de la URL
    const response = await fetch(url);

    // Convertir la respuesta a JSON
    const data = await response.json();

    // Mostrar los datos en una tabla en la consola
    console.table(data.prophets); // Prueba temporal de la respuesta de datos

    // Llamar a la función para mostrar los profetas
    displayProphets(data.prophets);
}

// Llamar a la función para probar la búsqueda y la respuesta
getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Crear elementos para agregar a la sección .cards
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); // Aquí se crea el elemento h2 para el nombre
        let portrait = document.createElement('img');
        let birthdate = document.createElement('p'); // Para mostrar la fecha de nacimiento
        let birthplace = document.createElement('p'); // Para mostrar el lugar de nacimiento

        // Construir el contenido h2 para mostrar el nombre completo del profeta
        fullName.textContent = `${prophet.firstname} ${prophet.lastname}`; // Mostrar nombre y apellido

        // Construir la imagen del retrato estableciendo los atributos relevantes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.firstname} ${prophet.lastname}`); // Descripción de la imagen
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Establecer el contenido para la fecha de nacimiento y el lugar de nacimiento
        birthdate.textContent = `Born: ${prophet.birthdate}`; // Asume que birthdate está en el formato adecuado
        birthplace.textContent = `Place of birth: ${prophet.birthplace}`; // Muestra el lugar de nacimiento

        // Añadir los elementos creados al card (sección)
        card.appendChild(fullName); // Aquí se añade el nombre completo
        card.appendChild(portrait);
        card.appendChild(birthdate); // Añadir la fecha de nacimiento
        card.appendChild(birthplace); // Añadir el lugar de nacimiento

        // Añadir la tarjeta a la sección .cards
        cards.appendChild(card);
    }); // fin de la función flecha y el ciclo forEach
};
