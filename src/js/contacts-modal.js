(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-map-first-open]'),
    closeModalBtn: document.querySelector('[data-modal-map-first-close]'),
    modal: document.querySelector('[data-modal-map-first]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-map-second-open]'),
    closeModalBtn: document.querySelector('[data-modal-map-second-close]'),
    modal: document.querySelector('[data-modal-map-second]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
