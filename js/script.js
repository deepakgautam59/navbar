const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
[openMenuBtn, closeMenuBtn].forEach((btn) => {
    // console.log(openMenuBtn);
btn.addEventListener("click", () => {
menu.classList.toggle("open");
menu.style.display = "visible";
menu.style.transition = "transform 0.5s ease";

});
});
menu.addEventListener("transitionend", function(){ 
    this.removeAttribute("style");
});
