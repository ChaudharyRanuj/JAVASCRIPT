/*
What is currying in JavaScript?
Currying simply means evaluating functions with multiple arguments and decomposing them into a sequence of functions with a single argument.

In other terms, currying is when a function — instead of taking all arguments at one time — takes the first one and returns a new function, which takes the second one and returns a new function, which takes the third one, etc. until all arguments are completed.

Why should I use currying?
There are several reasons why currying is ideal:

Currying is a checking method to make sure that you get everything you need before you proceed
It helps you to avoid passing the same variable again and again
It divides your function into multiple smaller functions that can handle one responsibility. This makes your function pure and less prone to errors and side effects
It is used in functional programming to create a higher-order function
This could be personal preference, but I love that it makes my code readable


Example 1: A simple, three-parameter function
First, I’m going to create a simple function that accepts three parameters:

const add =(a, b, c)=>{
    return a+b+c
}
console.log(add(2, 3, 5)) // 10
After outputting this function, the result is 10.

What happened here is that this function is adding all the parameters of the numbers which we have passed.

Now, this first example is just a simple function that accepts multiple parameters.





Example 2: Converting an existing function into a curried function
Let’s try this second example and see how we can implement the curry function.

In this example, this function is going to accept one argument and return a series of functions:

const addCurry =(a) => {
    return (b)=>{
        return (c)=>{
            return a+b+c
        }
    }
}
This is the curry implementation of the function. If we output this, the result will be 10:

console.log(addCurry(2)(3)(5)) // 10



Example 3: Creating a friend request curry function
In this example, we are going to create a simple curry function where a user sends a friend request to his friend John:

function sendRequest(greet){
    return function(name){
        return function(message){
            return `${greet} ${name}, ${message}`
        }
    }
}
sendRequest('Hello')('John')('Please can you add me to your Linkedin network?')
Output:

"Hello John, Please can you add me to your Linkedin network?"





Conclusion
For developers, currying can feel complicated. While it is tricky to understand, you will learn it better when you implement it in your JavaScript projects.

I have implemented currying in some of my projects and learned by practice. These are some things I have used currying for:

Currying can be used to manipulate the DOM in Javascript
It can be used to trigger event listeners
Currying can be used when you want to create a function that will receive only single arguments


*/
