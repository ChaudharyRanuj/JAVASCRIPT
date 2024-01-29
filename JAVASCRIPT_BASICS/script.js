// const object = {
//   name: "raneesh",
//   lastName: "choudhary",
//   purchaseDetails: {
//     courseName: "Javascript",
//     Amount: 450,
//     returnEmail: function () {
//       const name = 5
//      },

//   },
//   courseDetails: function () {
//     return this;
//   }
// };
// console.log(object.purchaseDetails.returnEmail());
// console.log(object.courseDetails());

// let newValue = 'new value'
// function checkThisKeyword() {
//     // console.log(this)
//  function insideFucntion () {
//     return console.log(this.newValue)

//     }
// }

// checkThisKeyword()
// console.log(newValue())

// const roomThermRead = [-5, -4, -3, -2, -1, "error", 2, 4, 7, 8, 12, 14];

// function tempAplitudeValue(arrOfTemp) {
//   const filteredTemp = arrOfTemp
//     .filter((value) => typeof value === "number")
//     .reduce(
//       (pValue, cValue, idx, arr) => (cValue > pValue ? cValue : pValue),
//       0
//     );
//   return (
//     Math.max(...filteredTemp) -
//     Math.min(...filteredTemp) +
//     " Degree Celsius"
//   );
// }
// console.log(
//   roomThermRead
//     .filter((value) => typeof value === "number")
//     .reduce(
//       (pValue, cValue, idx, arr) => (cValue < pValue ? cValue : pValue),
//       0
//     )
// );

// console.log(Math.max(...roomThermRead));

// test date 1: [17, 21, 23]
// test date 1: [12, 5, -5, 0, 4]

// understanding the problem
// what is the input value?
// arrays of temperature by day
// what value is shown by the thermometer?
// array transformed to string value of future forecast of weather

// Breaking in subproblems
// transform array into string =>
// tranform each element to string =>
// string contains days with index+1 =>
// Add ... between each element and start and end of string =>

// const tempInput = [-1,17,-2,27]
// function pringforcast (tempArr) {
// let str = ''
// for(i=0; i<tempArr.length; i++) {
//     str+=` ${tempArr[i]}C in ${i+1} days... `
// }
// return '...' + str;
// }
// console.log(pringforcast(tempInput));

// const fullName = function (firstName, secondName) {
//   return (
//     firstName.slice(0, 1).toUpperCase() +
//     firstName.toLowerCase().slice(1) +
//     " " +
//     secondName.slice(0, 1).toUpperCase() +
//     secondName.toLowerCase().slice(1)
//   );
// };

// const greetWithMessage = function (
//   firstName,
//   lastName,
//   greetMessage,
//   fullName
// ) {
//   return console.log(greetMessage + " " + fullName(firstName, lastName));
// };
// const greeetMessage = 'Hello we are thankfull that you come to our special ocassion';

// const airIndia = {
//   flightCompany: "AIRINDIA",
//   flightCode: "ARIND",
//   bookings: [],
//   book(name, flightNum) {
//     console.log(
//       `The flight is booked by ${name} with booking number : ${this.flightCode}${flightNum}`
//     )
//     const bookingDetails = {BookingPersonName: name, Flight: this.flightCompany, FlightBookingNo: this.flightCode + flightNum}
//     this.bookings.push(bookingDetails);
//   },
// };

// const booking = airIndia.book;

// const airAsia = {
//   flightCompany: "AIRINDIA",
//   flightCode: "ARIND",
//   bookings: [],
// };
// booking.call(airAsia, 'Ranuj Chaudhary', '454080')
// booking.call(airAsia, 'Raneesh Chaudhary', '454081')
// console.log(airAsia);

// const calculatePercentage = function (percentage) {
// return function (value) {
//     return value + value*percentage;
// }
// }

// const valueOutput = calculatePercentage(0.23)
// console.dir(valueOutput);
// console.log(valueOutput(100))
// console.log(valueOutput(200))
// console.log(valueOutput(300))

// const bookSeat = function (noOfPerson, tabelType) {
//   const noOfTableBooked = noOfPerson / 8;
//   setTimeout(function showMyBookings() {
//     console.log(
//       `You have booked ${noOfTableBooked} of ${tabelType} tables in our restaurant succesfully.`
//     );
//   }, 3000);
// };
// const noOfTableBooked = 80;
// bookSeat(64, 'Luxury');

// // using new date

// const presentDate = new Date()
// const year = presentDate.getFullYear()
// const month = presentDate.getMonth()
// const date = presentDate.getDate()
// const hour = presentDate.getHours()
// const minutes = presentDate.getMinutes()
// const seconds = presentDate.getSeconds()
// const milliseconds = presentDate.getMilliseconds()

// console.log(year);
// console.log(month);
// console.log(date);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(milliseconds);

// // Date difference

// const ranujBirthdate = new Date(1991,5,1);
// const raneeshBirthdate = new Date(1994,2,2);
// const noOfDays = Math.round(Math.abs(ranujBirthdate - raneeshBirthdate)/(1000 * 60 * 60 * 24 * 365))

