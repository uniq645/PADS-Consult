// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50
    });
});

// Alpine.js is initialized automatically via script tag in HTML

// Common functionality can be added here
console.log('PAD Consult website loaded');
