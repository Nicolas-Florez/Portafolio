// Archivo base para scripts del portafolio de Nicolás Florez Duarte

window.addEventListener('scroll', function() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;
  if (window.scrollY > 200) {
    btn.style.opacity = '0.92';
    btn.style.pointerEvents = 'auto';
    btn.style.transform = 'scale(1)';
  } else {
    btn.style.opacity = '0';
    btn.style.pointerEvents = 'none';
    btn.style.transform = 'scale(0.7)';
  }
});

// Inicializar estado oculto al cargar
window.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.back-to-top');
  if (btn) {
    btn.style.opacity = '0';
    btn.style.pointerEvents = 'none';
    btn.style.transform = 'scale(0.7)';
  }
});

// Menú hamburguesa toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    toggle.classList.toggle("active");
  });
});
