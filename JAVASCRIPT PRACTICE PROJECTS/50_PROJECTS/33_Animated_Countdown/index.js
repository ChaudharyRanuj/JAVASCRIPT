const replayBtn = document.querySelector(".replay");
const span = document.querySelectorAll(".counter span");
const counterEndText = document.querySelector(".counter-end-text");
const counter = document.querySelector(".counter");

function resetDom() {
  span.forEach((ele) => {
    ele.classList = "";
  });
}

replayBtn.addEventListener("click", () => {
  counter.classList.remove("hide");
  counterEndText.classList.add("hide");

  resetDom();

  span[0].classList.add("in");
  animation();
});

function animation() {
  let spanLength = span.length - 1;
  span.forEach((num, idx) => {
    num.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && idx !== spanLength) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        counterEndText.classList.remove("hide");
      }
    });
  });
}
