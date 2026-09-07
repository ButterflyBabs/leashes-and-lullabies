// ===================================
// Leashes & Lullabies by Mayleen
// Interactive JavaScript
// ===================================

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Smooth scroll offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Height of fixed nav
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form - Conditional Fields
const careTypeSelect = document.getElementById('careType');
const babysittingFields = document.getElementById('babysittingFields');
const petFields = document.getElementById('petFields');

careTypeSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    
    // Hide all conditional fields first
    babysittingFields.style.display = 'none';
    petFields.style.display = 'none';
    
    // Show relevant fields
    if (value === 'babysitting') {
        babysittingFields.style.display = 'block';
    } else if (value === 'dog-walking' || value === 'pet-checkin') {
        petFields.style.display = 'block';
    }
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    // Here you would normally send the data to a server
    // For now, we'll just simulate a successful submission
    console.log('Form submitted with data:', data);
    
    // Show success message
    contactForm.style.display = 'none';
    formSuccess.style.display = 'block';
    
    // Scroll to success message
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // In a real implementation, you might send data to:
    // - A serverless function (Netlify, Vercel)
    // - An email service (FormSpree, EmailJS)
    // - A backend API
    // - Google Forms
    
    // Example with FormSpree:
    // fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //     method: 'POST',
    //     body: formData,
    //     headers: {
    //         'Accept': 'application/json'
    //     }
    // }).then(response => {
    //     if (response.ok) {
    //         contactForm.style.display = 'none';
    //         formSuccess.style.display = 'block';
    //     }
    // });
});

// Reset form function
function resetForm() {
    contactForm.reset();
    contactForm.style.display = 'block';
    formSuccess.style.display = 'none';
    babysittingFields.style.display = 'none';
    petFields.style.display = 'none';
}

// Add scroll behavior to nav
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolled
    if (currentScroll > 50) {
        nav.style.boxShadow = '0 4px 16px rgba(47, 44, 40, 0.12)';
    } else {
        nav.style.boxShadow = '0 2px 8px rgba(47, 44, 40, 0.08)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and other elements for animation
document.querySelectorAll('.service-card, .trust-card, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Validate phone number format (basic US phone validation)
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('blur', () => {
    const phone = phoneInput.value.replace(/\D/g, '');
    if (phone.length === 10) {
        phoneInput.value = `(${phone.slice(0,3)}) ${phone.slice(3,6)}-${phone.slice(6)}`;
    }
});

// Set minimum date for date picker to today
const dateInput = document.getElementById('preferredDate');
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

// Analytics placeholder
// When you're ready to add analytics, use a privacy-friendly service
// Example: Plausible, Fathom, or privacy-configured Google Analytics

// Track form engagement (optional)
contactForm.addEventListener('focus', () => {
    console.log('User engaged with contact form');
    // Track this event in your analytics if needed
}, true);

// Prevent form submission if spam bot detection
// This is a simple honeypot technique
const honeypot = document.createElement('input');
honeypot.type = 'text';
honeypot.name = 'website';
honeypot.style.display = 'none';
honeypot.setAttribute('tabindex', '-1');
honeypot.setAttribute('autocomplete', 'off');
contactForm.appendChild(honeypot);

// Check honeypot on submit
contactForm.addEventListener('submit', (e) => {
    if (honeypot.value !== '') {
        e.preventDefault();
        console.log('Potential spam detected');
        return false;
    }
});

console.log('🐾 Leashes & Lullabies website loaded successfully! 💛');