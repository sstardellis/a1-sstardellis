const navbar = document.querySelectorAll("nav a");


// scaling navbar section up to 1.3x when hovering over
navbar.forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.transform = "scale(1.3)";
        link.style.transition = "transform 0.5s";
    });

// set back to one when mouse is not on navbar section
    link.addEventListener("mouseout", () => {
        link.style.transform = "scale(1)";
    });
});
