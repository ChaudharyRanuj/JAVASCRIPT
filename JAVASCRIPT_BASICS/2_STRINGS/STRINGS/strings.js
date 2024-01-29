// --------------------------- ACCESSING STRING WITH INDEX VALUES -----------
// const airline = 'AirIndia'
// const plane = "A3e20neoe";
// console.log(plane[6]);
// console.log(plane[2]);
// console.log(plane[3]);
// console.log(plane[0]);
// console.log(plane[5]);

// ---------------------------- LENGTH PROPERTY OF STRING ---------------------
//1st way
// console.log('The length of the String is : ' + plane.length);
//2nd way
// console.log('The length of the String is : ' + 'A320neo'.length);

// ----------------------------- FIND INDEX OF CHARACTER IN STRING -----------------

// 1ST Finding the first instace with indexOf() method
// const planeManufacturer =  "This plane is manufactured by the German technology.";
// console.log(`The index of value 3 in string --> 'A320neo' is : ` + plane.indexOf('3'));
// console.log(`The index of manufacturer in string --> ${planeManufacturer} is :` + planeManufacturer.indexOf('German'));

// 2nd Finding the first instance with lastIndexOf()
// console.log(`The index of last value e in string -->${plane} is : ` + plane.lastIndexOf('e'));

// --------------------------- SLICE METHOD IN STRING ---------------------------------
// console.log(planeManufacturer.slice(5)) // all string after index 5
// console.log(planeManufacturer.slice(0, 11)) // return first eleven character of string
// console.log(planeManufacturer.slice(planeManufacturer.lastIndexOf(' '))) // return last word of sentence
// console.log(planeManufacturer.slice(-11, -1)) // return character from last index 11 and before last index 1

// --------------------------- STRING TO LOWER AND UPERCASE -----------------------------
// ( toLowerCase() & toUpperCase() )
// 1st WAY
// const firstName = 'ranuj';
// const secondName = 'choudhary';
// console.log(firstName[0].toUpperCase() + firstName.slice(1))
// console.log(secondName[0].toUpperCase() + secondName.slice(1))

// 2nd WAY
// REAL WORLD PROBLEM 1 : Converting first character of each word in sentence to upper case.

// ---------------------------- SPLIT & JOIN METHODS ----------------------------

// const name = "this is the string which each word first charactor is uppercase";
// const fullName = name.split(" ");
// console.log(fullName);
// const returnValue = [];
// for (const n of fullName) {
//   ṇ;
//   returnValue.push(n[0].toUpperCase() + n.slice(1));
// }
// console.log(returnValue.join(" "));

// string.split(separator, limit)

// Parameter Description

// separator Optional.
// A string or regular expression to use for splitting.
// If omitted, an array with the original string is returned.

// limit Optional.
// An integer that limits the number of splits.
// Items after the limit are excluded.

// REAL WORLD EXAMPLE 2: Comparing two emails
// const email = `hello@ranuj.com`
// const loginEmail = `  Hello@ranuj.com \n`
// console.log(email.toLowerCase() + ' ' + loginEmail.toLowerCase().trim());

// NOTE: trim method removes the extra space from start and end of string

//----------------------- REPLACE WORD OR CHARACTER IN A STRING ------------------------

// const string = 'Enter the gate no 2 to go sadar bazar but for chandni chowk gate no 5 will be good choice'
// 1st REPLACE ONLY FIRST INSTANCE
// const replaceGateToDoor = string.replace('gate', 'door') // replace first instance of word

// 2nd REPLACE ALL VALUE (**** USING REGULAR EXPRESSION ***)
// const replaceValueWithGlobal = string.replace(/gate/g, 'door') // replace first instance of word

// 3rd USING REPLACE ALL METHOD TO REPLACE ALL VALUE AT ONCE IN STRING

// const updateString = string.replaceAll('gate', 'door'); // replace all instace of word or charcter

// console.log(replaceGateToDoor);
// console.log(replaceValueWithGlobal);
// console.log(updateString);

// NOTE: Replace method is case sensitive

// --------------------------------------------- BOOLEANS -----------------------------
// includes(), startsWith(), endsWith()

// const university = 'UPES University Dehradun'
// console.log(university.includes('University'));
// console.log(university.startsWith('UPES'));
// console.log(university.endsWith('Dehradun'));

// ---------------------------- SPLIT & JOIN METHODS ----------------------------

// Description
// The split() method splits a string into an array of substrings.

// The split() method returns the new array.

// The split() method does not change the original string.

// If (" ") is used as separator, the string is split between words.

// Syntax
// string.split(separator, limit)
// 1st Way USING SPLIT AND JOIN METHOD ON STRING
// const nameString = "this is the string which each word first charactor is uppercase";
// const captiliseFirstChar = function (name) {
//     const splitWordArr = name.split(" ");
//     const returnValue = [];
//     for (const n of splitWordArr) {
//         returnValue.push(n[0].toUpperCase() + n.slice(1));
//     }
//     return console.log(returnValue.join(" "));
// }
// captiliseFirstChar(nameString);

// 2nd Way USING REPLACE METHOD STRING

// const captFirstChar = function (name) {
//     const splitWordArr = name.split(" ");
//     const returnValue = [];
//     for (const n of splitWordArr) {
//         returnValue.push(n.replace(n[0], n[0].toUpperCase()));
//     }
//     return console.log(returnValue.join(" "));
// }
// captFirstChar(nameString);

// ----------------------- PADDING THE STRING ------------------------
// padStart() & padEnd()

// Description
// The padStart() method pads a string from the start.
// The padStart() method pads a string with another string (multiple times) until it reaches a given length.

// SYNTAX
// string.padStart(length, string)

// const debitCardNumber = "4545887954784578";
// const dbtCrdLastDigit = debitCardNumber.slice(-4);
// console.log(dbtCrdLastDigit.padStart(debitCardNumber.length, "*"));
// console.log(
//   dbtCrdLastDigit.padStart(debitCardNumber.length, "*").padEnd(35, "*")
// );

// --------------------------------- REPEAT --------------------------------

// const stringName = 'ranuj '
// console.log(stringName.repeat(5))
// arr = ["flower", "flow", "flight"];
// var longestCommonPrefix = function (arr) {
//   let i = 1;
//   let prf = arr[0];
//   while (i < arr.length) {
//     if (!arr[i].startsWith(prf)) {
//       prf = prf.slice(0, -1);
//     } else {
//       i++;
//     }
//   }
//   return prf;
// };
// longestCommonPrefix(arr);
// console.log(arr[0].startsWith(arr[0]));

// Practice Problem
//     Q1. output string from an array with text and ... in between and in start end of output.
// output : ... -1C in 1 days...  17C in 2 days...  -2C in 3 days...  27C in 4 days...

// const tempInput = [-1,17,-2,27]
// function pringforcast (tempArr) {
// let str = ''
// for(i=0; i<tempArr.length; i++) {
//     str+=` ${tempArr[i]}C in ${i+1} days... `
// }
// return '...' + str;
// }
// console.log(pringforcast(tempInput));
