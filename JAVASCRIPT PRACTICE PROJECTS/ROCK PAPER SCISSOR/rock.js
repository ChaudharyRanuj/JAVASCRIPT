let winnerStatus = document.getElementById("winnerStatus");
const ROCK = "ROCK";
const SCISSOR = "SCISSOR";
const PAPER = "PAPER";
let gameStatusValue = false;

const computerChance = () => {
  const cChance = Math.random();
  if (cChance < 0.2) {
      return ROCK;
    } else if (cChance < 0.3) {
      return SCISSOR;
    } else {
      return PAPER;
    }
};

const playerChance = () => {
  const pChance = prompt(`${ROCK}, ${PAPER} or ${SCISSOR}?`, "").toUpperCase();
  if (pChance === ROCK || pChance === SCISSOR || pChance === PAPER) {
    return pChance;
  } else {
    const pRandomChance = Math.random();
    if (pRandomChance < 0.2) {
      alert(`You have provided invalid input,random value ${ROCK} assigned`);
      return ROCK;
    } else if (pRandomChance < 0.3) {
      alert(`You have provided invalid input,random value ${SCISSOR} assigned`);
      return SCISSOR;
    } else {
      alert(`You have provided invalid input,random value ${PAPER} assigned`);
      return PAPER;
    }
  }
  };

const winner = (PLAYER_CHANCE, COMPUTER_CHANCE) => {
  if (
    (PLAYER_CHANCE === PAPER && COMPUTER_CHANCE === ROCK) ||
    (PLAYER_CHANCE === ROCK && COMPUTER_CHANCE === SCISSOR) 
  ) {
    winnerStatus.innerHTML  = "You Won";
  } else if (PLAYER_CHANCE === SCISSOR && COMPUTER_CHANCE === PAPER) {
    winnerStatus.innerHTML  = "You Won";
  } else if (PLAYER_CHANCE === COMPUTER_CHANCE) {
    winnerStatus.innerHTML = "Draw";
  } else {
    winnerStatus.innerHTML  = "You Lost";
  }
}

function startGame() {
  const gameRunStatus = "Game is now running...";
  console.log("Game is now running...");
  document.getElementById("gameStatus").innerHTML = gameRunStatus;
  let pChance = playerChance();
  document.getElementById("playerChance").innerHTML = pChance;
   let cChance = computerChance();
  document.getElementById("computerChance").innerHTML = pChance;
  winner(pChance, cChance);
  document.getElementById("gameStatus").innerHTML = "Game Over. Star to Play Again.";
  gameStatusValue = true;
  if (gameStatusValue) {
    document.querySelector('#gameStatus').style.backgroundColor = 'blue';
    document.querySelector('#gameStatus').style.color = 'white';
    document.querySelector('#gameStatus').previousElementSibling.style.backgroundColor = 'green' ;
    document.querySelector('#gameStatus').previousElementSibling.style.color = 'white' ; 
    document.body.children[1].style.backgroundColor = 'white';
  }
}
document.querySelector('#gameStatus').style.color = 'green';
document.getElementById("runGame").addEventListener("click", startGame);
