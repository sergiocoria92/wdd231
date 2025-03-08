document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("last-modified").textContent = "Last Modified: " + document.lastModified;
});

function filterSelection(category) {
    let buttons = document.querySelectorAll(".course-buttons button");
    
    if (category === "all") {
        buttons.forEach(button => button.style.display = "inline-block");
    } else {
        buttons.forEach(button => {
            if (button.classList.contains(category)) {
                button.style.display = "inline-block";
            } else {
                button.style.display = "none";
            }
        });
    }
}
