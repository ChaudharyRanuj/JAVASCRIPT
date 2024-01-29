// JavaScript in the Browser: DOM and Events
// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
// GOOD LUCK 😀

// Data Structures, Modern Operators and Strings

// Coding Challenge #1
// We're building a football betting app (soccer for my Indian friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored
// GOOD LUCK 😀

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: [
//     "Lewandowski",
//     "Gnarby",
//     "Lewandowski",
//     "Hummels",
//     "Lewandowski",
//     "Lewandowski",
//     "Hummels",
//     "Hummels",
//   ],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
//1.
// const [players1, players2] = game.players;
//2.
// const [team1gk, ...fieldPlayers] = players1;
// const [team2gk, ...fieldPlayers2] = players2;
//3.
// const allPlayers = [...players1, ...players2];
//4.
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
//5.
// const {
// odds: { team1, x: draw, team2 },
// } = game;
//6.
/* function printGoals(...nPlayers) {
  const totalPlayers = nPlayers;
  const playerWhoScoreGoals = game.scored;
  console.log(
    `Total Player of Both Teams: ${totalPlayers} , Total No of Goals Scored By Both Team: ${game.scored.length}, Name of Player Scored the Goals: ${playerWhoScoreGoals} `
  );
}
printGoals(...allPlayers); */
//7.
// team1<team2 && console.log('Team1 is likely to win the game..')
// team2<team1 && console.log('Team1 is likely to win the game..')

// console.log(players1);
// console.log(players2);
// console.log(allPlayers);
// console.log(team1gk);
// console.log(team2gk);
// console.log(fieldPlayersIn);
// console.log(fieldPlayers);
// console.log(players1Final);
// console.log(game);

// Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names 😉
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }

//1.
// for (const[idx, el] of game.scored.entries()) {
//   console.log(`Goal: ${idx+1}, PlayerName: ${el} `)
// }

//2.
// const keyValues = Object.values(game.odds)
// console.log(keyValues);
// let average = 0
// for (const odd of keyValues) {
// average = average + odd/keyValues.length
// }
// console.log(average)

//3.

// const values = Object.entries(game.odds);
// // console.log(values);
// for (const [team, odd] of values) {
//   const str = team === "x" ? "Draw" : `victory ${game[team]}`;
//   console.log(`Odd of ${str} : ${odd}`);
// }

// 4. Bonus:

// const scorers = {}
// const scorersWithSet = new Set()
// for (i=0; i< game.scored.length ; i++) {
// let k=0
//   for (j=0; j< game.scored.length ; j++) {
//     if(game.scored[i] === game.scored[j]) {
//       k++
//     }
//   }
// scorers[game.scored[i]] = k
// scorersWithSet.add(game.scored[i] + ' : ' + k)
// }

// console.log(scorers)
// console.log(scorersWithSet)

// Coding Challenge #3
// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17:
// ⚽
// GOAL
// GOOD LUCK 😀

// const gameEvents = new Map([
//   [17, "⚽ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🟨 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽ GOAL"],
//   [80, "⚽ GOAL"],
//   [92, "🟨 Yellow card"],
// ]);
// 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// 2.
// gameEvents.delete(64);
// console.log(gameEvents);

// 3.
// console.log(gameEvents.keys());
// const timeAverage = [...gameEvents.keys()].pop()
// console.log(`An event happened, on average, every ${timeAverage/gameEvents.size} minutes`)

// 4.
// const logEventTime = [...];
// for (const[min,event] of gameEvents.entries()) {
//   const half = min<45 ? '[FIRST HALF]' : '[SECOND HALF]'
//   console.log(`${half} ${min} : ${event}`)
// }

// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea 😉
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working 😉
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!
// GOOD LUCK 😀

// const string =  "This challenge is difficult on purpose, so start watching the solution in case"
//   "first_name",
//   "Some_Variable",
//   "calculate_AGE",
//   "delayed_departure",
// ];

// FOR TWO WORD STRING
// const stringUnderScore = 'underscore_case first_name Some_Variable calculate_AGE delayed_departure'
// const arrToLwrCase = stringUnderScore.toLowerCase().trim().split(' ')
// console.log(arrToLwrCase);

