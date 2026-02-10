document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. Christmas Countdown ---
    const countdownElement = document.getElementById("countdown");
    function updateCountdown() {
        const today = new Date();
        const christmas = new Date(today.getFullYear(), 11, 25);
        if (today.getMonth() === 11 && today.getDate() > 25) {
            christmas.setFullYear(christmas.getFullYear() + 1);
        }
        const timeDifference = christmas - today;
        const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        if (countdownElement) {
            countdownElement.textContent = `${daysLeft} days until Christmas!`;
        }
    }

    // --- 2. Birthday Countdown & Cake Logic ---
    function updateBirthdays() {
        const countdowns = document.querySelectorAll('.birthday-countdown');
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        countdowns.forEach(display => {
            const parent = display.closest('.person');
            const nameElement = parent ? parent.querySelector('.person-name') : null;
            
            if (!nameElement) return;

            const birthdayStr = nameElement.getAttribute('data-birthday');
            if (!birthdayStr) return;

            const [month, day] = birthdayStr.split('-').map(Number);
            let bdayDate = new Date(today.getFullYear(), month - 1, day);

            // Calculate differences
            const isBirthday = (today.getMonth() === (month - 1) && today.getDate() === day);

            if (today > bdayDate && !isBirthday) {
                bdayDate.setFullYear(today.getFullYear() + 1);
            }

            const diffTime = bdayDate - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (isBirthday) {
                display.innerHTML = "🎉 Happy Birthday! 🎂";
                display.style.color = "#ff4d4d";
                // Add cake to the name if not already there
                if (!nameElement.innerHTML.includes('🎂')) {
                    nameElement.innerHTML += ' 🎂';
                }
            } else {
                display.innerHTML = `Days until birthday: <strong>${diffDays}</strong>`;
            }
        });
    }

    updateCountdown();
    updateBirthdays();
});
