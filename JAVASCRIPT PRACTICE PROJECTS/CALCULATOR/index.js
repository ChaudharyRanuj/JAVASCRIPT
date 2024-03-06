// SELECTORS

const output = document.querySelector(".output");
const numberBtn = document.querySelectorAll(".button-container .btn");
const resetBtn = document.querySelector(".reset-btn");
const operationBtn = document.querySelectorAll(
  ".operation-btn-container button"
);
const equal = document.querySelector(".equal");
const calResult = document.querySelector(".result");

// GLOBALS

let input = "";
let result = "";
output.style.backgroundColor = "green";

// EVENT HANDLERS

operationBtn.forEach((ele) =>
  ele.addEventListener("click", function (e) {
    // CLEAR PREVIOUS INPUT
    output.innerText = "";
    const inputVal = e.target.dataset.index;
    // CONCAT ALL INPUT NUMBERS
    input = input + `${inputVal.trim()}`;

    // check if double methamatical operator used show invalid input message
    const lastEleOfInput = input[input.length - 2];
    output.value = input;

    if (
      lastEleOfInput === "*" ||
      lastEleOfInput === "-" ||
      lastEleOfInput === "+" ||
      lastEleOfInput === "/"
    ) {
      output.value = "Not valid input";

      setTimeout(() => {
        output.value = input.slice(0, input.length - 1);
        input = input.slice(0, input.length - 1);
      }, 1000);
    }

    // SHOW CONCATED STRING ON SCREEN
  })
);

numberBtn.forEach((ele) =>
  ele.addEventListener("click", function (e) {
    // CLEAR PREVIOUS INPUT
    output.innerText = "";

    const inputVal = e.target.dataset.index;
    // CONCAT NUMBERS WITH MATHEMATICS OPERATIONS
    input = input + `${inputVal.trim()}`;
    // SHOW CONCATED STRING ON SCREEN

    // check input if any last element is operator
    const lastEleOfInput = input[input.length - 1];

    if (
      lastEleOfInput === "*" ||
      lastEleOfInput === "-" ||
      lastEleOfInput === "+" ||
      lastEleOfInput === "/"
    ) {
      output.value = "Not valid input";
      input = input.slice(0, input.length - 1);
    }
   
    calResult.innerText = `= ${eval(input).toFixed(2)}`;

    output.value = input;
  })
);

resetBtn.addEventListener("click", function () {
  output.value = "reseting...";

  setTimeout(() => {
    calResult.innerText = "";
    output.value = "Reset complete 👍";
    setTimeout(() => {
      output.value = "";
      input = "";
   
    }, 700);
  }, 500);
});

equal.addEventListener("click", function () {
  calResult.innerHTML = ''
  output.value = "calculating...";
  // check if valid input
  if (input.length < 3) {
    output.value = "not valid input";

    setTimeout(() => {
      output.value = "Try next calculation.";
      setTimeout(() => {
        output.value = "";
        input = "";
      }, 200);
    }, 100);
    return;
  }

  // check input if any last element is operator
  const lastEleOfInput = input[input.length - 1];

  if (
    lastEleOfInput === "*" ||
    lastEleOfInput === "-" ||
    lastEleOfInput === "+" ||
    lastEleOfInput === "/"
  ) {
    output.value = "Not valid input";
    input = input.slice(0, input.length - 1);
  }

  setTimeout(() => {
    output.value = `${eval(input).toFixed(2)}`;
  }, 300);
});
