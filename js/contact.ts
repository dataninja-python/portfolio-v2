// slide movement
let slideIndex = 1;

const showSlides = (indexNum) => {
  let i = 0;
  const slides = document.querySelectorAll(".cards");
  if (indexNum > slides.length) { slideIndex = 1 }
  if (indexNum < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    let s = <HTMLElement>slides[i];
    s.style.display = "none";
  }
  let curS = <HTMLElement>slides[slideIndex - 1];
  curS.style.display = "block";

}

const addSlide = (indexNum) => {
  showSlides(slideIndex += indexNum);
}

const currentSlide = (indexNum) => {
  showSlides(slideIndex = indexNum);
}

showSlides(slideIndex);

// navigation
const leftNav = document.querySelector(".left-arrow-container");
leftNav.addEventListener("click", () => {
  addSlide(-1);
});

const rightNav = document.querySelector(".right-arrow-container");
rightNav.addEventListener("click", () => {
  addSlide(1);
});