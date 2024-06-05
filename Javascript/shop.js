document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const currentImage = document.getElementById('currentImage');
    

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            currentImage.src = this.src;
        });
    });

});

document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail_4');
    const currentImage = document.getElementById('currentImage_4');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            currentImage.src = this.src;
        });
    });

});

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




document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector(".animated_image");
    const description_1 = document.querySelector(".Offer");
    const description_2 = document.querySelector(".off");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom > 0 &&
            rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
            rect.right > 0
        );
    }

    function checkScroll() {
        if (isInViewport(image)) {
            image.classList.add("scrolled");
        }

        if (isInViewport(description_1)) {
            description_1.classList.add("visible_1");
        }

        if (isInViewport(description_2)) {
            description_2.classList.add("visible_2");
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});


document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector(".animated_image_6");
    const description_1 = document.querySelector(".Offer_6");
    const description_2 = document.querySelector(".off_6");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom > 0 &&
            rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
            rect.right > 0
        );
    }

    function checkScroll() {
        if (isInViewport(image)) {
            image.classList.add("Scrolled");
        }

        if (isInViewport(description_1)) {
            description_1.classList.add("visible_first");
        }

        if (isInViewport(description_2)) {
            description_2.classList.add("visible_second");
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
