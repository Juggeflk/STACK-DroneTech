 /* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg: #f9f9f9;
  --text: #333;
  --primary: #0077cc;
  --card: white;
  --overlay: rgba(0, 0, 0, 0.7);
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #121212;
    --text: #e0e0e0;
    --primary: #1e90ff;
    --card: #1e1e1e;
    --overlay: rgba(0, 0, 0, 0.9);
  }
}

body {
  font-family: 'Segoe UI', sans-serif;
  background-color: var(--bg);
  color: var(--text);
  padding: 20px;
  line-height: 1.6;
}

header {
  text-align: center;
  background: linear-gradient(90deg, var(--primary), #1e90ff);
  color: white;
  padding: 30px 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  position: relative;
}

nav {
  margin-bottom: 20px;
}

nav ul {
  list-style: none;
  d…
[04:17, 30/08/2025] Ssitoe: document.addEventListener('DOMContentLoaded', () => {
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
