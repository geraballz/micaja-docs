// ── Gallery lightbox ──
let currentIndex = 0;

const galleryObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.gallery-item').forEach((item, i) => {
        setTimeout(() => item.classList.add('visible'), i * 90);
      });
      galleryObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

const galleryGrid = document.getElementById('gallery-grid');
if (galleryGrid) galleryObserver.observe(galleryGrid);

function buildLightboxContent(index) {
  const items = document.querySelectorAll('.gallery-item');
  const item = items[index];
  const caption = item.getAttribute('data-caption');
  const img = item.querySelector('img');
  const content = document.getElementById('lightbox-content');
  document.getElementById('lightbox-caption').textContent = caption;

  if (img && img.style.display !== 'none' && img.complete && img.naturalWidth > 0) {
    content.innerHTML = '<img src="' + img.src + '" alt="' + caption + '" />';
  } else {
    const ph = item.querySelector('.gallery-placeholder');
    const phLabel = ph ? ph.querySelector('.gallery-ph-label').textContent : caption;
    const phSvg  = ph ? ph.querySelector('.gallery-ph-icon').innerHTML : '';
    content.innerHTML =
      '<div class="lightbox-ph">' +
        '<div style="color:var(--accent);opacity:0.4;width:48px;height:48px;">' + phSvg + '</div>' +
        '<div class="lightbox-ph-label">' + phLabel + '</div>' +
      '</div>';
  }
}

function openLightbox(index) {
  currentIndex = index;
  buildLightboxContent(index);
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function closeLightboxOnBg(e) {
  if (e.target === document.getElementById('lightbox')) closeLightbox();
}

function navigateLightbox(dir) {
  const total = document.querySelectorAll('.gallery-item').length;
  currentIndex = (currentIndex + dir + total) % total;
  buildLightboxContent(currentIndex);
}

document.addEventListener('keydown', (e) => {
  const lb = document.getElementById('lightbox');
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')   navigateLightbox(-1);
  if (e.key === 'ArrowRight')  navigateLightbox(1);
});

// ── Scroll-triggered fade-in ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


