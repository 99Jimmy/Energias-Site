let mobileMenu = document.querySelector(".mobile-menu");
let navList = document.querySelector(".nav-list")
let active = "active"

mobileMenu.addEventListener("click", function() {
    console.log("clickou")
    navList.classList.toggle(active)
    mobileMenu.classList.toggle(active)
})