// USING NEW DATE

const presentDate = new Date();
const futureDate = new Date();
// const year = presentDate.getFullYear()
// const month = presentDate.getMonth()
// const date = presentDate.getDate()
// const hour = presentDate.getHours()
// const minutes = presentDate.getMinutes()
// const seconds = presentDate.getSeconds()
// const milliseconds = presentDate.getMilliseconds()
const milliseconds = presentDate.getMilliseconds();
const time = presentDate.getTime();
const after3Days = time + 3 * 1000 * 60 * 60 * 24;
// console.log(year);
// console.log(month);
// console.log(date);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(milliseconds);
console.log(time);
console.log(new Date(after3Days));

// GETTING THE CURRENT TIME STAMP
const currentTimeStamp = Date.now();
console.log(currentTimeStamp);

// Date difference

// const ranujBirthdate = new Date(1991,5,1);
// const raneeshBirthdate = new Date(1994,2,2);
// const noOfDays = Math.round(Math.abs(ranujBirthdate - raneeshBirthdate)/(1000 * 60 * 60 * 24 * 365))

// console.log(noOfDays);

// Internationalisation of Date & Time

const date = new Date();
const dateIsoStad = date.toISOString();
const options = {
  day: "numeric",
  month: "short",
  year: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  weekday: "long",
};

const intDate = new Intl.DateTimeFormat("en-US", options).format(date);

console.log(date);
// console.log(dateIsoStad);
console.log(intDate);


const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  
    movementsDates: [
      '2023-07-22T13:15:33.035Z',
      '2023-07-22T09:48:16.867Z',
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


const dateFirst = new Date(account2.movementsDates[0]);
const todayDate = new Date()

const noofDays = Math.round(Math.abs((todayDate - dateFirst)/(1000*60*60*24)))

const acutalTrasDate = new Intl.DateTimeFormat("en-US", options).format(dateFirst);
const acutal = new Intl.DateTimeFormat("en-US", options).format(todayDate);

if(noofDays <= 0) console.log('Today')
else if(noofDays === 1) console.log('Yesterday')
else if(noofDays < 6)console.log(`${noofDays} days ago`)
else console.log(`${intDate}`)


