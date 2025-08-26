const codeDisplay = document.getElementById("codeDisplay");
const historyList = document.getElementById("historyList");
const genSound = document.getElementById("genSound");

function generateCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  codeDisplay.value = code;
  genSound.play();
  addToHistory(code);
}

function addToHistory(code) {
  const li = document.createElement("li");
  li.textContent = code;
  historyList.prepend(li);
}

function copyCode() {
  navigator.clipboard.writeText(codeDisplay.value)
    .then(() => alert("Code copied to clipboard!"))
    .catch(() => alert("Failed to copy code."));
}

// Create stars
const starsContainer = document.querySelector(".stars");
for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.width = star.style.height = `${Math.random() * 2 + 1}px`;
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  starsContainer.appendChild(star);
}
