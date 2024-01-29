'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (user, sort = false) {
  containerMovements.innerHTML = '';
  const sorteValue = user.movements.slice().sort((a, b) => a - b);

  const movements = sort ? sorteValue : user.movements;

  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
  <div class="movements__value">${mov}€</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUsername = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word.slice(0, 1))
      .join('');
  });
};

createUsername(accounts);

const calcdisplaySummary = function (user) {
  const deposits = user.movements
    .filter(mov => mov > 0)
    .reduce((acc, curr, arr) => acc + curr);
  labelSumIn.innerText = deposits + '€';

  const withdrawal = user.movements
    .filter(mov => mov < 0)
    .reduce((acc, curr, arr) => (arr.length === 0 ? acc : acc + curr), 0);

  labelSumOut.innerText = Math.abs(withdrawal) + '€';

  const interest = user.movements
    .filter(mov => mov > 0)
    .map((amnt, idx, arr) => (amnt * 1.2) / 100)
    .filter((amnt, idx, arr) => amnt >= 1)
    .reduce((acc, amnt, idx, arr) => acc + amnt);

  labelSumInterest.textContent = interest.toFixed(2) + '€';
};

const displayBalance = function (user) {
  user.balance = user.movements.reduce((acc, curr) => acc + curr);
  labelBalance.textContent = user.balance + '€';
};

const updateUi = function (crrntAccnt) {
  // DISPLAY MOVEMENTS
  displayMovements(crrntAccnt);

  // DISPLAY MAIN BALANCE
  displayBalance(crrntAccnt);

  // DISPLAY SUMMARY
  calcdisplaySummary(crrntAccnt);
};

let currentAccount;

// LOGIN FUNCTIONALITY
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    user => user.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    inputLoginUsername.value = inputLoginPin.value = '';

    // WELCOME USER WITH NAME
    labelWelcome.innerText = 'Welcome, ' + currentAccount.owner.split(' ')[0];

    // DISPLAY APP CONTAINER
    containerApp.style.opacity = 1;

    // CLEAR INPUT FIELDS
    inputLoginPin.blur();

    updateUi(currentAccount);
  } else {
    labelWelcome.innerText = 'Sorry you cannot login, try again..';
  }
});

// TRANSFER MONEY
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('login suceess');

  const recieverAccount = accounts.find(
    user => user.username === inputTransferTo.value
  );

  if (
    recieverAccount.username === inputTransferTo.value &&
    inputTransferTo.value !== currentAccount.username &&
    currentAccount.balance >= inputTransferAmount.value &&
    inputTransferAmount.value > 0
  ) {
    recieverAccount.movements.push(Number(inputTransferAmount.value));
    currentAccount.movements.push(-Number(inputTransferAmount.value));
    updateUi(currentAccount);
  } else {
    console.log(inputTransferAmount.value);
  }

  // CLEAR FOUCUS FROM INPUT FIELDS
  inputLoginPin.blur();

  // CLEAR INPUT VALUE
  inputTransferTo.value = inputTransferAmount.value = '';
});
// REQUEST LOAN

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const reqLoanAmt = Number(inputLoanAmount.value);
  if (
    currentAccount.movements.find(
      value => value > reqLoanAmt * 0.1 && reqLoanAmt > 0
    )
  ) {
    currentAccount.movements.push(reqLoanAmt);
    updateUi(currentAccount);
  }

  // CLEAR FOUCUS FROM INPUT FIELDS
  inputLoanAmount.blur();

  // CLEAR INPUT VALUE
  inputLoanAmount.value = '';
});

// CLOSE BANK ACCOUNT
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(inputCloseUsername.value + ' ' + inputClosePin.value);

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    console.log('Account Deleted Successfully');
  }
  const deleteIndex = accounts.findIndex(
    ele => ele.username === inputCloseUsername.value
  );
  accounts.splice(deleteIndex, 1);

  // CLEAR FOCUS FROM INPUT FIELDS
  inputClosePin.blur();

  // CLEAR INPUT VALUE
  inputCloseUsername.value = inputClosePin.value = '';
});

let sort = false;
btnSort.addEventListener('click', function () {
  sort = !sort;
  displayMovements(currentAccount, sort);
});

// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// const matchObj = []
// for (const obj of accounts)  {
// if(obj.owner === 'Jessica Davis') {
//   matchObj.push(obj)
// }
// }
// console.log(matchObj);

// const allDeposite = accounts
//   .flatMap(value => value.movements)

// const allDepositeInBank = accounts
//   .flatMap(value => value.movements)
//   .reduce((acc,curr) => curr > 1000 ? ++acc : acc ,0);

//   console.log(allDepositeInBank);

// console.log(allDeposite);




