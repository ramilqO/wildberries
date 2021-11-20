const cart = () => {
const cartBtn = document.querySelector(".button-cart");//кнопка открытия модалки
const cartModal = document.getElementById('modal-cart');//модалка
const modalClose = document.querySelector('.modal-close');//закрытие модалки

function openModal() {
    cartModal.style.display = "flex";
}
function closeModal() {
    cartModal.style.display = "none";
}

cartBtn.addEventListener("click", () => { openModal() });
modalClose.addEventListener("click", () => { closeModal()});
}

cart();
