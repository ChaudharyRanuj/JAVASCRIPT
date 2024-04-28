const startGame = document.querySelector(".start-box");
const result = document.querySelector(".result");

function generateFlies() {
  const img = document.createElement("img");
  img.classList.add("box");
  img.src = "fly.png";

  const random = 80;
  const obj = {
    top: generateRandom(random),
    left: generateRandom(random),
    right: generateRandom(random),
    bottom: generateRandom(random),
  };
  const arr = ["top", "left", "right", "bottom"];

  const firstVal = generateRandom(arr.length);
  const secondVal = generateRandom(arr.length);

  if (arr[firstVal] === "top" || arr[secondVal] === "top") {
    img.style.top = `${obj.top}px`;
  }

  if (arr[firstVal] === "left" || arr[secondVal] === "left") {
    img.style.left = `${obj.left}px`;
  }

  if (arr[firstVal] === "right" || arr[secondVal] === "right") {
    img.style.right = `${obj.left}px`;
  }

  if (arr[firstVal] === "bottom" || arr[secondVal] === "bottom") {
    img.style.bottom = `${obj.left}px`;
  }
  document.body.appendChild(img);

  fliesClickHandler();
}

function fliesClickHandler() {
  const box = document.querySelectorAll(".box");
  box.forEach((ele) => {
    ele.addEventListener("click", nextClick);
  });
}

function generateRandom(limit) {
  return Math.floor(Math.random() * limit);
}

function nextClick(ele) {
  ele.target.remove();
  const box = document.querySelectorAll(".box");
  interval -= 3;
  clearInterval(insertFlies);
  if (box.length === 0) {
    result.innerText = "WINNER";
    return;
  }
  insertFlies = setInterval(generateFlies, interval);
}

function init() {
  let interval = 1000;
  let insertFlies = setInterval(generateFlies, interval);
}

startGame.addEventListener("click", (e) => {
  init();
  e.target.parentElement.remove();
});
