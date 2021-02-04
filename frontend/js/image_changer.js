var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("image_big");
    var images = document.getElementsByClassName("images");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < images.length; i++) {
        images[i].className = images[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "inline-block";
    images[slideIndex-1].className += " active";
}