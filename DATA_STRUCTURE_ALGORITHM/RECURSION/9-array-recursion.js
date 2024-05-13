// ***************** DIRECT RECURSION ***********************

// ---------------------------- UNDERSTANDING RECURSION ----------------------------

/* const digit = 2
function sumRange (num) {
if (num === 1) return 1;
return num + sumRange(num-1);
}
sumRange(digit);

sumRange(4)  //return value (10) 
         return 4 + sumRange(3)  //  return value (6)
         // result( 4 + 6 = 10)  return  3 + sumRange(2)    //  return value (3)        
                                 // result( 3 + 3 = 6)     return 2 + sumRange(1)   (1)
                                                             // result( 2+1 = 3)   return 1  */

// FACTORIAL WITH RECURSION
/* const digit = 2

function factorial (num) {
if (num === 1) return 1;
return num + factorial(num-1);
}
factorial(digit);

factorial(4)  //return value (24) 
         return 4 * factorial(3)  //  return value (6)
         // result( 4 * 6 = 24)  return  3 * factorial(2)    //  return value (2)        
                                 // result( 3 * 2 = 6)     return 2 + factorial(1)   (1)
                                                             // result( 2* 1 = 2)   return 1 */

// FACTORIAL WITH RECURSION
const factorialBtn = document.getElementById("factorial");
const sumBtn = document.getElementById("sum-recursion");
factorialBtn.addEventListener("click", function () {
  const inputNum = document.getElementById("factorial-input").value;
  const fact = factorial(inputNum);
  document.getElementById("factorial-output").innerHTML = `${fact}`;
  document.getElementById("factorial-input").value = "";
});

function factorial(num) {
  if (num < 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
let sum;
function sumOfNumberRange(startNo, endNo) {
  if (startNo > endNo) {
    return 0;
  }
  sum = startNo + sumOfNumberRange(startNo + 1, endNo);
  return sum;
}

sumBtn.addEventListener("click", function () {
  const startNo = document.getElementById("start").value;
  const endNo = document.getElementById("end").value;
  const sum = sumOfNumberRange(+startNo, +endNo);
  document.getElementById("sum-output").innerHTML = `${sum}`;
});

// ***************** INDIRECT RECURSION ***********************

let money = 10000000;
let tharPrice = 2000000;
let noOfCar = 0;
function totalMoney(money) {
  if (money > 0) {
    buyCar(tharPrice);
  } else {
    console.log(`You have baught ${noOfCar} cars.`);
    console.log("All money finished in your account.");
  }
}

totalMoney(money);

function buyCar(price) {
  noOfCar++;
  money = money - price;
  totalMoney(money, noOfCar);
}

// ************** HEAD AND TAIL RECURSION ************************
// let totalAmount = 10000000;
// let scropioPrice = 2000000;
// let noOfCars = 0;
// function totalMoney(totalAmount) {
//   // console.log(money);
//   // this part is Head Recursion
//   if (totalAmount > 0) {
//     buyCar(scropioPrice);
//   } else {
//     console.log(`You have baught ${noOfCar} cars.`);
//     console.log("All money finished in your account.");
//   }
//   // this part in tail recursion
//   // Below function will run when above function complete working so
//   // the console in tail will get the value of money from stack execution context.

//   console.log(money);
// }

// totalMoney(money);

// function buyCar(price) {
//   noOfCars++;
//   totalAmount = totalAmount - price;
//   totalMoney(money, noOfCars);
// }

// RECURSION ARRAY WITH REVERSE
const noOfCars = [1, 2, 3, 4, 5, 6, 7, 8];
let newArr = [];
let ele;
function reverseArr(arr) {
  if (arr.length === 0) {
    return newArr;
  }
  ele = arr.pop();
  newArr.push(ele);
  reverseArr(arr);
}
reverseArr(noOfCars);

// REVERSE ARRAY WITH DEFAULT METHOD
// const arr = [1,2,3,4,5,6,7,8]
// console.log(arr.reverse());
