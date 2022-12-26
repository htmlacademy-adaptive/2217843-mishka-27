let modalContainer = document.querySelector('.modal__container');
let buttonDailyProduct = document.querySelector('.daily-product__button');
let buttonProductCardList = document.querySelectorAll('.product-card__button');

if (modalContainer && buttonDailyProduct) {
    buttonDailyProduct.addEventListener('click', function () {
        modalContainer.classList.add('modal__container--is-open');
    });
}

if (modalContainer && buttonProductCardList) {
    buttonProductCardList.forEach((button) =>
        button.addEventListener('click', function () {
            modalContainer.classList.add('modal__container--is-open');
        }
    ));
}

if (modalContainer) {
    modalContainer.addEventListener('click', function (event) {
        if (event.target.closest('.modal'))
            return;
        modalContainer.classList.remove('modal__container--is-open');
    });
}
