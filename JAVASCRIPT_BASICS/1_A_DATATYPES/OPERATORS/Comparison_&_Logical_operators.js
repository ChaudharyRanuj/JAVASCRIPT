/*
COMPARISON OPERATOR
*********************

Operator                Description                Comparing               Returns
==	                     equal to	                   x == 8	                false
                                                     x == 5	                 true
                                                     x == "5"	               true

===	              equal value and equal type	       x === 5	               true
                                                     x === "5"	             false

!=	                    not equal	                   x != 8	                 true

!==	                    not equal value 
                             or 
                        not equal type	             x !== 5	               false
                                                     x !== "5"	true	
                                                     x !== 8	true

>	                        greater than	             x > 8	                 false	

<	                        less than	                 x < 8	                 true	

>=	                   greater than or equal to	     x >= 8	                 false	

<=	                   less than or equal to	         x <= 8	               true


LOGICAL OPERATORS
*******************

Operator	              Description	                 Example	

  &&	                      and	                (x < 10 && y > 1) is true	

  ||	                       or	                (x == 5 || y == 5) is false	

  !	                        not	                  !(x == y) is true


Conditional (Ternary) Operator
********************************

JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.

Syntax
variablename = (condition) ? value1:value2 

NOTE: 
* IF FIRST VALUE TRUE RETURNS FIRST VALUE
* IF FIRST VALUE FALSE RETURNS SECOND VALUE


The Nullish Coalescing Operator (??)
*******************************************
The ?? operator returns the first argument if it is not nullish (null or undefined).
Otherwise it returns the second argument.

Example
let name = null;
let text = "missing";
let result = name ?? text;

output: 
missing;
*/

// SHORT CIRCUITING
// *****************

// falsy : 0, '', null, undefined


// WORKING WITH && (and)

console.log(false && 'this value'); // SHORT CICUITING HAPPENS DONT LOOK FOR SECOND VALUE
console.log(true && 'ranuj'); //  NO SHORT CICUITING


// WORKING WITH || (or)
console.log(true || 'this value'); // SHORT CICUITING HAPPENS DONT LOOK FOR SECOND VALUE
console.log(false || 'ranuj'); //  NO SHORT CICUITING


