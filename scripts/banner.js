let slideIndex = 0;
let slideInterval;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

function plusSlides(n) {
    slideIndex += n;
    showSlides();
    resetInterval();
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
    resetInterval();
}

function startSlideShow() {
    slideInterval = setInterval(() => {
        slideIndex++;
        showSlides();
    }, 10000);
}

function resetInterval() {
    clearInterval(slideInterval);
    startSlideShow();
}

document.querySelector('.banner').addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

document.querySelector('.banner').addEventListener('mouseleave', () => {
    startSlideShow();
});


showSlides();
startSlideShow();