// for (const[idx, str] of arrToLwrCase.entries()) {
// const [firstWord, secondWord] = str.split('_')
// const camelCase = firstWord + secondWord.replace(secondWord[0], secondWord[0].toUpperCase())
// // console.log(firstWord + secondWord.slice(0,1).toUpperCase() + secondWord.slice(1) + ' ' + '✅'.repeat(idx+1))
// console.log( camelCase.padEnd(20) + '✅'.repeat(idx+1))
// }

// FOR ANY NO OF WORDS IN STRING
// const camelCaseString = function (longString) {

//   const arrayOfString = longString.toLowerCase().split('_')
//   const arrayWords = []
//   for (const[idx, item] of arrayOfString.entries()) {
//   if (idx === 0) {
//     arrayWords.push(item)
//   } else {
//     arrayWords.push(item.slice(0,1).toUpperCase() + item.slice(1))
//   }
//   }
//   return arrayWords.join('') + ' ' + '✅'.repeat(idx)
// }
// console.log(camelCaseString(string));

// Closer Look at Functions
// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?
// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section 😉
// GOOD LUCK 😀

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0 : JavaScript", "1 : Python", "2 : Rust", "3 :  C++"],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer: function () {
//     const inputValue = Number(
//       prompt(
//         `${this.question}\n${this.options.join("\n")}\n(Write option number`
//       )
//     );
//     // short circuiting
//     typeof inputValue === "number" &&
//       inputValue < this.options.length &&
//       this.answers[inputValue]++;

//     this.displayResults();
//     this.displayResults("string");
//   },
//   displayResults: function (type = "array") {
//     if (type === "string") {
//       document.querySelector(
//         ".pollResultOutput"
//       ).innerText = ` "Poll results are ${this.answers}. `;
//       console.log(` "Poll results are ${this.answers}. `);
//     } else if (type === "array") {
//       document.querySelector(
//         ".pollResultOutput"
//       ).innerText = `  ${this.answers} `;
//       console.log(`${this.answers}`);
//     }
//   },
// };

// document.querySelector(".submitPoll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));
// document.querySelector(".pollResultBtn")
//   .addEventListener("click", poll.displayResults.bind(poll));

// // USING CALL METHOD TO CALL THE OBJECT METHOD FOR DIFFERENT OBJECT
// poll.displayResults.call({ answers: [1, 2, 3,4,5,4,5,6,8,5] });

// Coding Challenge #2
// This is more of a thinking challenge than a coding challenge 🤓
// Your tasks:
// 1. Take the IIFE below and at the end of the function, attach an event listener that
// changes the color of the selected h1 element ('header') to blue, each time
// the body element is clicked. Do not select the h1 element again!
// 2. And now explain to yourself (or someone around you) why this worked! Take all
// the time you need. Think about when exactly the callback function is executed,
// and what that means for the variables involved in this example.

// CLOSURE IS TAKING PLACE
// (function () {
//   const header = document.querySelector('h2');
//   header.style.color = 'red';

// ADD EVENT LISTNER CAN ACCESS THE HEADER CONSTANT DUE TO CLOSURE
//   document.querySelector('body').addEventListener('click' ,  function () {
//     header.style.color = 'blue';
//     })

//   })();
// EXAMPLE TWO CONFIRM THE SEAT OF
// SEAT BOOKING IN AN RESTAURANT
//  const seatBook = function (NoOfSeatToBook) {
//   const noOfTableBooked = NoOfSeatToBook/8
//   console.log(noOfTableBooked)
//   return function(confirm) {
//     alert('Are you sure to confirm the seats. Press Ok')
//     console.log(`you have booked ${noOfTableBooked}  tables successfully ${confirm} `)
//   }
// }
// const typeOfSeat = seatBook(80);
// typeOfSeat('Luxury')

// Working With Arrays
// Coding Challenge #1
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// 🐶
// ")
// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far 😉
// GOOD LUCK 😀

// const dogsKate = [3, 5, 2, 12, 7]
// const dogsJulia = [3, 5, 2, 12, 7]

