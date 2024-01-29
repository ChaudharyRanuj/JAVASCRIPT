"use strict";
/*
Function 
A function is a sequence of program instructions that performs a 
specific task, packaged as a unit

How function work?
Funtion recieve input data,transform data and output data.


ANATOMY OF A FUNCTION
---------------------

    (funtion name)    (Parameters: placeholders to receive input value. Like local variables of a function)
           v               v
function calcAge(birthYear, firstName) {
  ( function body: process the function's input data.)
  const age = 2037 - birthYear;
 (  return statement to ouput a value from the funtion and terminate function)
  return ` ${firstName} your age is ${age}`;
   console.log('This code will not work after return statement. Due to termination of function.')
}

const age = calcAge(1991, "Ranuj");  calling , running or invoking the function, using()
                        ^
 (ARGUMENTS: actual values of function parameters, to input data)

let fruits = {
  orange: 2,
  pineApple: 1 / 2,
  mausambi: 2,
  carrot: 5,
  smooothie: {straberry: true, berry: true, waterMelon: true},
};

let count = 1;
let orderId = 54721;
function juice4You(fruit, cutomer) {
  if (fruits[fruit]) {
    console.log(
      `Thank you for your Order ${cutomer.gender === "M" ? "Mr." : "Ms."} ${
        cutomer.name
      } . Your ${fruit} juice will be served in a minute. Order-ID: ${orderId}`
    );
  } else {
    console.log(
      "Choose Juice from Menu. We serve juices mentioned in our menu"
    );
  }

  setTimeout(() => {
    console.log(`Your ${fruit} juice  is ready. Enjoy your fresh juice.😊`);
  }, 5000 * count++);

  orderId++;
}

juice4You("pineapple", { name: "Ranuj Chaudhary", gender: "M" });
juice4You("orange", { name: "Amisha Tomar", gender: "F" });
juice4You("carrot", { name: "Raneesh Choudhary", gender: "M" });
juice4You("mausambi", { name: "Rajat Tomer", gender: "M" });

*/
/*
// DEFAULT PARMERTERS
function flighBooking(
  flightNum,
  // DEFAULT PARAMETERS
  numPassenger = 1,
  price = 199
) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
}
flighBooking("D345454");
flighBooking("D345454", 2 , 4000);
*/
