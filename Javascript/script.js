function toggleNavbar() {
    const links = document.querySelector('.links');
    const toggleBtn = document.querySelector('.toggle-btn');
    links.classList.toggle('active');
    toggleBtn.classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".links");
    const header = document.querySelector(".Animation-header");
    setTimeout(function () {
        navbar.classList.add("Animation-appear");
        header.classList.add("Animation-appear-header")
    }, 500);
});

document.addEventListener('scroll', function() {
    const descriptions = document.querySelectorAll('.Description ');
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    descriptions.forEach(description => {
        const rect = description.getBoundingClientRect();

        if (rect.top <= windowHeight) {
            description.classList.add('visible');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.animated-image');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkImagesInView() {
        images.forEach(image => {
            if (isElementInViewport(image)) {
                image.classList.add('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkImagesInView);
    window.addEventListener('resize', checkImagesInView);

    checkImagesInView();
});


document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".container5 .item img");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkScroll() {
        images.forEach(image => {
            if (isInViewport(image)) {
                image.classList.add("scrolled");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); 
});

document.addEventListener("DOMContentLoaded", function() {
    const leftButton = document.getElementById('left-button');
    const rightButton = document.getElementById('right-button');
    const imageContainer = document.querySelector('.image-container');

    rightButton.addEventListener('click', () => {
        const images = document.querySelectorAll('.image-wrapper');
        const lastImage = images[images.length - 1];
        imageContainer.prepend(lastImage);
        updateImageStyles();
    });

    leftButton.addEventListener('click', () => {
        const images = document.querySelectorAll('.image-wrapper');
        const firstImage = images[0];
        imageContainer.appendChild(firstImage);
        updateImageStyles();
    });

    function updateImageStyles() {
        const images = document.querySelectorAll('.image-wrapper');
        images.forEach((image, index) => {
            image.classList.remove('rotate');
            if (index === 0) {
                image.style.transform = 'translate(-20px) scale(0.5)';
                image.style.opacity = '0.3';
            } else if (index === 1) {
                image.style.transform = 'translate(-20px) scale(0.8)';
                image.style.opacity = '0.5';
            } else if (index === 2) {
                image.style.transform = 'translate(-10px) scale(1.35)';
                image.style.opacity = '1';
            } else if (index === 3) {
                image.style.transform = 'translate(-10px) scale(0.6)';
                image.style.opacity = '0.5';
            } else if (index === 4) {
                image.style.transform = 'translate(-10px) scale(0.5)';
                image.style.opacity = '0.3';
            }
        });
    }

    updateImageStyles(); 
});

document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector(".above_image");
    const description = document.querySelector(".description7");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkScroll() {
        if (isInViewport(image)) {
            image.classList.add("scrolled");
        }

        if (isInViewport(description)) {
            description.classList.add("visible");
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); 
});