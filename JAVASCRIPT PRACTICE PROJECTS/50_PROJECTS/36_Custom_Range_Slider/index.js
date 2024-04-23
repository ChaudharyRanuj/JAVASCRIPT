const input = document.querySelector("#range");
const label = document.querySelector(".label");

input.addEventListener("input", (e) => {
  label.innerText = e.target.value;
  const left = parseInt(e.target.value) * 3 - 30;
  label.style.left = `${left}px`;
});
