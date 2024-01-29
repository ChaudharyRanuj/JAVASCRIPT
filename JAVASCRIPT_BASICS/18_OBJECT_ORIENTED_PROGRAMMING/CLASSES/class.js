/*
 WHAT IS CLASS?
 Its like a blueprint OR theoractical plan from which we can create a new objects.
 Note: 
 - Class is not an object
*/
/*
// FOUR FUNDAMENTAL OF OOPS
 - ABSTRACTION
 Ignoring and hiding details don't matter. Ex: our mobile phone we use our mobile
 use different function like increasing volume, cheking battery but dont matter what is happening behind.

 - ECAPSULATION
Keeping the properties and methods in class private inside the class, not 
accessible from outside the class.

 - INHERITANCE
Making all the properties and method of certain class available to a child class,
forming a heirarchical realationship between classes.

 - POLYMORPHISM
 A child class can override the method inherited from the parent class.

**********************
PROTOTYPES 
**********
 */

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// PROTOTYPE INHERITANCE/ DELIGATION
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Three ways to do inheritance
// 1. CONSTRUCTOR FUNCTOINS
// 2. ES6 CLASSES
// 3. Object.create

/*
In programming, inheritance refers to passing down characteristics from a parent to a child so that a new piece
of code can reuse and build upon the features of an existing one. JavaScript implements inheritance by using objects.
*/

function Person(firstName, secondName, birthYear) {
  this.firstName = firstName;
  this.secondName = secondName;
  this.birthYear = birthYear;
}

const ranuj = new Person("Ranuj", "Chaudhary", 1991);
const raneesh = new Person("Raneesh", "Chaudhary", 1994);
const amisha = new Person("Amisha", "Tomer", 1990);

// ADDDING THE AGE METHOD TO CONSTRUCTOR PROTOTYPE PROPERTY
Person.prototype.age = function () {
  const presentYear = 2023;
  let carAge = presentYear - this.manuYear;
  return carAge;
};

// NOW THIS PROPERTY IS INHERITED TO ALL THE INSTANCE OF CUSTRUCTOR FUNCTION

// PROTOTYPE CHAIN
console.log(ranuj.__proto__); // return ranuj prototype;
// V
// V PROTOTYPE CHAIN
// V
console.log(ranuj.__proto__.__proto__); // return object;
// V
// V PROTOTYPE CHAIN
// V
console.log(ranuj.__proto__.__proto__.__proto__); // return null;

// 1. CONSTRUCTOR FUNCTION
// VVVVVVVVVVVVVVVVVVVVVVVVVV

function Car(modelName, manuYear) {
  this.modelName = modelName;
  this.manuYear = manuYear;
}
const renault = new Car("Renault Supreme", 2018);
const kia = new Car("Kia Impulse Desire", 2021);
const mercedez = new Car("Mercedez Benz", 2019);

// FUNCTION OF NEW OPERATOR
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

// NEW {} IS CREATED
// FUNCTION IS CALLED, THIS = {}
// {} LINKED TO PROTOTYPE
// FUNCTION AUTOMATICALLY RETURN {}

// console.log(renault);
// console.log(kia);
// console.log(mercedez);

// CHECK INSTANCE OF CONSTRUCTOR FUNCTION
console.log(renault instanceof Car); // log true;

// ADDING THE METHOD TO PROTOTYPE
Car.prototype.carAge = function () {
  const presentYear = 2023;
  let carAge = presentYear - this.manuYear;
  return carAge;
};
console.log(Car.__proto__);
console.log(Car.prototype); // not prototype of constructor function but used
// by object instances of constructor function.

// NOW EVERY INSTANCE OF CAR CUNSTRUCTOR FUNCTION OBJECT HAVE ACCESS TO ALL THE
// METHODS OF CAR PROTOTYPE

// EVERY OBJECT HAS ACCESS TO ITS PROTOTYPE
console.log(renault);
console.log(renault.carAge());
console.log(kia.carAge());
console.log(mercedez.carAge());

// HOW TO CHECK PROTOTYPE OF OBJECT
console.log(renault.__proto__ === Car.prototype); // this prototype is the prototype property of constructor function

console.log(Car.prototype.isPrototypeOf(renault));

// CHECK IF OBJECT PROPERTY IS OWN OR NOT
console.log(renault.hasOwnProperty("carAge")); // return false;
console.log(renault.hasOwnProperty("manuYear")); // return true;

// 2. ES6 CLASSES
// NOTE:
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

