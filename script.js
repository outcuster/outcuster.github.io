const images = document.querySelectorAll('.gallery__photos img');
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.style.opacity = i === index ? '1' : '0';
    });
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}, 3000); // 3000 мс = 3 секунды

// Для управления при помощи мыши (ЛКМ для переключения)
document.querySelector('.gallery').addEventListener('click', () => {
   currentIndex = (currentIndex + 1) % images.length;
   showImage(currentIndex);
});

// Initial call to display the first image
showImage(currentIndex);
