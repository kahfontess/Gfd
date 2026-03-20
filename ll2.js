const scene = document.getElementById("scene");
const seal = document.getElementById("seal");
const openBtn = document.getElementById("openBtn");
const hearts = document.getElementById("hearts");
const envelopeWrap = document.querySelector(".envelope-wrap");

let opened = false;

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = Math.random() > 0.5 ? "❤" : "💖";
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.fontSize = `${12 + Math.random() * 24}px`;
  heart.style.animationDuration = `${6 + Math.random() * 6}s`;
  heart.style.opacity = `${0.18 + Math.random() * 0.34}`;
  hearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 12000);
}

function createSparkles() {
  const symbols = ["✨", "💖", "💕", "💗", "🌸"];

  for (let i = 0; i < 14; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    sparkle.style.left = `${10 + Math.random() * 80}%`;
    sparkle.style.top = `${18 + Math.random() * 42}%`;
    sparkle.style.fontSize = `${1 + Math.random() * 1.1}rem`;
    sparkle.style.animationDelay = `${Math.random() * 0.25}s`;
    envelopeWrap.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1400);
  }
}

function openLetter() {
  if (opened) return;
  opened = true;
  scene.classList.add("open");
  createSparkles();
}

seal.addEventListener("click", openLetter);
openBtn.addEventListener("click", openLetter);

for (let i = 0; i < 16; i++) {
  setTimeout(createHeart, i * 250);
}

setInterval(createHeart, 900);
