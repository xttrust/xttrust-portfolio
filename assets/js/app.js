// ===== MODERN PORTFOLIO INTERACTIONS =====

// Custom cursor functionality removed

// Enhanced scroll animations with intersection observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            
            // Animate progress bars when skills section comes into view
            if (entry.target.id === 'skills') {
                animateProgressBars();
            }
        }
    });
}, observerOptions);

// Observe all hidden elements
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Progress bar animation
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }, index * 200);
    });
}

// Enhanced back to top button
const backToTopButton = document.getElementById("backToTop");

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
    
    // Parallax effect removed to prevent Chrome flickering
    
    // Update navbar on scroll
    const navbar = document.querySelector('.glass-nav');
    if (window.pageYOffset > 100) {
        navbar.style.background = 'rgba(34, 40, 49, 0.95)';
        navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(34, 40, 49, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scroll to top
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Typing animation for hero text
function typeWriter(element, text, speed = 100) {
    element.innerHTML = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    setTimeout(type, 1000); // Start after 1 second
}

// Initialize typing animation
window.addEventListener('load', () => {
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        typeWriter(typingElement, "Hi, I'm ", 150);
    }
});

// Floating animation delays removed to prevent flickering

// Card hover effects removed to prevent Chrome flickering

// Preloader functionality
window.addEventListener('load', () => {
    // Add loaded class to body for any load-dependent animations
    document.body.classList.add('loaded');
    
    // Initialize any load-dependent features
    initializeAnimations();
});

function initializeAnimations() {
    // Animation delays removed to prevent Chrome flickering
}

// Add smooth transitions for theme switching (if implemented later)
function applyTheme(theme) {
    document.documentElement.style.setProperty('--transition-theme', '0.3s ease');
    document.body.setAttribute('data-theme', theme);
}

// Navbar collapse on mobile when clicking links
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar-collapse');
        if (navbar.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbar);
            bsCollapse.hide();
        }
    });
});

// Add performance optimization for animations
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.body.classList.add('reduce-motion');
}

// Console welcome message
console.log(`
🚀 Welcome to Florin Pinta's Portfolio
✨ Built with modern web technologies
🎨 Featuring glassmorphism and smooth animations
📱 Fully responsive design
🌟 Optimized for performance and accessibility

Get in touch: xttrust@creativeigniter.com
`);

// Easter egg - Konami code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Easter egg activated!
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
            alert('🎉 Easter egg found! You discovered the secret code!');
        }, 2000);
    }
});

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// ===== MAGNETIC INTERACTION EFFECTS REMOVED =====
// Magnetic effects removed to prevent Chrome flickering
// Mouse particle trail removed to prevent Chrome flickering and memory leaks
