'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2023-04-24T21:31:17.178Z',
    '2023-04-23T07:42:02.383Z',
    '2023-04-18T09:15:04.904Z',
    '2023-05-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2023-07-21T17:01:17.194Z',
    '2023-07-23T23:36:17.929Z',
    '2023-07-25T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////

// Functions

// DATE OF TRANSACTION
const dateOfTrans = function (trasDate, locale) {
  
  const presDate = new Date()
  const noofDays = Math.round(Math.abs((presDate - trasDate)/(1000*60*60*24)))
  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    day: 'numeric',
   };
  const acutalTrasDate = new Intl.DateTimeFormat(locale, options).format(
    trasDate
  );

  let dateOfTrans;
  if (noofDays <= 0) dateOfTrans = 'Today';
  else if (noofDays === 1) dateOfTrans = 'Yesterday';
  else if (noofDays < 6) dateOfTrans = `${noofDays} days ago`;
  else dateOfTrans = acutalTrasDate;

  return dateOfTrans;
};

// PRESENT DATE 
const dateNow = function () {
 const date = new Date();
return date.toISOString();
}

// CURRENCY FORMAT
const formatCurr = function (value, locale, currency) {

  const curr = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value)

  return curr;
}
console.log(formatCurr(account2.movements[0], account2.locale, account2.currency));


// DIPLAY MOVEMENT IN INTERFACE
const displayMovements = function (user, sort = false) {
  containerMovements.innerHTML = '';
  const sorteValue = user.movements.slice().sort((a, b) => a - b);
  const movements = sort ? sorteValue : user.movements;

  // INSERT DATE
  movements.forEach((mov, i) => {

    //  2ND Method USING INTERNATIONAL API

    const trasDate = new Date(user.movementsDates[i]);

    const date = dateOfTrans(trasDate, user.locale);


    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
  <div class="movements__date">${date}</div>
  <div class="movements__value">${formatCurr(Math.abs(mov),user.locale, user.currency)}</div>
  
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// CREATE LOGIN USERNAME
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
  // Output deposit amount
  const deposits = user.movements
    .filter(mov => mov > 0)
    .reduce((acc, curr, arr) => acc + curr);
  labelSumIn.innerText =  formatCurr(deposits,user.locale, user.currency);

  // Output withdrawal Amount
  const withdrawal = user.movements
    .filter(mov => mov < 0)
    .reduce((acc, curr, arr) => (arr.length === 0 ? acc : acc + curr), 0);

  labelSumOut.innerText = formatCurr(Math.abs(withdrawal), user.locale, user.currency) ;

  // Output interest Amount
  const interest = user.movements
    .filter(mov => mov > 0)
    .map((amnt, idx, arr) => (amnt * 1.2) / 100)
    .filter((amnt, idx, arr) => amnt >= 1)
    .reduce((acc, amnt, idx, arr) => acc + amnt);

  labelSumInterest.textContent = formatCurr(interest, user.locale, user.currency);
};

// Output balance Amount
const displayBalance = function (user) {
  user.balance = user.movements.reduce((acc, curr) => acc + curr);
  labelBalance.textContent = formatCurr(user.balance, user.locale, user.currency);
};

//  UPDATE UI
const updateUi = function (crrntAccnt) {
  // DISPLAY MOVEMENTS
  displayMovements(crrntAccnt);

  // DISPLAY MAIN BALANCE
  displayBalance(crrntAccnt);

  // DISPLAY SUMMARY
  calcdisplaySummary(crrntAccnt);
};


// LOGOUT FUNCTIONALITY
function logOutCounter() {
  const tick = function () {
    const minutes = String(Math.trunc(logOutSec / 60)).padStart(2, 0);
    const seconds = String(logOutSec % 60).padStart(2, 0);

    // In each call print remaining time
    labelTimer.innerText = `${minutes} : ${seconds}`;

    // when logOutSec = 0 stop timer and log out the user with message
    if (logOutSec === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      labelWelcome.innerText =
        'Your Account Logout due to inactive session, login again..';
    }
    // decrease time by 1s
    logOutSec--;
  };

  let logOutSec = 300;
  tick();
  // Set time to 5 minutes
  const timer = setInterval(tick, 1000);
  return timer;
}


///////////////////////////////////////
// Event handlers
let currentAccount, timer;
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

    // LOGOUT COUNTER
    if (timer) clearInterval(timer);
    timer = logOutCounter();

    // USER PRESENT DATE
   
    setInterval(() => {
      const date = new Date()
      const options = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        day: 'numeric',
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        weekday: "long",
      };
     const presDay = new Intl.DateTimeFormat(currentAccount.locale, options).format(date)
      labelDate.innerText = presDay
      
    }, 1000);
    //UPDATE UI
    const date = new Date()
    updateUi(currentAccount, date);

    //  if(timer) clearInterval(timer);
  } else {
    labelWelcome.innerText = 'Sorry you cannot login, try again..';
  }
});

// TRANSFER MONEY
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const recieverAccount = accounts.find(
    user => user.username === inputTransferTo.value
  );

  if (
    recieverAccount.username === inputTransferTo.value &&
    inputTransferTo.value !== currentAccount.username &&
    currentAccount.balance >= inputTransferAmount.value &&
    inputTransferAmount.value > 0
  ) {
    // Doing the transfer
    recieverAccount.movements.push(Number(inputTransferAmount.value));
    currentAccount.movements.push(-Number(inputTransferAmount.value));

      // Insert the date of transfer
      recieverAccount.movementsDates.push(dateNow());
      currentAccount.movementsDates.push(dateNow());
      
    // Update the UI
    updateUi(currentAccount);

    // Reset the logout timer
    clearInterval(timer);
    timer = logOutCounter();
  } else {
    console.log(inputTransferAmount.value);
  }

  // CLEAR FOCUS FROM INPUT FIELDS
  inputLoginPin.blur();

  // CLEAR INPUT VALUE
  inputTransferTo.value = inputTransferAmount.value = '';

  
  console.log(currentAccount);
  console.log(recieverAccount);

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
    // Add movement
    currentAccount.movements.push(reqLoanAmt);

    // Insert the date of transfer
    currentAccount.movementsDates.push(dateNow());

    // Update UI
    updateUi(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = logOutCounter();
  }

  // CLEAR FOCUS FROM INPUT FIELDS
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

// TEMPORARY LOGIN
// DISPLAY APP CONTAINER
// containerApp.style.opacity = 1;
// CLEAR INPUT FIELDS
//UPDATE UI
// updateUi(account1);

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
