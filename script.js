document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const demoBtn = document.getElementById('demo-btn');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });

    demoBtn.addEventListener('click', () => {
        alert('Thank you for your interest in a demo. Our team will contact you shortly.');
    });
});
