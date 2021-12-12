let currentSlide = 0;
const slider = Array.from(document.querySelectorAll('.slider__item'));

function openSlide() {
    slider[currentSlide].className = 'slider__item slider__item_active';
};

function closeSlide() {
    slider[currentSlide].className = 'slider__item';
};

const nextArrow = document.querySelector('.slider__arrow_next');
const prevArrow = document.querySelector('.slider__arrow_prev');

nextArrow.onclick = () => {
    openSlide();
    ++currentSlide;
    if (currentSlide == slider.length) {
        currentSlide = 0;
    };
    openSlide();
};

prevArrow.onclick = () => {
    closeSlide();
    --currentSlide;
    if (currentSlide < 0) {
        currentSlide = (slider.length - 1);
    };
    openSlide();
};