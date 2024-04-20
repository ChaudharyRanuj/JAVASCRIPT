const imageContainer = document.querySelector(".image-container");
const images = document.querySelectorAll(".image-container img");
const pervBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const widthOfImage = 500;
let imageContainerLength = images.length;
let count = 0;

if (count === 0) {
  pervBtn.classList.add("disable");
}

pervBtn.addEventListener("click", () => {
  count--;
  imageContainer.style.transform = `translateX(-${count * widthOfImage}px)`;

  if (count === 0) {
    pervBtn.classList.add("disable");
  } else if (count < imageContainerLength - 1) {
    nextBtn.classList.remove("disable");
  }
});

nextBtn.addEventListener("click", () => {
  count++;
  imageContainer.style.transform = `translateX(-${count * widthOfImage}px)`;

  if (count > imageContainerLength - 2) {
    nextBtn.classList.add("disable");
  } else if (count > 0) {
    pervBtn.classList.remove("disable");
  }
});
