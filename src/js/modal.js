(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open0]'),
    closeModalBtn: document.querySelector('[data-modal-close0]'),
    modal: document.querySelector('[data-modal0]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('sidescene--hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open1]'),
    closeModalBtn: document.querySelector('.sidescene__button')[0],
    modal: document.querySelector('.sidescene'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('sidescene--hidden');
  }
})();
