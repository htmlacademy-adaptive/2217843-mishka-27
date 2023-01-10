const modal = document.querySelector(".modal");

const openModal = () => {
  modal.classList.add("modal--is-open");
  document.addEventListener("keydown", onDocumentKeydown);
  modal.addEventListener("click", onModalClick);
};

const closeModal = () => {
  modal.classList.remove("modal--is-open");
  document.removeEventListener("keydown", onDocumentKeydown);
  modal.removeEventListener("click", onModalClick);
};

document.addEventListener("click", (evt) => {
  if (
    evt.target.closest(".product-card__button") ||
    evt.target.closest(".daily-product__button")
  ) {
    openModal();
  }
});

const onDocumentKeydown = (evt) => {
  if (evt.key === "Escape") {
    closeModal();
  }
};

const onModalClick = (evt) => {
  if (!evt.target.closest(".modal__container")) {
    closeModal();
  }
};
