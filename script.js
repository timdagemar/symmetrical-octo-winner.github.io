const targetDate = new Date("2027-01-09T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").textContent = "הרגע הגיע.";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").textContent =
  `ימים: ${days} \nשעות: ${hours} \nדקות: ${minutes} \nשניות: ${seconds} `;

}

updateCountdown();
setInterval(updateCountdown, 1000);
