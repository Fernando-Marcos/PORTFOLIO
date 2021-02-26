let menu = document.querySelector("#menu");
let toggleIcon = document.querySelector("#toggle-icon");


// Creamos función para crear una clase y se la quite cuando hagamos el click 

toggleIcon.addEventListener("click", function() {
    menu.classList.toggle("menu-on"); // Salta de una clase a la otra
});
