/*



Strict mode is a subset of JavaScript that provides better error checking and enforces stricter rules for coding. It was introduced in ECMAScript 5 (ES5), which is the fifth edition of the ECMAScript language specification. When strict mode is enabled, the JavaScript engine checks for syntax errors and runtime errors that would otherwise go unnoticed in non-strict mode. This makes it easier for developers to catch errors early in the development process, resulting in fewer bugs and better code quality.

Non-strict mode, on the other hand, is the default mode of operation in JavaScript. In this mode, the JavaScript engine allows for more flexible coding and provides fewer restrictions. This means that some code that would cause errors in strict mode may execute without any issues in non-strict mode. While this may seem advantageous at first, it can lead to unexpected behavior and security vulnerabilities.

To enable strict mode in JavaScript, you simply add the string “use strict” at the beginning of a script or function. Here are a few examples of how the ‘strict’ mode changes the behavior of JavaScript code:


1. Prevents the use of undeclared variables: In non-strict mode, you can use a variable without declaring it first, which can lead to unexpected behavior if you mistype the variable name. In strict mode, however, using an undeclared variable will throw a reference error.


// Non-strict mode 
x = 10; 
console.log(x); // Outputs 10 
  
// Strict mode 
"use strict"; 
y = 20; // Throws a reference error 
Output
10
2. Disallows deleting certain properties: In non-strict mode, you can delete properties of an object even if they are non-configurable, which can lead to unexpected behavior. In strict mode, attempting to delete a non-configurable property will throw a type error.


// Non-strict mode 
var obj = {}; 
Object.defineProperty(obj, "x", { 
    value: 10, 
    configurable: false
}); 
delete obj.x; 
console.log(obj.x); // Outputs undefined 
  
// Strict mode 
"use strict"; 
var obj2 = {}; 
Object.defineProperty(obj2, "y", { 
    value: 20, 
    configurable: false
}); 
delete obj2.y; // Throws a type error
Output
10
3. Prevents duplicate function parameters: In non-strict mode, you can declare multiple parameters with the same name, which can lead to confusion and errors. In strict mode, however, duplicate parameters will throw a syntax error.


// Non-strict mode 
function foo(x, x) { 
    return x + x; 
} 
console.log(foo(1, 2)); // Outputs 4 
  
// Strict mode 
"use strict"; 
function bar(y, y) { // Throws a syntax error 
    return y + y; 
}
Output
4
These examples demonstrate just a few of the ways that the ‘strict’ mode can help to catch errors and improve the reliability of JavaScript code.

Let’s take a look at some of the key differences between strict mode and non-strict mode.

Variable declaration: In strict mode, variables must be declared before they can be used. This prevents developers from accidentally creating global variables, which can cause naming conflicts and make code harder to maintain. In non-strict mode, undeclared variables are automatically assigned to the global object, which can lead to unexpected behavior.
Function invocation: In non-strict mode, this keyword inside a function that is not invoked as a method of an object refers to the global object. In strict mode, however, this keyword is undefined in such cases. This helps prevent accidental modification of the global object and makes it easier to write secure code.
Function arguments: In non-strict mode, it is possible to declare multiple function parameters with the same name, which can lead to confusion and errors. Strict mode disallows this, making it easier to write and maintain code.
Deleting properties: In non-strict mode, it is possible to delete properties from objects that are not configurable. This can lead to unexpected behavior and should be avoided. In strict mode, attempting to delete non-configurable properties will result in an error.
Conclusion: In conclusion, strict mode in JavaScript provides better error checking and enforces stricter coding rules, leading to fewer bugs and better code quality. While non-strict mode may seem more flexible at first, it can lead to unexpected behavior and security vulnerabilities. It is therefore recommended to use strict mode in all JavaScript code to ensure the highest level of security and reliability.









*/
