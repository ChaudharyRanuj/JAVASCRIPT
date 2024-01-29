
const greeting  = function (greet) {
  return function (name) {
    console.log(greet + ' ' + name)
  }
 }

// const greeterHey = greeting('Hey')

console.log(greeting('Hey'))