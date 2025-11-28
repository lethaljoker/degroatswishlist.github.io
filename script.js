document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. Countdown Logic ---
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
    // Update every 24 hours (86,400,000 milliseconds)
    setInterval(updateCountdown, 86400000); 


    // --- 2. Slider Logic ---
    // Note: The selector has been changed from '.slider-wrapper' to '.wish-list' 
    // to match your HTML structure.
    const sliderWrapper = document.querySelector('.wish-list'); 
    const sliderItems = document.querySelectorAll('.person'); // Changed from '.slider-item' to '.person'
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentIndex = 0;

    // Check if slider elements exist before trying to use them
    if (sliderWrapper && sliderItems.length > 0) {
        
        function updateSlider() {
            // Calculate the translation needed (e.g., -0%, -100%, -200%)
            sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        nextBtn.addEventListener('click', () => {
            if (currentIndex < sliderItems.length - 1) {
                currentIndex++;
            } else {
                // Loop back to the first slide
                currentIndex = 0; 
            }
            updateSlider();
        });

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
    }
});
