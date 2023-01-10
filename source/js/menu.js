const header = document.querySelector(".main-header");
const button = document.querySelector(".main-header__button");
const navWrapper = document.querySelector(".main-header__nav-wrapper");

header.classList.remove("no-js");

button.addEventListener("click", () => {
  navWrapper.classList.toggle("main-header__nav-wrapper--open");
  button.classList.toggle("main-header__button--open");
});
