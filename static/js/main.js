// Theme Toggle Function
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);

    // Sync both theme toggles
    const desktopToggle = document.getElementById('theme-toggle');
    const mobileToggle = document.getElementById('mobile-theme-toggle');

    if (desktopToggle) desktopToggle.checked = newTheme === 'light';
    if (mobileToggle) mobileToggle.checked = newTheme === 'light';
}

// Mobile Menu Functions
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('overlay');
    if (mobileMenu && overlay) {
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

// Smooth Scroll Function
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Form Validation and Submission
function validateForm(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // Show loading state
    const submitBtn = form.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
    }

    fetch('/submit_contact', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            showNotification('Message sent successfully!', 'success');
            form.reset();
        } else {
            showNotification('Error sending message. Please try again.', 'error');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showNotification('Error sending message. Please try again.', 'error');
    })
    .finally(() => {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }
    });
}

// Notification Function
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }, 100);
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Initialize all event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle listeners
    const themeToggles = document.querySelectorAll('#theme-toggle, #mobile-theme-toggle');
    themeToggles.forEach(toggle => {
        if (toggle) toggle.addEventListener('change', toggleTheme);
    });

    // Mobile menu listeners
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const menuCloseBtn = document.getElementById('menu-close-btn');
    const overlay = document.getElementById('overlay');

    if (hamburgerBtn) hamburgerBtn.addEventListener('click', toggleMobileMenu);
    if (menuCloseBtn) menuCloseBtn.addEventListener('click', toggleMobileMenu);
    if (overlay) overlay.addEventListener('click', toggleMobileMenu);

    // Mobile nav link listeners
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        if (link) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                toggleMobileMenu();
                smoothScroll(link.getAttribute('href'));
            });
        }
    });

    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) contactForm.addEventListener('submit', validateForm);

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor) {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                smoothScroll(anchor.getAttribute('href'));
            });
        }
    });

    // Initialize animations
    const animatedElements = document.querySelectorAll('.fade-in, .team-card, .project-card');
    animatedElements.forEach(el => observer.observe(el));
});