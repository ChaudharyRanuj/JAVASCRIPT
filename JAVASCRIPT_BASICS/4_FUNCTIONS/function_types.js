/*
Type of functions

1) Function Declaration
2) Function Expression
3) Arrow Function

***********************
1) Function Declaration
***********************
Function that can be used before it's declared.


function calcAge(birthYear) {
return 2037 - birthyear;
}


***********************
2) Function Expression
***********************

Essentially a function value stored in a variable.

const calcAGe = function (birthYear) {
return 2037 - birthyear;
}


***********************
3) Arrow Function
***********************
Great for a quick one-line functions. Has no this keyword.


-------------------------
Feature of Arrow Function
-------------------------

      1. Arrow function with two arguments.
     const addingNumbers = (greet, name) => {
        console.log(greet + name);
      }; 
      addingNumbers('Namastey', 'Guru Ji');

      const greetingsAgain = () => { 
        return "Hello";
      };
      console.log(greetingsAgain()); 
      //2. console.log (greetings(2,3));

      // SHORTEST WAY TO WRITE A FUNCTION WITH SINGLE ARGUMENT
        const greetingsAgainTwice = (firstArgument) =>
        console.log("Hi, " + firstArgument);
      greetingsAgainTwice("max"); 

      //3. Arrow Function Without any Arguments.
       const withoutArguments = () => {
        alert("This is arrow function without any arguments.");
      };
 
      //4. Arrow function returning value.
       const returnValue = (name) => {
        return name(10, 67);
      };
      console.log(returnValue(addingNumbers)); 

      // 5. Arrow function with one default argument.

       const addition = (greet, name = 70) => {
        console.log(greet + name);
      };
      addition(5); 

      // 6. Arrow function with one default argument.

       const checkInput = (cb, ...strings) => {
        if (input) {
          return "GOT THE VALUE";
        } else {
        }
      };
      addition(5);

      // 7. Passing function as parameter and checking the input empty string

      function inputText(cb, ...strings) {
        let hasEmptyText = false;
        for (const text of strings) {
            if (!text) {
            hasEmptyText = true;
            break;
          }
       }
        if (hasEmptyText === false) {
          cb();
        }
      }

      inputText(
        () => {
          console.log("All not empty");
        },
        "ranuj",
        "ranuj",
        "ranuj"
      );
  */
