/*
1) HIGH LEVEL LANGUAGE (ex: Python, Javascript)
---------------------------------------------
No need to manage resources i.e memory management which is taken care
by the langauage itself.

2) GARBAGE COLLECTED (is as part of abstration)
-----------------
A form of automatic memory management known as garbage collection 

JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore (garbage collection). This automaticity is a potential source of confusion: it can give developers the false impression that they don't need to worry about memory management.

Note: a) Cleaning the memory. b) Clean the objects.


Memory life cycle
-----------------

Regardless of the programming language, the memory life cycle is pretty much always the same:

1) Allocate the memory you need
2) Use the allocated memory (read, write)
3) Release the allocated memory when it is not needed anymore
3) Interpreted or Just-in-time Compiled

Interpreter = execute high level langauge to machine code line by line.
Compiling Language = execute compiled code of high level langauge to machine code.

3) INTEPRETED OR JUST IN TIME COMPILED

JavaScript is an interpreted language, and to understand this, it’s important to clarify the concepts of interpreters, compilers, and JIT (Just-In-Time) compilers:

Interpreter: An Interpreter directly executes instructions written in a programming or scripting language without previously converting them to an object code or machine code.

Compiler: A compiler takes an entire program and converts it into object code which is typically stored in a file. The object code is also referred as binary code and can be directly executed by the machine after linking. 

JIT compiler: A JIT compiler first converts the whole code to byte code and then uses the compiler at runtime to convert the code into machine-readable code. JIT compiler helps in faster execution.

JavaScript is primarily interpreted, but modern JavaScript engines, like V8 used in Google Chrome, incorporate JIT compilation techniques to improve performance by translating JavaScript code into optimized machine code just before it’s executed. This combination of interpretation and JIT compilation makes JavaScript a versatile and high-performance language for web applications.

4) MULTI-PARADIGM LANGUAGE

PARADIGM:
a) Procedural Programming - organising code in linear way.
b) Object Oriented Programming (OOP)
3) Functional Programing (FP)

5) PROTYPE-BASED OBJECT ORIENTED
Ex:
const arr = [3,4,5,6]
arr.push()

6) FIRST CLASS FUNCTIONS 

Functions are simply treated as variables. We can pass them into functions,
and return them form funtions.
Example: 
const overlay = document.queryselcto(".overlay")
const closeModel = () => {
  modal.classList.add("hidden")
  overlay.clasList.add("hidden")
}
overlay.addEventListener("click" , closeModal)

Note: closeModel function is passed as variable in addEventListener function

7) Dynamic

Javascript is dynamically typed language.
- No data type definitons. Types becomes known at runtime.
- Data type of variable is automatically changed.

8) Singly Threaded Language and Non-blocking Event Loop Concurrency Model.

Concurrency Model - How the Javascript Engine handles multiple tasks happening at 
the same time
                                      v 
                                      v Why do we need that?
                                      v
Javascript runs in one single thread, so it can only do one thing at a time.
                                      v 
                                      v So what about a long-running task?
                                      v
Sound like it block the single thread. However, we want non-blocking behavior!
                                      v 
                                      v How do we acheive that?
                                      v
By using an event loop: takes long running task, executes them in background and puts them back in the main thread once they are finished.


*/
