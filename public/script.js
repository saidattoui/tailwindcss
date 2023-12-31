const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const mobileMenu = document.querySelector("#mobile-menu");

burger.addEventListener("click", (e) => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    mobileMenu.classList.add("hidden");
  } else {
    menu.classList.add("hidden");
    mobileMenu.classList.remove("hidden");
  }
});


