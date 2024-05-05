
window.onload = function () {
    let slides =
        document.getElementsByClassName('carousel-item');

    function addActive(slide) {
        slide.classList.add('active');
    }

    function removeActive(slide) {
        slide.classList.remove('active');
    }

    addActive(slides[0]);
    setInterval(function () {
        for (let i = 0; i < slides.length; i++) {
            if (i + 1 == slides.length) {
                addActive(slides[0]);
                setTimeout(removeActive, 10, slides[i]);
                break;
            }
            if (slides[i].classList.contains('active')) {
                setTimeout(removeActive, 10, slides[i]);
                addActive(slides[i + 1]);
                break;
            }
        }
    }, 6000);
};
