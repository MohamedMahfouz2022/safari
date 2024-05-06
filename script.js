var navbar = document.getElementById("navbar");
var menu = document.getElementsByClassName("menu-toggle")[0];
menu.addEventListener("click", function () {
    menu.classList.toggle("active-menu")
    // menu.classList.toggle("active-menu")
    if (navbar.style.display === "flex") {
        menu.classList.remove("active-menu")
        navbar.style.display = "none";

    } else {
        menu.classList.add("active-menu")
        navbar.style.display = "flex";
    }
})