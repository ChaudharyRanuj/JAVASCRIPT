/*
IMPORTANT NOTE

The bind method creates a copy of the function and sets the this keyword, 
while the call and apply methods sets the this keyword and calls the function immediately.


*/

const airIndia = {
  airline: "Air India",
  iataCode: "AIN",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} seat no ${flightNum}.`
    );
    this.bookings.push({
      flight: `${this.iataCode}`,
      flightNum: `${flightNum}`,
      name,
    });
  },
};

// CALL METHOD
// Helps in adding the this keyword on specified object.
/*
SYNTAX:
call(thisArg)
call(thisArg, arg1)
call(thisArg, arg1, arg2)
call(thisArg, arg1, arg2, /*/ /…,/; /*/ argN)

*/

const indigo = {
  airline: "Indigo",
  iataCode: "INDG",
  bookings: [],
};

const vistara = {
  airline: "Vistara",
  iataCode: "VSTR",
  bookings: [],
};
// USING OTHER OBJECT METHOD ON OTHER OBJECT

const book = airIndia.book;
console.log("********Booked By Call Method*********");
book.call(vistara, "7B", "Ranuj Chaudhary");
book.call(indigo, "20A", "Ranuj Chaudhary");

// APPLY METHOD
// Similar as call method but in place of argument takes array of arguments.
// Note: This method is old method now is rarely used now.

const newFlight = ["7B", "Ranuj Chaudhary"];
console.log("********Booked By Apply Method**********");
book.apply(indigo, newFlight);
book.apply(vistara, newFlight);

// Same method is now can be used by using call method with spread operator.
console.log(
  "********** Apply method using Call Method with spread operator.**********"
);
book.call(indigo, ...newFlight);

// BIND METHOD
// Bind method return a function with this keyword attached to the function.

console.log("********Booked By Bind Method**********");
const bookIndigo = airIndia.book.bind(indigo);
bookIndigo("8B", "Raneesh Choudhary");
const bookVistara = airIndia.book.bind(indigo);
bookVistara("25C", "Amisha Tomer");

// IMPORTANT INTERVIEW QUESTION
// 1)
function foo() {
  console.log(this.a);
}
const obj = { a: "obj", foo };
const obj2 = { a: "obj2", foo };
const obj3 = { a: "obj3" };
const foo2 = obj.foo.bind(obj);
const foo3 = obj2.foo.bind(obj2);
// foo2();
// foo3();
// const foo4  = foo2.call(obj3);
// const foo5 = foo3.apply(obj3);
// console.log(foo2.call(obj3));

console.log(foo2);

// 2) 
const objNew =  {
  count: 0,
  increment: function () {
  console.log(this);
  },
showtheCount: function () {
// IF NOT BIND WITH THIS THAN BELOW FUNTION THIS WILL POINT TO WINDOW OBJECT  
const newfunc = function getValue() {
console.log(this);
return this.increment()
}
// BIND ANY FUNCTION INSIDE THIS METHOD TO THIS
 const newfunction =  newfunc.bind(this)
 newfunction()
}


}

objNew.showtheCount()

