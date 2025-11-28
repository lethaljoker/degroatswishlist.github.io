// script.js

// --- 1. Existing Countdown Logic ---
document.addEventListener("DOMContentLoaded", function() {
    const countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        const today = new Date();
        const christmas = new Date(today.getFullYear(), 11, 25);
        if (today.getMonth() === 11 && today.getDate() > 25) {
            christmas.setFullYear(christmas.getFullYear() + 1);
        }
        const timeDifference = christmas - today;
        const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

        countdownElement.textContent = `${daysLeft} days until Christmas!`;
    }

    updateCountdown();
    setInterval(updateCountdown, 86400000); // Update every 24 hours
});


// --- 2. New Slider Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.wish-list');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    // Function to update the slider's position
    function updateSlider() {
        // Calculate the translation needed
        // Each item takes 100% of the wrapper's width
        sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Event listener for the "Next" button
    nextBtn.addEventListener('click', () => {
        if (currentIndex < sliderItems.length - 1) {
            currentIndex++;
        } else {
            // Loop back to the first slide
            currentIndex = 0; 
        }
        updateSlider();
    });

    // Event listener for the "Previous" button
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            // Loop to the last slide
            currentIndex = sliderItems.length - 1; 
        }
        updateSlider();
    });

    // Initialize slider position
    updateSlider();
});
