const outerDiv = document.querySelector(".outerDiv");

outerDiv.addEventListener("click", function (e) {
  const btnEvent = e.target.closest(".btn");
  const divCont = document.querySelectorAll(".divCont");
  const btn = document.querySelectorAll(".btn");
  // GUARD CLAUSE
  if (!btnEvent) return;

  // REMOVE AND ADD CLASS FROM BTN TO TRANSFORM
  btn.forEach((ele) => ele.classList.remove("moveBtnUp"));

  btnEvent.classList.add("moveBtnUp");

  // REMOVE HIDE CLASS FROM TABBED CONTAINERS
  divCont.forEach((ele) => ele.classList.remove("hide"));

  // ADD HIDE CLASS TO ALL TABBED CONTAINERS
  divCont.forEach((ele) => ele.classList.add("hide"));

  // ADD CLASS TO SPECIFIC TABBED CONTAINER
  document
    .querySelector(`.div${e.target.dataset.name}`)
    .classList.remove("hide");
});