// HOW TO DECLARE A CLASS
// class experession

const PersonCl = class {};

// class declaration

class PersonClNew {
  constructor(firstName, secondName, birthYear = 1991) {
    // this are known as Data properties.
    this.firstName = firstName;
    this.secondName = secondName;
    this.birthYear = birthYear;
  }
  // INSTANCE METHOD
  // Methods will be added to .prototype property
  ageUpto(ageUpto) {
    return ageUpto - this.birthYear;
  }

  // GETTER AND SETTER PROPERTY
  // OR ACCESSOR PROPERTIES

  // works when a property is read
  get birthYear() {
    return this._birthYear;
  }

  // called when the property is set
  set birthYear(year) {
    if (year < 1990) {
      alert("Age below 1990 not allowed");
      return;
    }
    this._birthYear = year;
  }

  // works when a property is read
  get fullName() {
    return "Your full Name is: " + this._fullName;
  }

  // called when the property is set
  set fullName(name) {
    this._fullName = name;
  }

  // STATIC METHOD
  // used for making helper function for class
  static greet() {
    console.log(
      `Namastey a very welcome to our expertise class of javascript.`
    );
    console.log(this);
  }
}

const ranujChaudhary = new PersonClNew("Ranuj", "Chaudhary");
console.log(ranujChaudhary);
ranujChaudhary.fullName = "Ranuj Chaudhary";
ranujChaudhary.fullName;
console.log(ranujChaudhary);
// NOTE:
// age method is automatically added to the prototype by the class now
// can be used by any instances of class

console.log(ranujChaudhary.__proto__);
console.log(ranujChaudhary.ageUpto(2047));

// CALLING STATIC METHOD
PersonClNew.greet();

// GETTER AND SETTER PROPERTY OR ACCESSOR PROPERTIES

/*
Smarter getters/setters
Getters/setters can be used as wrappers over “real” property values to gain more control over operations with them.


That is, an accessor descriptor may have:

get – a function without arguments, that works when a property is read,
set – a function with one argument, that is called when the property is set,


NOTE: 
1. Please note that a property can be either an accessor (has get/set methods) or a data property (has a value), not both.
2. From the outside, an accessor property looks like a regular one. That’s the idea of accessor properties. We don’t call user.fullName as a function, we read it normally like a  data property.
*/

class PersonIndia {
  constructor(fullName, Hobbies) {
    this.fullName = fullName;
    this.Hobbies = Hobbies;
  }

  // works when a property is read
  get fullName() {
    return this._fullName;
  }

  // called when the property is set
  set fullName(name) {
    if (!name.includes(" ")) {
      alert("write your full name");
      return;
    }
    this._fullName = name;
  }
}

const firstIndian = new PersonIndia("Ranuj Chaudhary", [
  "Yoga",
  "Running",
  "Coding",
]);
console.log(firstIndian);
firstIndian.fullName = "ranuj choudhary";

// STATIC METHOD
/*
EXAMPLE 
convert array like object to array
1. Array.from()
2. Number.parseFloat(12)
mthods from() and parseFloat() are available on array or number constructor not to prototype property. 
*/
class CoffeeMachine {
  constructor(elecVolt, capacity) {
    this.elecVolt = elecVolt;
    this.capacity = capacity;
  }

  static adminAccess(password) {
    if (password === "secret") {
      console.log("Entered right password, now you can start the machine.");
    }
  }

  static resetMachine(command) {
    if (command === "reset") {
      console.log("Reset is progress....");
      console.log("Reset is progress....");
      console.log("Reset is progress....");
      console.log("Reset is progress....");
      console.log("Reset is progress....");
      console.log("Reset is progress....");
      console.log("Reset is progress....");
      console.log("************** RESET DONE **************");
    }
  }
}

CoffeeMachine.adminAccess("password");
CoffeeMachine.resetMachine("reset");

// 3. OBJECT.CREATE
// Note: With this method we can add method in prototype manually.

const PersonProto = {
  calcAge() {
    console.log(`Your age is: ${2023 - this.birthYear}`);
  },
  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },
};
// BOTH calcAge() and init() added to Prototype of steve by Object.create()
const steve = Object.create(PersonProto);

// object passed in obove function become the prototype of steve.

console.log(steve);
steve.init("Ranuj", 1991);
steve.calcAge();

// ENCAPSULATION
///////////////////////////////////////
// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
console.log('helper function');  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);
console.log(Account);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();


// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
