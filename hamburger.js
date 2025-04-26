/* Hamburger Menu JavaScript */

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("show-menu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

menuIcon.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);

menuItems.forEach(item => {
  item.addEventListener("click", toggleMenu);
});