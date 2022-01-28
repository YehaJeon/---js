const images = ["1.jpeg","2.jpeg"];

const chosenImages = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.classList.add('img');

bgImage.src = `img/${chosenImages}`;

document.body.appendChild(bgImage);