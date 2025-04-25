/* Carousel JavaScript */

document.querySelectorAll(".carousel").forEach(carousel => {
  const items = carousel.querySelectorAll(".carousel-item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel-button"></span>`;
  });

  carousel.insertAdjacentHTML("beforeend", `
    <div class="carousel-nav">
      ${buttonsHtml.join("")}
    </div>
  `);

  const buttons = carousel.querySelectorAll(".carousel-button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      items.forEach(item => item.classList.remove("carousel-item--selected"));
      buttons.forEach(button => button.classList.remove("carousel-button--selected"));

      items[i].classList.add("carousel-item--selected");
      button.classList.add("carousel-button--selected");
    });
  });

  // select the first item and button
  items[0].classList.add("carousel-item--selected");
  buttons[0].classList.add("carousel-button--selected");

  console.log(buttonsHtml);
});

/* Hamburger Menu JavaScript */

const menu = document.querySelector(".menu");
const menuItems = document.querySelector(".menu-item");
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