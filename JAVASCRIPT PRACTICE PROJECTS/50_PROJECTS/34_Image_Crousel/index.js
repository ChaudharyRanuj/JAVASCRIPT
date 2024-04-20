const imageContainer = document.querySelector(".image-container");
const images = document.querySelectorAll(".image-container img");
const pervBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const widthOfImage = 500;
let imageContainerLength = widthOfImage * images.length;
let count = 0;

if (count === 0) {
  pervBtn.classList.add("disable");
}

pervBtn.addEventListener("click", () => {
  count -= widthOfImage;
  imageContainer.style.transform = `translateX(-${count}px)`;

  if (count === 0) {
    pervBtn.classList.add("disable");
  } else if (count < 1500) {
    nextBtn.classList.remove("disable");
  }
});

nextBtn.addEventListener("click", () => {
  count += widthOfImage;
  imageContainer.style.transform = `translateX(-${count}px)`;

  if (count === 1500) {
    nextBtn.classList.add("disable");
  } else if (count === 500) {
    pervBtn.classList.remove("disable");
  }
});