// function checkDogs (dogsJulia, dogsKate) {
//   const dogsJuliaShallow = dogsJulia.slice()
//   dogsJuliaShallow.splice(0,1);
//   dogsJuliaShallow.splice(-2)
//   console.log(dogsJuliaShallow);

//   const allDogs = [...dogsJuliaShallow, ...dogsKate]

//   allDogs.forEach((dogAge, noOfDog)=> {
//     const findAdultPuppy = dogAge >=3 ? `Dog number ${noOfDog + 1} is an adult, and is ${dogAge} years old` : `Dog number ${noOfDog + 1} is still a puppy 🐶`  ;
//     console.log(findAdultPuppy)
//   })
// }

// checkDogs(dogsJulia, dogsKate)

// Coding Challenge #2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK 😀

// 1.
// const allDogs = [5, 2, 4, 1, 15, 8, 3]
// const calcAverageHumanAge = function (dogAges) {
// return  dogAges.map(dogAge => dogAge > 2 ?  16 + dogAge * 4 : 2 * dogAge )
// }

// 2.
// const allDogs = [5, 2, 4, 1, 15, 8, 3]
// const allDogs = [16, 6, 10, 5, 6, 1, 4]
// const calcAverageHumanAge = function (dogAges) {
//   return  dogAges.map(dogAge => dogAge > 2 ?  16 + dogAge * 4 : 2 * dogAge ).filter( humanAge=> humanAge >= 18)
// }
// console.log(calcAverageHumanAge(allDogs))

//3.
// const allDogs = [16, 6, 10, 5, 6, 1, 4];
// const allDogs = [5, 2, 4, 1, 15, 8, 3]

// 1st way
// const calcAverageHumanAge = function (dogAges) {
//   const sumofHumanAge =  dogAges
//   .map((dogAge) => (dogAge > 2 ? 16 + dogAge * 4 : 2 * dogAge))
//   .filter((humanAge) => humanAge >= 18).reduce((acc, curr)=> acc + curr);
//   const averageOfHumanAge = sumofHumanAge/dogAges.length
//   return averageOfHumanAge.toFixed(2)
// };
// console.log(calcAverageHumanAge(allDogs));
// 2nd way

// const calcAverageHumanAge = function (dogAges) {
//   const humanAges = dogAges.map((dogAge) =>
//     dogAge > 2 ? 16 + dogAge * 4 : 2 * dogAge
//   );
//   const adult = humanAges.filter((humanAge) => humanAge >= 18);
//   const averageOfHumanAge = adult.reduce(
//     (acc, age, idx, arr) => acc + age / arr.length,
//     0
//   );
//   return averageOfHumanAge.toFixed(2);
// };
// console.log(calcAverageHumanAge(allDogs));

// Coding Challenge #3
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK 😀

// const allDogs = [5, 2, 4, 1, 15, 8, 3]
// const allDogs = [16, 6, 10, 5, 6, 1, 4]

// const calcAverageHumanAge = function (dogAges) {
//   const averageOfHumanAge = dogAges.map((dogAge) =>
//     dogAge > 2 ? 16 + dogAge * 4 : 2 * dogAge
//   ).filter((humanAge) => humanAge >= 18).reduce(
//     (acc, age, idx, arr) => acc + age / arr.length,
//     0
//   );

//   return averageOfHumanAge.toFixed(0);
// };

// console.log(calcAverageHumanAge(allDogs));

// Coding Challenge #4
// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).
// Your tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"
// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects 😉)

// Hints:
// § Use many different tools to solve these challenges, you can use the summary
// lecture to choose between them 😉
// § Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the
// recommended portion.

// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// 1.
// dogs.forEach((ele) => {
//   ele.recommendedFood = Math.trunc(ele.weight ** 0.75 * 28) ;
// });

// 2.
// const sarahDog = dogs.find((ele) => ele.owners.includes("Sarah"));

// 3.
// console.log(
//   `Sarah dog is eating too ${ sarahDog.curFood > sarahDog.recommendedFood
//     ? 'much'
//     : 'little'}.`
//  );

// 4.
// const ownersEatTooMuch = dogs.filter(
//   (ele) => ele.recommendedFood < ele.curFood
// );
// const ownersEatTooLittle = dogs.filter(
//   (ele) => ele.recommendedFood > ele.curFood
// );

