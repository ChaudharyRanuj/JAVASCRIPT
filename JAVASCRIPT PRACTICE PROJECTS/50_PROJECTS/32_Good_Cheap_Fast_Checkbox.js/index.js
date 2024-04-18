const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");
const checkbox = document.querySelectorAll(".toggle");
const label = document.querySelectorAll(".label");

const statusValue = document.querySelector(".status");
const ball = document.querySelector(".ball");

checkbox.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target.value === "fast" && fast.checked && cheap.checked) {
      cheap.checked = false;
    } else if (e.target.value === "cheap" && fast.checked && good.checked) {
      good.checked = false;
    } else if (e.target.value === "good" && fast.checked && cheap.checked) {
      cheap.checked = false;
    }
  });
});
