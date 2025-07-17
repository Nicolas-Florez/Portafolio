// Projects data
// Projects data
const projects = [
    {
      id: 1,
      title: "Luxtime - Relojes de Lujo",
      description: "Landing page para marca ficticia de relojes de lujo. Incluye catálogo interactivo, filtros por material y precio, vista detallada con zoom y carrusel de productos relacionados.",
      technologies: ["HTML", "CSS", "JavaScript"],
      icon: "fas fa-clock",
      github: "https://github.com/Nicolas-Florez/Project_HTML_CSS_FLOREZ_NICOLAS",
      demo: null,
      featured: true
    },
    {
      id: 2,
      title: "MotivaApp - Plataforma Motivacional",
      description: "Página motivacional que muestra frases diarias según el calendario. Incluye juegos didácticos como ruleta de frases y sistema de recompensas con logros y rachas desbloqueables.",
      technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      icon: "fas fa-heart",
      github: "https://github.com/Nicolas-Florez/Oracundario-Nicolas-Florez",
      demo: "https://nicolas-florez.github.io/Oracundario-Nicolas-Florez/",
      featured: true
    },
    {
      id: 3,
      title: "Mentorium - App Académica",
      description: "Aplicación para conectar estudiantes con mentores/profesores. Permite agendar asesorías, gestionar materias y evaluar sesiones. Implementa lógica de base de datos y modelo relacional completo.",
      technologies: ["Java", "React", "MySQL"],
      icon: "fas fa-user-graduate",
      github: "",
      demo: null,
      featured: true
    },
    {
      id: 4,
      title: "Buscador de Películas",
      description: "Aplicación web que permite buscar películas usando la API de TMDB. Muestra pósters, sinopsis, trailers y filtros por género, año y calificación.",
      technologies: ["JavaScript", "HTML", "CSS", "TMDB API"],
      icon: "fas fa-film",
      github: "https://github.com/Nicolas-Florez/searchMovies_Florez_Nicolas",
      demo: null,
      featured: true
    }
  ];
  

// Export projects for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projects;
}
