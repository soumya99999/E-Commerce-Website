function toggleNavbar() {
    const links = document.querySelector('.links');
    const toggleBtn = document.querySelector('.toggle-btn');
    links.classList.toggle('active');
    toggleBtn.classList.toggle('active');
}

document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('liked');
    });
});

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
