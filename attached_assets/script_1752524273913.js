document.addEventListener("DOMContentLoaded", () => {
  
  // Fade-in animado por sección
  const fadeSections = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  fadeSections.forEach(section => observer.observe(section));

  // Botón de modo oscuro/claro
  const toggleBtn = document.getElementById("themeToggle");
  const html = document.documentElement;

  toggleBtn.addEventListener("click", () => {
    const isDark = html.getAttribute("data-theme") === "dark";
    html.setAttribute("data-theme", isDark ? "light" : "dark");
    toggleBtn.innerHTML = isDark
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
  });


  const scrollBtn = document.querySelector(".scroll-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });
});
