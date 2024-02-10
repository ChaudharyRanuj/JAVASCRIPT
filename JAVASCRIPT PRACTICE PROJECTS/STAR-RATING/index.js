const rating = document.getElementById("rating");
const output = document.querySelector(".output-value");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const alert = document.querySelector(".alert");
input.value = 0;

let STAR_RATING = 0;

function createStars(noOfStars) {
  for (let i = 0; i < noOfStars; i++) {
    const starEle = document.createElement("div");
    starEle.classList.add("star");
    starEle.dataset.indexNumber = i + 1;
    rating.appendChild(starEle);
  }
  const star = Array.from(document.querySelectorAll(".star"));
  return star;
}

function printStars(noOfStars) {
  rating.innerHTML = "";

  const stars = createStars(noOfStars);

  // ADD EVENTS

  // MOUSEOVER

  stars.forEach((ele) =>
    ele.addEventListener("mouseover", (e) => {
      addColorOnMouseOver(e.target.dataset.indexNumber);
    })
  );

  function addColorOnMouseOver(index) {
    stars.forEach((ele) => {
      if (ele.dataset.indexNumber < index + 1) {
        ele.classList.add("star-fill");
      } else {
        ele.classList.remove("star-fill");
      }
    });
  }
  // MOUSELEAVE EVENT

  stars.forEach((ele) => ele.addEventListener("mouseleave", addRatingofStar));

  function addRatingofStar() {
    stars.forEach((ele) => ele.classList.remove("star-fill"));
    addColorOnMouseOver(STAR_RATING);
  }

  // MOUSELEAVE EVENT
  stars.forEach((ele) =>
    ele.addEventListener("click", (e) => {
      STAR_RATING = parseInt(e.target.dataset.indexNumber);
    })
  );
}

function startApplication(input) {
  rating.innerHTML = "";

  //
  input.addEventListener("input", (e) => {
    const stars = document.querySelectorAll(".star");
    console.log(stars);
    // print stars on screen on each input event
    const value = parseInt(e.target.value);
    printStars(value);
  });
}
startApplication(input);
