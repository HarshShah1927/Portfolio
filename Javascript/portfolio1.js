const aside = document.querySelector('.aside');
const navToggler = document.querySelector('.nav-toggler');
const sections = document.querySelectorAll('.section');

navToggler.addEventListener('click', () => {
    aside.classList.toggle('expanded');
    sections.forEach(section => {
        section.classList.toggle('expanded');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const typedTexts = ['Software Developer', 'Web Designer', 'Web Developer', 'UI/UX Designer'];
    const typedOptions = {
        strings: typedTexts,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        showCursor: false
    };
    const typedElement = document.querySelector('.typed-text');
    const typedInstance = new Typed(typedElement, typedOptions);
});