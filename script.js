function showMessage() {
  alert(
    "🎉 Happy Birthday Anamika 💖\n\n" +
    "You are truly special.\n" +
    "May your life be full of love, laughter and success ✨🎂"
  );
}

/* Confetti Effect */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiPieces = [];

for (let i = 0; i < 150; i++) {
  confettiPieces.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 2,
    d: Math.random() * 150,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confettiPieces.forEach((p, i) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  });

  updateConfetti();
}

function updateConfetti() {
  confettiPieces.forEach((p, i) => {
    p.y += Math.cos(p.d) + 1;
    p.x += Math.sin(p.d);

    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
  });
}

setInterval(drawConfetti, 20);
