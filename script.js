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
});
