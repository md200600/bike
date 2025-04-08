let currentSlide = 0;
const slider = document.getElementById("slider");
const cards = slider.children;
const totalSlides = cards.length;
let startX = 0;
let endX = 0;

function moveSlide(direction) {
    let newSlide = currentSlide + direction;
    if (newSlide >= 0 && newSlide < totalSlides) {
        currentSlide = newSlide;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
}


slider.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
});

slider.addEventListener("touchend", (event) => {
    endX = event.changedTouches[0].clientX;
    if (startX - endX > 50) {

        moveSlide(1);
    } else if (endX - startX > 50) {

        moveSlide(-1);
    }
});