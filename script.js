// Configuração do slideshow
const photos = ["foto2.jpeg", "foto3.jpeg", "foto4.jpeg", "foto5.jpeg", "foto6.jpeg", "foto7.jpeg", "foto8.jpeg", "foto9.jpeg", "foto10.jpeg", "foto11.jpeg", "foto12.jpeg", "foto13.jpeg", "foto14.jpeg", "foto15.jpeg", "foto16.jpeg", "foto17.jpeg"];
let currentPhotoIndex = 0;
const slideshowElement = document.getElementById("slideshow").children[0];

function updateSlideshow() {
    slideshowElement.src = photos[currentPhotoIndex];
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
}

setInterval(updateSlideshow, 5000); // Muda a cada 5 segundos

// Contagem em tempo real
const targetDate = new Date("2021-10-11T22:13:00"); // Data definida
const counterElement = document.getElementById("counter");

function updateCounter() {
    const now = new Date();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    counterElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCounter, 1000);