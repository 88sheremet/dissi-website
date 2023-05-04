const images = document.querySelectorAll(".slider .slider-line img");
const sliderLine = document.querySelector(".slider-line");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let count = 0;

sliderLine.style.right = "110px";

prevBtn.addEventListener("click", () => {
  let offset = 0;
  offset = offset - 110;
  if ((offset = 0)) {
    offset = 0;
  }
  sliderLine.style.right = offset + "0px";
});

nextBtn.addEventListener("click", () => {
  let offset = 0;
  offset = offset + 110;
  if ((offset = 220)) {
    offset = 220;
  }
  sliderLine.style.right = offset + "px";
});
