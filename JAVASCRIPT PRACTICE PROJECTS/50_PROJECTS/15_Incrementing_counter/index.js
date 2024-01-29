function waterFillContainer() {
  const btn = document.querySelectorAll(".small-container");
  btn.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      let element = +e.target.getAttribute("data-value");
      smallContainerCss(element, btn);
      fillBigContainer(element);
    });
  });
}

function smallContainerCss(element, btn) {
  btn.forEach((ele, idx) => {
    let no = idx + 1;
    if (no <= element) {
      ele.classList.add("fill");
    } else {
      ele.classList.remove("fill");
    }
  });
}

function fillBigContainer(element) {
  const bigContainer = document.querySelector(".inner-container");
  let top = 100 - element * 12.5;
  bigContainer.style.top = `${top}%`;
}

waterFillContainer();