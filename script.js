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

    function updateBirthdays() {
    const countdowns = document.querySelectorAll('.birthday-countdown');
    const now = new Date();
    const currentYear = now.getFullYear();

    countdowns.forEach(display => {
        // Get the birthday from the parent or sibling element (MM-DD)
        const nameElement = display.parentElement.querySelector('.person-name');
        const birthdayStr = nameElement.getAttribute('data-birthday');
        
        if (!birthdayStr) return;

        const [month, day] = birthdayStr.split('-').map(Number);
        let bdayDate = new Date(currentYear, month - 1, day);

        // Reset the time to midnight for accurate day counting
        now.setHours(0, 0, 0, 0);
        bdayDate.setHours(0, 0, 0, 0);

        // If the birthday already happened this year, set it to next year
        if (now > bdayDate) {
            bdayDate.setFullYear(currentYear + 1);
        }

        const diffTime = bdayDate - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) {
            display.innerHTML = "🎉 Happy Birthday! 🎂";
        } else {
            display.innerHTML = `Days until birthday: ${diffDays}`;
        }
    });
}

// Run when the page loads
document.addEventListener('DOMContentLoaded', updateBirthdays);

    updateCountdown();
    // Update every 24 hours (86,400,000 milliseconds)
    setInterval(updateCountdown, 86400000); 
});
