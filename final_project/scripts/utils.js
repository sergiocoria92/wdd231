export function updateLastModified() {
    const lastModifiedElement = document.querySelector("#last-modified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = "Last modified: " + document.lastModified;
    } else {
        console.warn("El elemento '#last-modified' no se encuentra en el DOM.");
    }
}





