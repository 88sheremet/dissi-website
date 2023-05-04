const images = document.querySelectorAll(".slider .slider-line img");
const sliderLine = document.querySelector(".slider-line");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let count = 0;

sliderLine.style.right = "100px";

prevBtn.addEventListener("click", () => {
  let offset = 0;
  offset = offset - 100;
  if ((offset = 0)) {
    offset = 0;
  }
  sliderLine.style.right = offset + "0px";
});

nextBtn.addEventListener("click", () => {
  let offset = 0;
  offset = offset + 100;
  if ((offset = 200)) {
    offset = 200;
  }
  sliderLine.style.right = offset + "px";
});
