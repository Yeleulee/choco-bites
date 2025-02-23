document.addEventListener('DOMContentLoaded', function() {
    // Navigation toggle for mobile devices
    const navToggle = document.querySelector('.nav-toggle');
    const menuContainer = document.querySelector('.menu-container');
    if (navToggle && menuContainer) {
        navToggle.addEventListener('click', function() {
            menuContainer.classList.toggle('active');
        });
    }

    // Existing video code...
    const video1 = document.getElementById('background-video-1');
    if (video1) {
        video1.style.opacity = '1';
        video1.play();
    }

    // Product Video Slider JS
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    // Function to update the visible slide
    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Change slide in given direction (+1 for next, -1 for previous)
    function changeSlide(direction) {
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
        updateSlider();
    }
    
    // Attach event listeners to the buttons
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            changeSlide(-1);
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            changeSlide(1);
        });
    }
});



