/* ============================================================
   YouTube Premium Logo Changer – Website Script
   ============================================================ */

// ---------- Mobile Nav Toggle ----------
const toggleBtn = document.getElementById('nav-mobile-toggle');
const mobileMenu = document.getElementById('nav-mobile-menu');

if (toggleBtn && mobileMenu) {
  toggleBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    toggleBtn.classList.toggle('open', isOpen);
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
  });

  // Close on mobile link click
  mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      toggleBtn.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    });
  });
}

// ---------- Navbar scroll style ----------
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 12) {
    navbar.style.background = 'rgba(19,19,26,0.97)';
    navbar.style.boxShadow = '0 1px 32px rgba(0,0,0,0.5)';
  } else {
    navbar.style.background = 'rgba(19,19,26,0.85)';
    navbar.style.boxShadow = 'none';
  }
}, { passive: true });

// ---------- Preset pills interaction ----------
const presets = {
  'preset-premium':    'Premium',
  'preset-yt-premium': 'YT Premium',
  'preset-pro':        'PRO',
  'preset-plus':       'PLUS',
  'preset-studio':     'STUDIO',
};

const previewText = document.getElementById('preview-text');

Object.entries(presets).forEach(([id, text]) => {
  const btn = document.getElementById(id);
  if (!btn) return;
  btn.addEventListener('click', () => {
    // Update active state
    document.querySelectorAll('.preset-pill').forEach(p => {
      p.classList.remove('preset-active');
      p.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('preset-active');
    btn.setAttribute('aria-pressed', 'true');

    // Update preview with animation
    if (previewText) {
      previewText.style.opacity = '0';
      previewText.style.transform = 'scale(0.85)';
      setTimeout(() => {
        previewText.textContent = text;
        previewText.style.opacity = '1';
        previewText.style.transform = 'scale(1)';
      }, 180);
    }
  });
});

// ---------- Scroll reveal animation ----------
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

// Attach to elements
const revealTargets = [
  '.section-header',
  '.feature-card',
  '.step-card',
  '.customize-preview',
  '.privacy-card',
  '.cta-title',
  '.cta-subtitle',
  '.cta-buttons',
  '.presets-showcase',
];

revealTargets.forEach(selector => {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
});

// ---------- Smooth scroll for nav links ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 72; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
