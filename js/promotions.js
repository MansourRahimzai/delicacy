// promotions timer js
// Set countdown to 3 days from now

// First update and then repeat every second
updateCountdown();
setInterval(updateCountdown, 1000);
// Countdown Timer Script
const countdown = document.getElementById("countdown");
const targetDate = new Date().getTime() + 1000 * 60 * 60 * 3; // 3 hours from now

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const hours = Math.floor(distance / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `
    <div class="time-box"><span>${hours}</span><small>Hours</small></div>
    <div class="time-box"><span>${minutes}</span><small>Minutes</small></div>
    <div class="time-box"><span>${seconds}</span><small>Seconds</small></div>
  `;
};

setInterval(updateCountdown, 1000);
