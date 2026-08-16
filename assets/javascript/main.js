// ============================================
// NAV — cambia de estilo al hacer scroll
// ============================================
const nav = document.querySelector('nav');
const threshold = 60; // px antes de activar el fondo

window.addEventListener('scroll', () => {
  if (window.scrollY > threshold) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });


// ============================================
// NAV — menú hamburguesa (abrir/cerrar)
// ============================================
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Cierra el menú mobile automáticamente al tocar un link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('active');
  });
});


// ============================================
// FADE-IN — aparece suavemente al hacer scroll
// ============================================
const fadeEls = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

fadeEls.forEach(el => fadeObserver.observe(el));