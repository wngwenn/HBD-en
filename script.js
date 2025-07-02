const images = [
  'images/n1.jpg',
  'images/n2.jpg',
];

let index = 0;
const container = document.getElementById('photoContainer');
const nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click', () => {
  if (index < images.length) {
    const img = document.createElement('img');
    img.src = images[index];
    container.appendChild(img);
    index++;
  } else {
    nextBtn.innerText = "End of slideshow";
    nextBtn.disabled = true;
  }
});

// ...existing code...
const quotes = [
  "“nurut aja lo”",
  "“woke up and realized it's ur day.”",
  "“Another year.”",
  "“Smoke in the sky”",
  "“coffee bitter as hell”",
  "“and us, on Epoy's roof, staring into nothing but somehow it made sanse”",
  "“Kalo cape, main in kucing en -catlovers”",
  "“GBU ALWAYS”"
];
// ...existing code...


let quoteIndex = 0;
document.getElementById('quote').addEventListener('click', () => {
  document.getElementById('quote').innerText = quotes[quoteIndex];
  quoteIndex++;
  if (quoteIndex >= quotes.length) {
    quoteIndex = 0; // Balik ke awal 
  }
});

// ...existing code...
const emojiList = ["🚬", "☕", "💀", "🖤", "🎸"];
const emojiContainer = document.querySelector(".emojiRain");

function createEmoji() {
  const emoji = document.createElement("div");
  emoji.classList.add("emoji");
  emoji.innerText = emojiList[Math.floor(Math.random() * emojiList.length)];
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.animationDuration = 3 + Math.random() * 3 + "s";
  emojiContainer.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 6000);
}

setInterval(createEmoji, 300);
