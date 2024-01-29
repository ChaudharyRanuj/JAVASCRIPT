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
  const tankWaterLevel = document.querySelector(".big-container-capacity");
  let waterInContainer = `${element * 0.25}ltr`;
  let top = 100 - element * 12.5;
  bigContainer.style.top = `${top}%`;
  tankWaterLevel.innerHTML = `${waterInContainer} <br> <span> (${
    element * 12.5
  }%)</span>
  `;
}

waterFillContainer();

