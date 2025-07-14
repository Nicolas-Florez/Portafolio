# Replit.md - Nicolás Flórez Portfolio

## Overview

This is a personal portfolio website for Nicolás Flórez, a Systems Engineering student specializing in software development. The portfolio is built as a single-page application showcasing his professional profile, skills, projects, and contact information. The site features a modern, responsive design with dark/light theme switching capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The portfolio follows a traditional client-side architecture pattern:

- **Frontend**: Pure HTML, CSS, and JavaScript (no frameworks)
- **Styling**: Custom CSS with CSS variables for theming
- **Interactivity**: Vanilla JavaScript with modular organization
- **Assets**: External CDN resources (Font Awesome, Google Fonts)
- **Deployment**: Static hosting compatible (can be deployed to any static hosting service)

## Key Components

### 1. HTML Structure (index.html)
- **Hero Section**: Profile introduction with photo, name, title, and location
- **Navigation**: Smooth scrolling navigation to different sections
- **Content Sections**: About, Skills, Education, Experience, Portfolio, Contact
- **Theme Toggle**: Dark/light mode switcher
- **Loading Screen**: Initial page load animation

### 2. JavaScript Modules (script.js)
- **App Initialization**: Loading screen management
- **Theme Management**: Dark/light mode toggle with localStorage persistence
- **Navigation**: Smooth scrolling and active section highlighting
- **Animations**: Intersection Observer for fade-in effects
- **Skills Display**: Interactive skill visualization
- **Projects**: Dynamic project rendering from data
- **Contact Form**: Form validation and submission handling
- **Scroll Effects**: Various scroll-triggered animations

### 3. Projects Data (projects.js)
- **Project Structure**: Centralized project information including:
  - Title, description, technologies used
  - GitHub links and demo URLs
  - Featured project flags
  - Technology icons and categories

### 4. Styling System (style.css)
- **CSS Variables**: Comprehensive theming system for colors, spacing, typography
- **Responsive Design**: Mobile-first approach with breakpoints
- **Animation System**: Smooth transitions and hover effects
- **Component Styling**: Modular CSS for different UI components

## Data Flow

1. **Page Load**: Loading screen displays while assets load
2. **Initialization**: All JavaScript modules initialize on DOMContentLoaded
3. **Theme System**: Checks localStorage for saved theme preference
4. **Content Rendering**: Projects and skills are dynamically rendered from data
5. **User Interactions**: Theme toggle, navigation, and form submissions are handled
6. **Animations**: Scroll-triggered animations activate as user navigates

## External Dependencies

### CDN Resources
- **Font Awesome 6.5.0**: Icons throughout the interface
- **Google Fonts**: Inter and JetBrains Mono font families
- **Placeholder Images**: Via placeholder service for profile image

### Browser APIs
- **localStorage**: Theme preference persistence
- **Intersection Observer**: Scroll-triggered animations
- **CSS Custom Properties**: Dynamic theming system

## Deployment Strategy

The portfolio is designed for static hosting deployment:

### Hosting Options
- **Netlify/Vercel**: Automatic deployment from Git repository
- **GitHub Pages**: Direct hosting from repository
- **Traditional Web Hosting**: Simple file upload to web server

### Build Process
- No build process required (pure HTML/CSS/JavaScript)
- All assets are either inline or loaded from CDN
- Ready for immediate deployment after file upload

### Performance Considerations
- Minimal external dependencies
- Optimized loading with async/defer attributes
- Efficient CSS with custom properties
- Smooth animations using CSS transforms

### Browser Compatibility
- Modern browsers (ES6+ JavaScript features)
- CSS Grid and Flexbox support required
- Intersection Observer API support needed for animations

The architecture prioritizes simplicity, performance, and maintainability while providing a professional presentation of the developer's skills and projects.