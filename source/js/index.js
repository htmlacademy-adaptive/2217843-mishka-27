let button = document.querySelector('.main-header__button');
let navigation = document.querySelector('.main-header__navigation');

button.onclick = function() {
  button.classList.toggle('main-header__button--is-open');
  navigation.classList.toggle('main-header__navigation--is-open');
};
