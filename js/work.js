// slide movement
var slideIndex = 1;
var showSlides = function (indexNum) {
    var i = 0;
    var slides = document.querySelectorAll(".cards");
    if (indexNum > slides.length) {
        slideIndex = 1;
    }
    if (indexNum < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        var s = slides[i];
        s.style.display = "none";
    }
    var curS = slides[slideIndex - 1];
    curS.style.display = "block";
};
var addSlide = function (indexNum) {
    showSlides(slideIndex += indexNum);
};
var currentSlide = function (indexNum) {
    showSlides(slideIndex = indexNum);
};
showSlides(slideIndex);
// navigation
var leftNav = document.querySelector(".left-arrow-container");
leftNav.addEventListener("click", function () {
    addSlide(-1);
});
var rightNav = document.querySelector(".right-arrow-container");
rightNav.addEventListener("click", function () {
    addSlide(1);
});
