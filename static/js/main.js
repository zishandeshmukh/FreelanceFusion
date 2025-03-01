// Theme Toggle Function
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    
    // Sync both theme toggles
    document.getElementById('theme-toggle').checked = newTheme === 'light';
    document.getElementById('mobile-theme-toggle').checked = newTheme === 'light';
}

// Mobile Menu Functions
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('overlay');
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Form Validation
function validateForm(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    fetch('/submit_contact', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert(data.message);
            form.reset();
        } else {
            alert('Error sending message. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending message. Please try again.');
    });
}

// Initialize all event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle listeners
    const themeToggles = document.querySelectorAll('#theme-toggle, #mobile-theme-toggle');
    themeToggles.forEach(toggle => {
        toggle.addEventListener('change', toggleTheme);
    });

    // Mobile menu listeners
    document.getElementById('hamburger-btn').addEventListener('click', toggleMobileMenu);
    document.getElementById('menu-close-btn').addEventListener('click', toggleMobileMenu);
    document.getElementById('overlay').addEventListener('click', toggleMobileMenu);
    
    // Mobile nav link listeners
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', toggleMobileMenu);
    });

    // Contact form submission
    document.querySelector('.contact-form').addEventListener('submit', validateForm);

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.team-card, .project-card').forEach((el) => observer.observe(el));
