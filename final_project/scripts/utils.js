// utils.js


export function updateLastModified() {
    const lastModifiedElement = document.querySelector("#last-modified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = "last-modified: " + document.lastModified;
    }
}



