const text = document.querySelector(".text");
const input = document.querySelector("input");
const textToPrint = "I am front end developer!";
const cursor = document.querySelector("span");
input.value = 1;
let count = 1;

let speed = 1000;

input.addEventListener("input", (e) => {
  speed = 300 / Number(e.target.value);
});

function watchInterval() {
  count++;
  text.innerText = textToPrint.slice(0, count);
  if (count === textToPrint.length - 1) {
    count = 0;
  }

  setTimeout(watchInterval, speed);
}
watchInterval();
