const modalContainer = document.querySelector(".modal__container");

const openModal = () => {
  modalContainer.classList.add("modal__container--is-open");
  document.addEventListener("keydown", onDocumentKeydown);
  modalContainer.addEventListener("click", onModalClick);
}

const closeModal = () => {
  modalContainer.classList.remove("modal__container--is-open");
  document.removeEventListener("keydown", onDocumentKeydown);
  modalContainer.removeEventListener("click", onModalClick);
}

document.addEventListener('click', (evt) => {
  if (evt.target.closest('.product-card__button') || evt.target.closest('.daily-product__button')) {
    openModal();
  }
});

const onDocumentKeydown = (evt) => {
  if(evt.key === 'Escape') {
    closeModal();
  }
};

const onModalClick = (evt) => {
  if(!evt.target.closest('.modal')) {
    closeModal();
  }
};
