const images = document.querySelectorAll(".slider .slider-line img");
const sliderLine = document.querySelector(".slider-line");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let offset = 0;

sliderLine.style.right = "100px";

prevBtn.addEventListener("click", () => {
  
  offset = offset - 93;
  if ((offset = 0)) {
    offset = 0;
  }
  sliderLine.style.right = offset + "px";
});

nextBtn.addEventListener("click", () => {
  
  offset = offset + 93;
  if ((offset = 185)) {
    offset = 185;
  }
  sliderLine.style.right = offset + "px";
});


// reviews slider

const sliderLineReviews = document.querySelector(".reviews__slider-list");
const prevBtnReviews = document.querySelector(".prev-reviews");
const nextBtnReviews = document.querySelector(".next-reviews");

let change = 0;
prevBtnReviews.addEventListener("click", () => {
   
    change = change - 360;
    if (change < 0) {
        change = 0;
    }
    sliderLineReviews.style.right = change + "px";
  });
  
  nextBtnReviews.addEventListener("click", () => {
   
   
    change = change + 360;
    if (change > 720) {
        change = 720;
    }
    sliderLineReviews.style.right = change + "px";
  });