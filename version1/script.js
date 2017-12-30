document.addEventListener("DOMContentLoaded", function(){
    var slide = 1;
    var total = 3;

    var splash = document.querySelector('.splash');
    var prev = document.querySelector('.fa-chevron-circle-left');
    var next = document.querySelector('.fa-chevron-circle-right');

    prev.addEventListener('click', prevSlide);
    next.addEventListener('click', nextSlide);
    splash.classList.add('slide' + slide);

    function prevSlide() {
        if (slide > 1) {
            slide--
            splash.classList.replace('slide' + (slide + 1), 'slide' + slide);
        } else {
            slide = total;
            splash.classList.replace('slide1', 'slide' + slide);
        }

    }

    function nextSlide() {
        if (slide < total) {
            slide++
            splash.classList.replace('slide' + (slide - 1), 'slide' + slide);
        } else {
            slide = 1;
            splash.classList.replace('slide' + total, 'slide' + slide);
        }
    }
});