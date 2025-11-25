// script.js
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
