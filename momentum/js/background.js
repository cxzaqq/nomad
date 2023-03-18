const images = ["0.PNG", "1.PNG", "2.PNG"];

const randomImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${randomImage}`;

document.body.appendChild(bgImage);