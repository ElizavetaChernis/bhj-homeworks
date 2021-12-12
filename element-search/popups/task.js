const modalMain = document.getElementById('modal_main');
modalMain.className = 'modal modal_active';
const modalSuccess = document.getElementById('modal_success');
const showSuccess = modalMain.querySelector('.show-success');
const modalClose = modalMain.querySelector(".modal__close");

modalClose.onclick = function() {
    modalClose.className = 'modal';
    modalMain.className = 'modal';
}

showSuccess.onclick = function () {
    modalMain.className = 'modal';
    modalSuccess.className = 'modal modal_active';
}

const successClose = modalSuccess.querySelector('.modal__close');
successClose.onclick = function () {
    modalSuccess.className = 'modal';
}

const btnSuccess = modalSuccess.querySelector('.btn_success');
btnSuccess.onclick = function () {
    modalSuccess.className = 'modal';
}