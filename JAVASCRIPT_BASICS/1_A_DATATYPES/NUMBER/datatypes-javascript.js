// DATA TYPES

// number
typeof(34);

// boolean
typeof(true);

// string
typeof("one");

// variables
var ranuj = "this is just a variable to store something";
alert (ranuj);
var yourName = prompt("What's your name?");
alert (yourName);

// variable problem tow exchange the value of two variables a & b. ?????
var a = 8;
var b = 9;
var c=b;
var b=a;
var a=c;
alert ( "the value of a is : " + a );
alert ("the value of b is : " + b );

// ( Naming convention for variables. )
// * variable name cannot be var, const, let
// * variable name cannot start with number
// * variable name cannot have space
// * variable name canot have dash (-) in between
// * variable name should be in camle casing.

// STRING
// You can add two string with + symbol.
alert("hello" + "world");
// output is helloworld
alert ( "hello" + " " + "world" );

// Finding the length of string ?????
var name_length = "this is just to check the lenght of the string";
alert(length.name_length);

// PROBLEM OF CHECKING THE USER INPUT CHARACTER LIMITATION ?????

var name_var = prompt("What do you know about the variables in javascript.");
if (name_var.length>20) {
alert ( "You cannot enter the number of text greater then 20 character")
} else {
alert ( "the value entered is valid and up to the mark");
}

// SLICE & CHANGING STRING CASE TO UPPER_CASE & LOWER_CASE

var myName = prompt ( "What is your name" );
// var firstLetter = name.slice(0,1).toUpperCase();
// var remainingLetter = name.slice(1,length.name);
alert ( "My name is : " + myName.slice(0,1).toUpperCase() + myName.slice(1,myName.length).toLowerCase() );

// ARITHMATIC OPERATIONS
var cost = 3 + (5+3) * 2;
alert ( "Your total cost is : " +  cost);

// OPERATORS
// What is operators?

var x = 5;
x++; // this is the increment operator
x--; // this is the decrement operator
x += 2; // to incerement value by two.

// FUNCTIONS (TWO DO THE TASK WHICH ARE REPEATIVE)
function nameOfFunction () {
alert( "Now the fuction is working fine" );
}

nameOfFunction(); // calling the function by its name.


// ARGUMENT AND PARAMETER OF FUNCTIONS

function nameOfFunction (money) {
    var noOfComputers = money/20000;
    return noOfComputers;
    }
    
nameOfFunction(300000);

Math.floor(); //
Math.round();


 

