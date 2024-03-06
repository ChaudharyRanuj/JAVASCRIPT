const turnBox = document.querySelectorAll("td");
const winnerStatus = document.querySelector(".game-status");
const gameStatus = document.querySelector("h2");
const resetButton = document.getElementById("reset");
let gameTurnSquare = Array(9).fill("");
const gameLog = [];
let isXturn = true;

function startPlaying(e) {
  resetButton.removeEventListener("click", resetGame);
  // GET PLAYER TURN

  const currIndex = e.target.dataset.index;
  if (gameTurnSquare[currIndex]) {
    return;
  }
  if (findWinner(gameTurnSquare)) {
    return;
  }

  const currTurn = isXturn ? "X" : "O";
  isXturn = !isXturn;
  gameTurnSquare[currIndex] = currTurn;

  turnBox.forEach((ele, idx) => {
    turnBox[idx].innerText = gameTurnSquare[idx];
  });
  // e.target.innerText = currTurn;
  // GET WINNER
  const winner = findWinner(gameTurnSquare);

  // GAME STATUS
  console.log(gameTurnSquare.every((ele) => ele !== ""));
  if (winner) {
    gameStatus.innerText = `Winner is ${currTurn}. Reset Game to Play Again.`;
    isXturn = true;
  } else if (!winner && gameTurnSquare.every((ele) => ele !== "")) {
    isXturn = true;
    gameStatus.innerText = `Game Draw reset the game to play again.`;
  } else {
    gameStatus.innerText = `Player turn ${currTurn === "X" ? "O" : "X"}`;
  }

  function resetGame() {
    turnBox.forEach((ele, idx) => {
      turnBox[idx].innerText = "";
    });
    gameStatus.innerText = "";
    gameTurnSquare = Array(9).fill("");
  }

  resetButton.addEventListener("click", resetGame);
}
console.log(gameTurnSquare);
function findWinner(gameTurnSquare) {
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
  for (i = 0; i < gameTurnSquare.length - 1; i++) {
    const [x, y, z] = conditionToWin[i];

    if (
      gameTurnSquare[x] &&
      gameTurnSquare[x] === gameTurnSquare[y] &&
      gameTurnSquare[x] === gameTurnSquare[z]
    ) {
      return gameTurnSquare[x];
    }
  }
  return null;
}

function gameStart() {
  turnBox.forEach((ele, idx, array) => {
    turnBox[idx].addEventListener("click", startPlaying);
  });
}

gameStart();

// GAME LOG

// const player = function () {
//   if (currTurn === "X") {
//     return "Ranuj";
//   } else if (currTurn === "O") {
//     return "Raneesh";
//   }
// };

// const playerName = player();

// const eventObject = {
//   playerName,
//   inputValue: turn,
//   elementName: e.target.tagName,
//   eventTrigger: "Click",
// };

// gameLog.push(eventObject);
// console.log(gameLog);

// RESET GAME
