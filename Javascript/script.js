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