// console.log(noOfDays);

// const image = document.querySelector(".image");
// const image_status = document.querySelector(".image-status");
// const image_container = document.querySelector(".image_container");
/////////////////////////////////////

// let i = 0;
// const loadImage = function (seconds, oldRes) {
//   i++;
//   if (oldRes) setTimeout(() => oldRes.classList.add("hide"), 1000);
//   return new Promise(function (resolve, reject) {
//     const loadImageTimer = setTimeout(function () {
//       if (i <= 4) {
//         const imageEle = document.createElement("img");
//         imageEle.src = `image-${i}.jpg`;
//         image_container.append(imageEle);

//         resolve(imageEle);
//       } else {
//         reject(new Error(`Image url not found`));
//         clearTimeout(loadImageTimer);
//       }
//     }, seconds * 1000);
//   });
// };

// loadImage(0)
//   .then((res) => {
//     return loadImage(2, res);
//   })
//   .then((res) => {
//     return loadImage(2, res);
//   })
//   .then((res) => {
//     return loadImage(2, res);
//   })
//   .then((res) => {
//     return loadImage(2, res);
//   })
//   .then((res) => {
//     return loadImage(2, res);
//   })
//   .catch((err) => console.log(err));

// USING ASYNC AND AWAIT

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const getGeoLoc = async function () {

// try {
//     const response = await getPosition();
//   if (!response)
//     throw new Error(
//       "Not able to fetch your location, allow location access to take benefits"
//     );
// //   const { latitude: lat, longitude: long } = response.coords;
//   console.log(response.coords);
//   console.log(response.coords.latitude);
//   console.log(lat, long);
// } catch (error) {
//     console.log(error);
// }

// };

// getGeoLoc();

// USING OBJECT
// const charStr = "This is the string two".replaceAll(' ', '');
// const obj = {}
// let max = 0

// let counter = 1;
// for (let i = 0; i < charStr.length; i++) {

// if (obj[charStr[i]]) {
//     obj[charStr[i]] = obj[charStr[i]] + 1;
// } else {
//     obj[charStr[i]] = counter;
// }
// max = obj[charStr[i]] > max ? obj[charStr[i]] : max;

// }
// const arr = Object.entries(obj)
// const found = arr.filter((element) => element[1] === max)
// console.log(found);

// USING ARRAY
// const char = "this is the string";
// const arr = [];
// for (let i = 0; i < char.length; i++) {
//   let counter = 0;
//   for (let j = 0; j < char.length; j++) {
//     if (char[i] === char[j]) {
//       counter++;
//     }
//   }
//   arr.push(counter);
// }

// console.log(Math.max(...arr));

// FIDING THE VOWELS IN THE STRING

// const charStr = "The quick brown fox jumps over the lazy dog"
//   .replaceAll(" ", "")
//   .toLowerCase();
// const obj = {};
// const arr = ['a','e', 'i', 'o','u']

// console.log(obj[charStr[1]]);

// for (let i = 0; i < charStr.length; i++) {
//   if (arr.includes(charStr[i]) ) {
//    obj[charStr[i]] = obj[charStr[i]] > 0 ?  obj[charStr[i]] + 1 : 1;
//   }
// }

// console.log(obj);

// LINEAR SEARCH BY RECURSION
// const arr = [7,8,9,6,5,4,3,2,1]

// let i = 0
// function findValueIndex(value, arr) {
// if (i > arr.length) return -1;
// if (value === arr[0]) return console.log(i);;
// i++;
// findValueIndex(value, arr.splice(1))
// }

// findValueIndex(10, arr);

// SEARCHING ARRAY WITH BINARY SEARCH
// const arr = [7, 8, 9, 6, 5, 4, 3, 2, 1];

// function findValueIndex(value, arr) {
//   let j = Math.floor(arr.length / 2);

//   for (let i = 0; i <= j; i++) {

//     if (arr[j + i] === value) {
//       return console.log('Left to Right');
//     }
//     if (arr[j - i] === value) {
//         return console.log('Right to Left');
//     }
//    }

//    return console.log(-1);;
// }
// findValueIndex(18, arr);
// const contacts = [
// {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
// },
// {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
// },
// {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
// },
// {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
// },
// ];

// function lookUpProfile(name, prop) {
// // Only change code below this line
// let contact = false;
// let property = false;

// for (let i = 0; i < contacts.length; i++) {
// if(contacts[i].firstName === name && contacts[i][prop] !== undefined) {
// return contacts[i][prop];
// }
// if (contacts[i].firstName === name) {
// contact = true;
// }

// }
// if (contact === false) {
//     return "No such contacts";
// }
// return "No such property"

// // Only change code above this line
// }
// console.log(lookUpProfile("ranuj", "address"));
// const request = new XMLHttpRequest()
// request.open('GET', 'https://bible-api.com/john 3:16')
// request.send();
// request.addEventListener('load', function () {
// console.log(this.responseText);

//     const [bookDetails] = book.verses
//     console.log(bookDetails.book_name)
// })
