// PLAYER VARIABLES
const PLAYER_NORMAL_STRIKE = 10 ;
const NORMAL_STRIKE = 'NORMAL_STRIKE'; 

const PLAYER_STRONG_STRIKE = 20;
const STRONG_STRIKE = 'STRONG_STRIKE'; 

// MONSTER VARIABLES
const MONSTER_STRIKE = 12;

// GENERAL VARIABLE
const MAX_LIFE = 100;
let currentHealth = MAX_LIFE;
let currentMonsterHealth = currentHealth;
let currentPlayerHealth = currentHealth;


const healValue = Math.floor(Math.random() * (currentPlayerHealth * 0.50));

function normalStrike() {
	strikeType(NORMAL_STRIKE);
}
	
function strongStrike() {
	strikeType(STRONG_STRIKE);
}

function strikeType(mode) {
	if (mode === NORMAL_STRIKE) {
	currentMonsterHealth -= dealMonsterDamage(PLAYER_NORMAL_STRIKE);
	} else if (mode === STRONG_STRIKE) {
	currentMonsterHealth -= dealMonsterDamage(PLAYER_STRONG_STRIKE);
	}
	currentPlayerHealth -= dealPlayerDamage(MONSTER_STRIKE);

	// revive the palyer when going to die
	/* if (currentPlayerHealth <= 0) {
    alert('Use your bonus to revive your health');
	currentPlayerHealth = currentPlayerHealth + healValue;
	setPlayerHealth(currentPlayerHealth);
	removeBonusLife();
	} */

	if (currentMonsterHealth <= 0 && currentPlayerHealth > 0 ) {
		alert('you won');
		resetGame();
	} else if (currentMonsterHealth > 0 && currentPlayerHealth <= 0 ) {
		alert('you lost');
		resetGame();
	} else if (currentMonsterHealth <=  0 && currentPlayerHealth <= 0) {
		alert('Match Draw');
		resetGame();
	}

	}

attackBtn.addEventListener('click', normalStrike);
strongAttackBtn.addEventListener('click', strongStrike);
healBtn.addEventListener('click', increasePlayerHealth);
logBtn.addEventListener('click', writeToLog);
