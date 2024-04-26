const carouselInner = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const totalItems = document.querySelectorAll('.carousel-item').length;
let currentIndex = 0;
let timer;

function showSlide(index) {
    if (index < 0) {
        index = totalItems - 1;
    } else if (index >= totalItems) {
        index = 0;
    }
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
}
 
function nextSlide() {
    showSlide(currentIndex + 1);
}

function startCarousel() {
    timer = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function stopCarousel() {
    clearInterval(timer);
}

prevBtn.addEventListener('click', () => {
    stopCarousel();
    showSlide(currentIndex - 1);
    startCarousel();
});

nextBtn.addEventListener('click', () => {
    stopCarousel();
    showSlide(currentIndex + 1);
    startCarousel();
});

// Start the carousel initially
startCarousel();
