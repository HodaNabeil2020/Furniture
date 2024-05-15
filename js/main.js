let menu = document.querySelector(".menu-icon");
let navber = document.querySelector(".nvabar");
let cart = document.querySelector(".cart_items");
let containerCart = document.querySelector(".main-cart");
let user = document.querySelector(".user_items");
let login = document.querySelector(".login-form");
// toggle Menu
menu.onclick = () => {
    navber.classList.toggle("active");
    menu.classList.toggle("move");
    containerCart.classList.remove("active");
    login.classList.remove("active");
};
//toggle Cart
cart.onclick = () => {
    containerCart.classList.toggle("active");
    navber.classList.remove("active");
    menu.classList.remove("move");
    login.classList.remove("active");
};
//toggle  Login In
user.onclick = () => {
    containerCart.classList.remove("active");
    navber.classList.remove("active");
    menu.classList.remove("move");
    login.classList.toggle("active");
};

//toggle  Login
window.onscroll = () => {
    navber.classList.remove("active");
    menu.classList.remove("move");
};

// Header Background
let header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

// Scroll Up
let scrollUp = document.querySelector(".scroll-up");
window.addEventListener("scroll", () => {
    scrollUp.classList.toggle("active", window.scrollY > 0);
});
