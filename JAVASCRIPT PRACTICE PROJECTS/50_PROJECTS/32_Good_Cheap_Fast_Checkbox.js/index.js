const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");
const checkbox = document.querySelectorAll(".toggle");

checkbox.forEach((element) => {
  element.addEventListener("click", (e) => {
    // we can also compare the nodes
    // e.target === good or e.target === cheap or e.target === fast
    if (e.target.value === "fast" && fast.checked && cheap.checked) {
      cheap.checked = false;
    } else if (e.target.value === "cheap" && fast.checked && good.checked) {
      good.checked = false;
    } else if (e.target.value === "good" && fast.checked && cheap.checked) {
      cheap.checked = false;
    }
  });
});
