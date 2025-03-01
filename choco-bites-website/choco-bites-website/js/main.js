document.addEventListener('DOMContentLoaded', function() {
    // Navigation toggle for mobile devices
    const navToggle = document.querySelector('.nav-toggle');
    const menuContainer = document.querySelector('.menu-container');
    if (navToggle && menuContainer) {
        navToggle.addEventListener('click', function() {
            menuContainer.classList.toggle('active');
        });
    }

    // Get video elements
    const videoDesktop = document.getElementById('background-video-desktop');
    const videoMobile = document.getElementById('background-video-mobile');

    // Function to toggle videos based on viewport width
    function toggleVideos() {
        console.log("Viewport width:", window.innerWidth);
        if (window.innerWidth < 768) {
            // Mobile: Hide desktop video
            if (videoDesktop) {
                videoDesktop.style.display = 'none';
                videoDesktop.pause();
            }
            if (videoMobile) {
                videoMobile.style.display = 'block';
                videoMobile.play();
            }
        } else {
            // Desktop: Show desktop video
            if (videoMobile) {
                videoMobile.pause();
                videoMobile.style.display = 'none';
            }
            if (videoDesktop) {
                videoDesktop.style.display = 'block';
                videoDesktop.play().catch(error => console.error("Video play error:", error));
            }
        }
    }

    // Call when DOM content is loaded
    toggleVideos();

    // Optionally re-check on window resize to handle changes in viewport dimensions
    window.addEventListener('resize', toggleVideos);

    // If using the slider on larger devices, initialize it
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Only initialize slider if slides exist (usually on larger devices)
    if (totalSlides > 0) {
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
    }
});



