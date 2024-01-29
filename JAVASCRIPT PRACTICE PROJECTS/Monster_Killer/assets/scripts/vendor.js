const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
const bonusLifeEl = document.getElementById('bonus-life');

const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');


function adjustHealthBars(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
}

function dealMonsterDamage(damage) {
  const dealtDamage = Math.floor(Math.random() * damage); 
  monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
  return dealtDamage;
}

function dealPlayerDamage(damage) {
  const dealtDamage =  Math.floor(Math.random() * damage); 
  playerHealthBar.value = +playerHealthBar.value - dealtDamage;
  return dealtDamage;
}


function increasePlayerHealth() {
  currentPlayerHealth = parseInt(playerHealthBar.value) + healValue;
  playerHealthBar.value = currentPlayerHealth ;
}

function resetGame() {
  currentMonsterHealth = MAX_LIFE;  
  currentPlayerHealth = MAX_LIFE;
  playerHealthBar.value = currentPlayerHealth;
  monsterHealthBar.value = currentMonsterHealth;
}


function removeBonusLife() {
  bonusLifeEl.parentNode.removeChild(bonusLifeEl);
}

function setPlayerHealth(health) {
  playerHealthBar.value = health;
}

