document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        this.reset();
    });

    // Responsive navigation menu
    const navToggle = document.createElement('button');
    navToggle.textContent = '☰';
    navToggle.style.cssText = `
        display: none;
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
    `;
    document.querySelector('nav').prepend(navToggle);

    const navList = document.querySelector('nav ul');

    function toggleNav() {
        navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
    }

    navToggle.addEventListener('click', toggleNav);

    function handleResize() {
        if (window.innerWidth <= 768) {
            navToggle.style.display = 'block';
            navList.style.display = 'none';
            navList.style.flexDirection = 'column';
            navList.style.width = '100%';
        } else {
            navToggle.style.display = 'none';
            navList.style.display = 'flex';
            navList.style.flexDirection = 'row';
            navList.style.width = 'auto';
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize();
});