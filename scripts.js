// Scripts futuros para o site STACK DroneTech
document.addEventListener('DOMContentLoaded', () => {
    // Filtros
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Modal
    const portfolioModal = document.getElementById('portfolioModal');
    portfolioModal.addEventListener('show.bs.modal', (event) => {
        const button = event.relatedTarget;
        const type = button.getAttribute('data-type');
        const src = button.getAttribute('data-src');

        const modalImage = document.getElementById('modalImage');
        const modalVideo = document.getElementById('modalVideo');
        const modalVideoSource = document.getElementById('modalVideoSource');

        modalImage.classList.add('d-none');
        modalVideo.classList.add('d-none');

        if (type === 'image') {
            modalImage.classList.remove('d-none');
            modalImage.src = src;
        } else if (type === 'video') {
            modalVideo.classList.remove('d-none');
            modalVideoSource.src = src;
            modalVideo.load();
        }
    });

    portfolioModal.addEventListener('hidden.bs.modal', () => {
        const modalImage = document.getElementById('modalImage');
        const modalVideo = document.getElementById('modalVideo');
        const modalVideoSource = document.getElementById('modalVideoSource');

        modalImage.src = '';
        modalVideoSource.src = '';
        modalVideo.pause();
    });
});
