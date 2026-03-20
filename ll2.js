const scene = document.getElementById("scene");
const seal = document.getElementById("seal");
const openBtn = document.getElementById("openBtn");
const hearts = document.getElementById("hearts");

let opened = false;

function createSparkles() {
  const symbols = ["✨", "💖", "💕", "💗", "🌸"];
  const wrap = document.querySelector(".envelope-wrap");

  for (let i = 0; i < 14; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    sparkle.style.left = `${12 + Math.random() * 76}%`;
    sparkle.style.top = `${18 + Math.random() * 42}%`;
    sparkle.style.fontSize = `${1 + Math.random() * 1.1}rem`;
    sparkle.style.animationDelay = `${Math.random() * 0.25}s`;
    wrap.appendChild(sparkle);

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

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = Math.random() > 0.5 ? "❤" : "💖";
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.fontSize = `${12 + Math.random() * 24}px`;
  heart.style.animationDuration = `${6 + Math.random() * 6}s`;
  heart.style.opacity = `${0.18 + Math.random() * 0.35}`;
  hearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 12000);
}

for (let i = 0; i < 16; i++) {
  setTimeout(createHeart, i * 260);
}

setInterval(createHeart, 900);
