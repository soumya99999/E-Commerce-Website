function toggleNavbar() {
    const links = document.querySelector('.links');
    const toggleBtn = document.querySelector('.toggle-btn');
    links.classList.toggle('active');
    toggleBtn.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');
    const aboutSection = document.querySelector('.About');
    const contactSection = document.querySelector('.contact_information');

    function scrollToSection(section) {
        section.scrollIntoView({ behavior: 'smooth' });
        section.classList.add('highlight');
        setTimeout(() => {
            section.classList.remove('highlight');
        }, 2000); 
    }

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToSection(aboutSection);
    });

    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToSection(contactSection);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to top button functionality
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    const backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}