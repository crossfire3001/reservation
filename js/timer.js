const countdownTime = 30 * 60;

function startCountdown() {
  let seconds = countdownTime;

  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

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
