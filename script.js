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

  // Calcular edad dinámicamente
  const edadElement = document.getElementById("edad");
  if (edadElement) {
    const fechaNacimiento = new Date("2006-05-27");
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
    edadElement.textContent = edad;
  }

  // Animar barras de progreso de habilidades
  const animateSkillBars = () => {
    const skillProgresses = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const percent = progressBar.getAttribute('data-percent');
          if (percent) {
            setTimeout(() => {
              progressBar.style.width = percent + '%';
            }, 200);
            observer.unobserve(progressBar);
          }
        }
      });
    }, {
      threshold: 0.3
    });

    skillProgresses.forEach(bar => {
      observer.observe(bar);
    });
  };

  // Ejecutar animación de barras
  animateSkillBars();

  // Manejo del formulario de contacto
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitBtn = this.querySelector('.submit-btn');
      const btnText = submitBtn.querySelector('.btn-text');
      const btnIcon = submitBtn.querySelector('.btn-icon');
      
      // Cambiar estado del botón
      submitBtn.style.pointerEvents = 'none';
      btnText.textContent = 'Enviando...';
      btnIcon.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
      
      // Simular envío (aquí puedes agregar la lógica real de envío)
      setTimeout(() => {
        btnText.textContent = '¡Mensaje Enviado!';
        btnIcon.innerHTML = '<i class="fas fa-check"></i>';
        submitBtn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
        submitBtn.style.borderColor = 'rgba(34, 197, 94, 0.5)';
        
        // Resetear formulario
        contactForm.reset();
        
        // Restaurar botón después de 3 segundos
        setTimeout(() => {
          btnText.textContent = 'Enviar Mensaje';
          btnIcon.innerHTML = '<i class="fas fa-paper-plane"></i>';
          submitBtn.style.background = 'linear-gradient(135deg, #8b0000, #dc143c)';
          submitBtn.style.borderColor = 'rgba(220, 20, 60, 0.3)';
          submitBtn.style.pointerEvents = 'auto';
        }, 3000);
      }, 1500);
    });
  }
});
