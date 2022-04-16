const openModalBtn = document.querySelector('.modal-btn');
const modalOpen = document.querySelector('.modal-overlay');
const closeModal = document.querySelector('.modal-close');

openModalBtn.addEventListener('click', function () {
  modalOpen.classList.add('open-modal');
});

closeModal.addEventListener('click', function () {
  modalOpen.classList.remove('open-modal');
});
