const burger = document.querySelector(".header__burger");
const body = document.body;

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  body.classList.toggle("menu-open");
});
