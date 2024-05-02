// FIRST WAY
// export using keyword export in front of function
// export function sum(a, b) {
//   return a + b;
// }

// export function cube(a) {
//   return a * a * a;
// }

// SECOND WAY
// export using keyword export in front of function
function sum(a, b) {
  console.log(a + b);
}

function cube(a) {
  console.log(a * a * a);
}

export { sum, cube };

// THIRD WAY
// export with different name using as keyword

// export{sum as total, cube as cubeOfNumbers}

// THIRD WAY
// export all the function or variable declartion
// export function sum(a, b) {
//   return a + b;
// }

// export function cube(a) {
//   return a * a * a;
// }

// INTERVIEW QUESTION

// Do the module hoist ?
// yes module hoist as they are function declaration but its always good practice to put the import at top of the scope


