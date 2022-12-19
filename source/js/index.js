let button = document.querySelector('.main-header__button');
let navigation = document.querySelector('.main-header__nav');
let navWrapper =  document.querySelector('.main-header__nav-wrapper');

navigation.classList.remove('main-header__nav--no-js');
button.classList.add('main-header__button--closed');

button.addEventListener('click', function () {
  if (navWrapper.classList.contains('main-header__nav-wrapper--nav-closed')) {
    navWrapper.classList.remove('main-header__nav-wrapper--nav-closed');
    navWrapper.classList.add('main-header__nav-wrapper--nav-is-open');
    button.classList.remove('main-header__button--closed');
    button.classList.add('main-header__button--is-open');
  } else {
    navWrapper.classList.add('main-header__nav-wrapper--nav-closed');
    navWrapper.classList.remove('main-header__nav-wrapper--nav-is-open');
    button.classList.remove('main-header__button--is-open');
    button.classList.add('main-header__button--closed');
  }
});