// console.log(ownersEatTooMuch);
// console.log(ownersEatTooLittle);

// 5.

// console.log(
//   `${ownersEatTooMuch
//     .flatMap((ele) => ele.owners)
//     .join(" and ")} dogs eat too much!"`
// );
// console.log(
//   `${ownersEatTooLittle
//     .flatMap((ele) => ele.owners)
//     .join(" and ")} dogs eat too little!"`
// );

// 6.
// const dogEatOkayFood = dogs.some(
//   (ele) =>
//     ele.curFood >= ele.recommendedFood * 0.9 &&
//     ele.curFood <= ele.recommendedFood * 1.1
// );
// console.log(dogEatOkayFood);

// 7.
// const dogsEatingOkayAmntFood = dogs.filter(
//   (ele) =>
//     ele.curFood >= ele.recommendedFood - ele.recommendedFood * 0.1 &&
//     ele.curFood <= ele.recommendedFood + ele.recommendedFood * 0.1
// );
// console.log(dogsEatingOkayAmntFood);
// 8.
// const shallowDogsEatOkyFood = dogs.slice()
// console.log(shallowDogsEatOkyFood);
// console.log(shallowDogsEatOkyFood.sort((a, b) => a.recommendedFood - b.recommendedFood));

// ------------USING ARRAY METHOD - MAP REDUCE TO ITS EXTREME CONDITIONS-----------

// 1st way
// const stringValue = 'this is the title we are talking';
// const convertTitleCase = function (title) {
//   const exceptions = ['a', 'an', 'the', 'but', 'is', 'are'];

//   const convertedString2 = title
//     .split(' ')
//     .map(word =>
//       exceptions.includes(word)
//         ? word
//         : word.replace(word[0], word[0].toUpperCase())
//     ).join(' ')
//   return convertedString2.;
// };
// console.log(convertTitleCase(stringValue));

// 2nd way
//   const convertedString = title.split(' ').reduce((filteredWord, word) => {
//     if (!exceptions.includes(word)) {
//       const titlecase = word.replace(word[0], word[0].toUpperCase());
//       filteredWord.push(titlecase);
//     } else {
//       filteredWord.push(word);
//     }
//     return filteredWord;
//   }, []);
//   return convertedString.join(' ');
// };

// console.log(convertTitleCase(stringValue))

// ------------------ Object Oriented Programming (OOP) --------------------------

// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h
// GOOD LUCK 😀

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;

//   this.acceleration = function () {
//     this.speed = this.speed + 10;
//   };

//   this.brake = function () {
//     this.speed = this.speed - 5;
//   };
// };

// const BMW = new Car("BMW", 120);
// const Mercedes = new Car("Mercedes", 95);

// BMW.acceleration();
// BMW.brake();
// console.log(BMW);

// BMW.acceleration();
// BMW.brake();
// console.log(Mercedes);

// Coding Challenge #2
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h
// GOOD LUCK

// class CarC1 {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   acceleration() {
//     this.speed = this.speed + 10;
//   }

//   brake() {
//     this.speed = this.speed - 5;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarC1("Ford", 120);

// console.log(ford);
// console.log(ford.speedUS);
// ford.acceleration();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford instanceof CarC1);

// Challenge #3
// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism 😉
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
// GOOD LUCK 😀

// class CarC1 {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   acceleration() {
//     this.speed = this.speed + 10;
//   }

//   brake() {
//     this.speed = this.speed - 5;
//   }

// get speedUS() {
//   return this.speed / 1.6;
// }

// set speedUS(speed) {
//   this.speed = speed * 1.6;
// }
// }

// const ford = new CarC1("Ford", 120);

// console.log(ford);
// console.log(ford.speedUS);
// ford.acceleration();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford instanceof CarC1);

// Challenge #3
// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism 😉
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
// GOOD LUCK 😀

// const Car = function (make, speed, charge) {
//   this.make = make;
//   this.speed = speed;
//   this.charge = charge;
// };

