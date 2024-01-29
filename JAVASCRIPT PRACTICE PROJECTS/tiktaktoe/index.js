const turnBox = document.querySelectorAll("td");
const winnerStatus = document.querySelector("h1");
const gameStatus = document.querySelector("h2");
const resetButton = document.getElementById("reset");
const gameOver = "GAME OVER : Reset To Start Again";
const chanceFinish = "GAME DRAW : No More Chance Reset To Play Again";
const gameLog = [];
let turn;
let arrayEle = [];

const conditionToWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function resetGame() {
  turnBox.forEach((ele, idx) => {
    turnBox[idx].innerText = "";
  });
  turn = "";
  winnerStatus.innerText = "Winner : " + turn;
  gameStatus.innerText = "";
  arrayEle.splice(0, arrayEle.length);
}

resetButton.addEventListener("click", resetGame);

function returnTurn(e) {
  let checkarray;
  if (e.target.innerText === "" && turn === "O") {
    turn = "X";
    e.target.innerText = "X";
  } else if (turn === "X" && e.target.innerText === "") {
    turn = "O";
    e.target.innerText = "O";
  } else if (e.target.innerText === "" && turn === undefined) {
    turn = "X";
    e.target.innerText = "X";
  } else if (turn === "") {
    turn = "X";
    checkarray = turn;
    e.target.innerText = "X";
  }


const player =  function () {
  if (turn === "X") {
    return "Ranuj";
  } else if (turn === "O") {
    return "Raneesh";
  }
}
const playerName  = player();
console.log(player())
  const  eventObject = {
    playerName,
    inputValue : turn,
    elementName : e.target.tagName,
    eventTrigger : "Click",
  };

  gameLog.push(eventObject);
  console.log(gameLog);

  if (arrayEle.length < 9) {
    arrayEle.push(e.target.innerText);
  }

  winner(turn);
}

function winner(turn, player) {
  let winnerName;
  let winnerStatusUser;
  conditionToWin.forEach((ele) => {
    winnerStatusUser = ele.every((item) => turnBox[item].innerText === turn);

    if (arrayEle.length === 9 && winnerStatusUser === true) {
      winnerStatus.innerText = "Winner is : " + turn;
      gameStatus.innerText = gameOver;
      return;
    } else if (winnerStatusUser === true) {
      winnerStatus.innerText = "Winner is : " + turn;
      gameStatus.innerText = gameOver;
    } else if (arrayEle.length === 9 && winnerStatusUser === false) {
      gameStatus.innerText = chanceFinish;
    }
  });
}

function gameStart() {
  turnBox.forEach((ele, idx, array) => {
    turnBox[idx].addEventListener("click", returnTurn);
    if (idx % 2 === 0) turnBox[idx].classList.add("bgColor");
  });
}

gameStart();
