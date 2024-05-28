const slides = document.querySelectorAll('.slider .slides img');
let slideIndex = 0;
let intervalId = null;

document.addEventListener('DOMContentLoaded', initializeSlider);

function initializeSlider() {
    slides[slideIndex].classList.add('displaySlide');
}

function prevSlide() {
    slides[slideIndex].classList.remove('displaySlide');
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    slides[slideIndex].classList.add('displaySlide');
}

function nextSlide() {
    slides[slideIndex].classList.remove('displaySlide');
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('displaySlide');
}