// Car.prototype.acceleration = function () {
//   this.speed = this.speed + 10;
//   this.charge -= 10;
//   if (this.charge <= 0) {
//     this.charge = 0;
//     console.log("Battery is fully discharged,  Recharge to drive your vehicle");
//   }
// };

// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   this.charge += 5;
//   if (this.charge > 100) {
//     this.charge = 100;
//     console.log("Battery is full");
//   }
// };

// Car.prototype.chargeBattery = function (chargeTo = 80) {
//   this.charge = chargeTo;
// };

// const EV = new Car("Ford", 120, 23);

// console.log(EV);
// EV.acceleration();
// console.log(EV);
// EV.chargeBattery(80);
// console.log(EV);
// EV.brake();
// EV.brake();
// EV.brake();
// EV.brake();
// EV.brake();
// EV.brake();
// EV.brake();
// console.log(EV);
// EV.acceleration();
// EV.acceleration();
// EV.acceleration();
// EV.acceleration();
// EV.acceleration();
// EV.acceleration();
// EV.acceleration();
// EV.acceleration();
// EV.acceleration();
// EV.acceleration();
// EV.acceleration();
// console.log(EV);
// EV.chargeBattery();
// console.log(EV);

// Coding Challenge #4
// Your tasks:
// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// child class of the 'CarCl' class
// 2. Make the 'charge' property private
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl'
// class. Then experiment with chaining!
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
// GOOD LUCK

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   acceleration() {
//     this.speed = this.speed + 10;
//   }

//   brake() {
//     this.speed = this.speed - 5;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// class EVCl extends CarCl {
//     #charge;
//     constructor(make, speed, charge) {
//     super(make, speed);
//     this.#charge = charge;
//   }

//   acceleration() {
//     this.speed = this.speed + 10;
//     this.#charge -= 10;
//     if (this.#charge <= 0) {
//       this.#charge = 0;
//       console.log(
//         "Battery is fully discharged,  Recharge to drive your vehicle"
//       );
//     }
//     return this;
//   }

//   brake() {
//     this.speed = this.speed - 5;
//     this.#charge += 5;
//     if (this.#charge > 100) {
//       this.#charge = 100;
//       console.log("Battery is full");
//     }
//   }

//   chargeBattery(chargeTo) {
//     this.#charge = chargeTo;
//     return this;
//   }
// }

// const EV = new EVCl("Ford", 195, 23);

// console.log(EV);
// console.log(EV.speedUS);



//  ------------------- Asynchronous JavaScript --------------------

// Coding Challenge #1
// In this challenge you will build a function 'whereAmI' which renders a country
// only based on GPS coordinates. For that, you will use a second API to geocode
// coordinates. So in this challenge, you’ll use an API on your own for the first time 😁
// Your tasks:
// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
// and a longitude value ('lng') (these are GPS coordinates, examples are in test
// data below).
// 2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
// to convert coordinates to a meaningful location, like a city and country name.
// Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
// will be done to a URL with this format:
// https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
// promises to get the data. Do not use the 'getJSON' function we created, that
// is cheating 😉
// 3. Once you have the data, take a look at it in the console to see all the attributes
// that you received about the provided location. Then, using this data, log a
// message like this to the console: “You are in Berlin, Germany”
// 4. Chain a .catch method to the end of the promise chain and log errors to the
// console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you
// will get this error with code 403. This is an error with the request. Remember,
// fetch() does not reject the promise in this case. So create an error to reject
// the promise yourself, with a meaningful error message
// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant
// attribute from the geocoding API result, and plug it into the countries API that
// we have been using.
// 7. Render the country and catch any errors, just like we have done in the last
// lecture (you can even copy this code, no need to type the same code)

// Coding Challenge #1 Solution

// API CALL GET USER LOCATION
const getLocation = function (lat, long) {
  fetch(
    `https://geocode.xyz/${lat},${long}?geoit=json&auth=323057501147972495231x125024`
  )
    .then((response) => {
        console.log(response);
      if(response.ok === false) throw new Error('Not able to fetch your location try again')  
      return  response.json()
    })
    .then((data) => {
      console.log(`You are in ${data.city},${data.country} `);
      console.log(data);
       })
    .catch((err) => console.error(err));  
};

getLocation(52.508, 13.381);