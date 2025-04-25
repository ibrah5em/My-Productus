// Theme Toggle with Icons
function toggleTheme() {
    const body = document.body;
    const isDark = body.dataset.theme === 'dark';
    body.dataset.theme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', body.dataset.theme);
}

// Initialize Theme
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.dataset.theme = savedTheme;
}

// Smooth Scroll Implementation
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Dynamic Navbar Shadow
function setupNavbarShadow() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        navbar.style.boxShadow = window.scrollY > 0 ? 
            '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none';
    });
}

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    setupSmoothScroll();
    setupNavbarShadow();
});