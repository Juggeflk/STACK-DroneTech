// Scripts futuros para o site STACK DroneTech
// Filtros
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    portfolioItems.forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Lightbox
const portfolioModal = document.getElementById('portfolioModal');
const modalImage = document.getElementById('modalImage');
const modalVideo = document.getElementById('modalVideo');

portfolioItems.forEach(item => {
  item.addEventListener('click', () => {
    const type = item.getAttribute('data-type');
    const src = item.getAttribute('data-src');
    if (type === 'image') {
      modalImage.src = src;
      modalImage.classList.remove('d-none');
      modalVideo.classList.add('d-none');
    } else if (type === 'video') {
      modalVideo.src = src;
      modalVideo.classList.remove('d-none');
      modalImage.classList.add('d-none');
    }
  });
});

// Reset modal ao fechar
portfolioModal.addEventListener('hidden.bs.modal', () => {
  modalImage.src = '';
  modalVideo.src = '';
});
