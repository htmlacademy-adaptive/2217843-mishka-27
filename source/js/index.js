let button = document.querySelector('.main-header__button');
let navigation = document.querySelector('.main-header__navigation');
let header =  document.querySelector('.main-header');

header.classList.remove('main-header--no-js');
button.classList.add('main-header__button--closed');

button.addEventListener('click', function () {
  if (navigation.classList.contains('main-header__navigation--closed')) {
    navigation.classList.remove('main-header__navigation--closed');
    navigation.classList.add('main-header__navigation--is-open');
    button.classList.remove('main-header__button--closed');
    button.classList.add('main-header__button--is-open');
  } else {
    navigation.classList.add('main-header__navigation--closed');
    navigation.classList.remove('main-header__navigation--is-open');
    button.classList.remove('main-header__button--is-open');
    button.classList.add('main-header__button--closed');
  }
});
