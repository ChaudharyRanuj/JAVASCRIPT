/*
LECTURE: Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console
*/

const country = "India";
const continent = "Asia";
let population = 1301000;
console.log(country);
console.log(continent);
console.log(population);


/* LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console
 */

let isIsland = false;
const language = 'Hindi';
isIsland = true;
console.log(
  `{ Country: ${country}, Continent: ${continent}, Population: ${population} Million, IsIsland: ${isIsland}, Language: ${language} }`
);


/* LECTURE: Basic Operators
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half? =>
2. Increase the population of your country by 1 and log the result to the console =>
3. Finland has a population of 6 million. Does your country have more people than
Finland? =>
4. The average population of a country is 33 million people. Does your country
have less people than the average country? =>
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese' */
population+=1
peopleInEachHalf = population/2;
console.log(`The total population of our country is : ${population}. After spliting in two half country population is ${peopleInEachHalf} Million`)

/* LECTURE: Strings and Template Literals
1. Recreate the 'description' variable from the last assignment, this time
using the template literal syntax */