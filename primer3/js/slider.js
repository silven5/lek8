/* За замовченням показуємо перший слайд */
let slideIndex = 1;
showSlides(slideIndex);

/* Збільшуємо лічильник на одиницю і показуємо наступний слайд*/
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Зменьшуємо лічильник на одиницю і показуємо попередній слайд*/
function previousSlide() {
    showSlides(slideIndex -= 1);
}
//Постійна прокрутка
setInterval(() => {

    showSlides(slideIndex);
    slideIndex++
}, 5000);

/* Функція показу слайдів */
function showSlides(n) {

    let slides = document.getElementsByClassName("item");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Цикл по всім слайдам */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}