// Projects data
const projects = [
    {
        id: 1,
        title: "Sistema de Gestión Universitaria",
        description: "Aplicación web completa para la gestión de estudiantes, profesores y cursos universitarios. Incluye autenticación, dashboard administrativo y reportes.",
        technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "Bootstrap"],
        icon: "fas fa-graduation-cap",
        github: "https://github.com/Nicolas-Florez/sistema-universitario",
        demo: null,
        featured: true
    },
    {
        id: 2,
        title: "E-commerce Responsive",
        description: "Tienda online moderna con carrito de compras, pasarela de pagos y panel de administración. Optimizada para dispositivos móviles.",
        technologies: ["React", "JavaScript", "CSS3", "PayPal API"],
        icon: "fas fa-shopping-cart",
        github: "https://github.com/Nicolas-Florez/ecommerce-react",
        demo: "https://ecommerce-demo.netlify.app",
        featured: true
    },
    {
        id: 3,
        title: "API REST con Java",
        description: "API robusta para gestión de inventarios con Spring Boot, documentación con Swagger y testing automatizado.",
        technologies: ["Java", "Spring Boot", "MySQL", "Swagger", "JUnit"],
        icon: "fas fa-server",
        github: "https://github.com/Nicolas-Florez/inventory-api",
        demo: null,
        featured: false
    },
    {
        id: 4,
        title: "Dashboard Analítico",
        description: "Panel de control interactivo con gráficos en tiempo real, métricas de performance y reportes exportables.",
        technologies: ["Python", "Django", "Chart.js", "PostgreSQL"],
        icon: "fas fa-chart-line",
        github: "https://github.com/Nicolas-Florez/analytics-dashboard",
        demo: "https://analytics-demo.herokuapp.com",
        featured: true
    },
    {
        id: 5,
        title: "App de Tareas Colaborativas",
        description: "Aplicación para gestión de proyectos en equipo con asignación de tareas, notificaciones y seguimiento de progreso.",
        technologies: ["JavaScript", "Vue.js", "Firebase", "Vuetify"],
        icon: "fas fa-tasks",
        github: "https://github.com/Nicolas-Florez/task-manager",
        demo: "https://task-manager-demo.firebase.app",
        featured: false
    },
    {
        id: 6,
        title: "Sistema de Reservas",
        description: "Plataforma web para reservas de servicios con calendario interactivo, notificaciones por email y gestión de disponibilidad.",
        technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "FullCalendar"],
        icon: "fas fa-calendar-alt",
        github: "https://github.com/Nicolas-Florez/booking-system",
        demo: null,
        featured: false
    }
];

// Export projects for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projects;
}
