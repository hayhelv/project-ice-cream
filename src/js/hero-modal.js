(() => {
  const refs = {
    openModalBtn: document.querySelector('[hero-milk-modal-open]'),
    closeModalBtn: document.querySelector('[hero-milk-modal-close]'),
    modal: document.querySelector('[hero-milk-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();