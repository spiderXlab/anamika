/* ===============================
   Optional Birthday Message
   =============================== */
function showMessage() {
  console.log(
    "🎉 Happy Birthday Anamika 💖\n" +
    "You are truly special.\n" +
    "May your life be full of love, laughter and success ✨🎂"
  );
}

/* ===============================
   Confetti Effect
   =============================== */

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

/* Resize canvas safely */
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

/* Create confetti pieces */
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

/* Draw confetti */
function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confettiPieces.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  });

  updateConfetti();
}

/* Update confetti positions */
function updateConfetti() {
  confettiPieces.forEach((p) => {
    p.y += Math.cos(p.d) + 1;
    p.x += Math.sin(p.d);

    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
  });
}

/* Start animation */
setInterval(drawConfetti, 20);
