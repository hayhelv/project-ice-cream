(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modalReadMore-open]'),
      closeModalBtn: document.querySelector('[data-modalReadMore-close]'),
      modal: document.querySelector('[data-modalReadMore]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();