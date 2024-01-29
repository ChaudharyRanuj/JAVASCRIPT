

// const massMark = 78
// const heightMark =  1.69
// const massJohn = 92
// const heightJohn = 1.95

// const BMIMark = massMark/(heightMark * heightMark);
// const BMIJohn= massJohn/(heightJohn * heightJohn);

// const markHigherBMI = BMIJohn > BMIMark ; //ternary operator
// console.log(BMIJohn, BMIMark, markHigherBMI); // ✔

// LOGICAL OPERATOR ASSIGNMENT

// Coding Challenge #3

/* There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy! */

// DATA 1
// const scoreDolphins = (96 + 108 + 89)/3
// const scoreKoalas = (88 + 91 + 110)/3
// if ( scoreDolphins > scoreKoalas ) {
//     console.log("Dolphins win the trophy")
// } else if ( scoreDolphins < scoreKoalas){
//     console.log("Koalas win the trophy")
// } else if (scoreKoalas === scoreDolphins) {
//     console.log("Both win the trophy")
// }

// DATA BONUS 1
// const scoreDolphins = (97+112+101)/3
// const scoreKoalas = (109+95+123)/3
// if ( scoreDolphins >= 100 && scoreDolphins > scoreKoalas && scoreKoalas >= 100 && scoreDolphins > scoreKoalas ) {
//     console.log("Dolphins win the trophy")
// } else if ( scoreDolphins >= 100 && scoreDolphins < scoreKoalas && scoreKoalas >= 100 && scoreDolphins < scoreKoalas ){
//     console.log("Koalas win the trophy")
// } else if ( scoreDolphins >= 100 && scoreDolphins === scoreKoalas && scoreKoalas >= 100 && scoreDolphins === scoreKoalas ) {
//     console.log("Game is Draw!")
// }

// DATA BONUS 2
// const scoreDolphins = (90)/3
// const scoreKoalas = (90)/3
// if ( scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win the trophy 🏆")
// } else if ( scoreKoalas >= 100 && scoreDolphins < scoreKoalas ){
//     console.log("Koalas win the trophy 🏆")
// } else if ( scoreDolphins >= 100 && scoreDolphins === scoreKoalas && scoreKoalas >= 100 ) {
//     console.log("Game is Draw!, And Both Win The trophy 🏆")
// } else {
//   console.log('No one wins the trophy 😭');
// }

// CHALLENGE #4
/* 
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. 
In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the 
value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this.
 It's not allowed to use an if...else statement (if it's easier for you, you can start
  with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value
 (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code
 them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430
 */

const bill = 40;
// let tip = 50 > bill || bill > 300 ? bill * 0.2 : bill * 0.15;
let tip = 50 <= bill && bill<= 300 ? bill * 0.15 : bill * 0.20;
console.log(
  `The bill was $${bill}, the tip was $${tip}, and the total value $${bill + tip}`
); 


function nameFunction() {
 return console.log('this is coming from the function');
}

nameFunction();
 