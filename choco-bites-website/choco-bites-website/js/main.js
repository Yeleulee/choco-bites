document.addEventListener('DOMContentLoaded', function() {
    // (Optional) Navigation toggle if implemented in your HTML/CSS
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Video elements from your HTML
    const video1 = document.getElementById('background-video-1');
    const video2 = document.getElementById('secondary-video');

    // Set initial states: video1 is fully visible; video2 is fully transparent.
    video1.style.opacity = '1';
    video2.style.opacity = '0';

    // Start video1 and ensure video2 is paused.
    video1.play();
    video2.pause();

    const fadeDuration = 500; // Duration of the opacity fade in ms

    // After 10 seconds, crossfade from video1 to video2
    setTimeout(() => {
        // Begin fade by updating opacity values.
        video1.style.opacity = '0';
        video2.style.opacity = '1';

        // After the fade duration, swap playback if needed.
        setTimeout(() => {
            video1.pause();
            video2.play();
        }, fadeDuration);
    }, 10000);
});

