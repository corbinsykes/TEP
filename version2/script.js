document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.querySelector('.hamburger');
    var menu = document.querySelector('.menu');

    hamburger.addEventListener('click', toggle);

    function toggle() {
        hamburger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    }
});
