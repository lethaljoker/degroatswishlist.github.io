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
    // Set current time to midnight for accurate day counting
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    countdowns.forEach(display => {
        const nameElement = display.parentElement.querySelector('.person-name');
        const birthdayStr = nameElement.getAttribute('data-birthday');
        
        if (!birthdayStr) return;

        const [month, day] = birthdayStr.split('-').map(Number);
        let bdayDate = new Date(today.getFullYear(), month - 1, day);

        // If today is past the birthday, set the countdown for next year
        if (today > bdayDate) {
            bdayDate.setFullYear(today.getFullYear() + 1);
        }

        const diffTime = bdayDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) {
            display.innerHTML = "🎉 Happy Birthday! 🎂";
            display.style.color = "#ff4d4d"; // Optional: Make it pop
        } else {
            display.innerHTML = `Days until birthday: <strong>${diffDays}</strong>`;
        }
    });
}

// Call this function inside your existing window.onload or DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    updateBirthdays();
    // If you have an existing Christmas countdown function, call it here too!
});


    updateCountdown();
    // Update every 24 hours (86,400,000 milliseconds)
    setInterval(updateCountdown, 86400000); 
});
