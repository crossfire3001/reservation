const countdownTime = 30 * 60;

function startCountdown() {
  let seconds = countdownTime;

  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  const minutesTens = document.querySelector("[data-minutes-tens]");
  const minutesOnes = document.querySelector("[data-minutes-ones]");
  const secondsTens = document.querySelector("[data-seconds-tens]");
  const secondsOnes = document.querySelector("[data-seconds-ones]");

  function updateTimer() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(remainingSeconds).padStart(2, "0");

    seconds--;

    if (seconds < 0) {
      clearInterval(interval);
      minutesElement.textContent = "00";
      secondsElement.textContent = "00";
    }
  }

  updateTimer();

  const interval = setInterval(updateTimer, 1000);
}

document.addEventListener("DOMContentLoaded", startCountdown);

const test = new Date().setMinutes(new Date().getMinutes() + 30);
console.log(test);
