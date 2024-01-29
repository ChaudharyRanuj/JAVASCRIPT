/*
What is Javascript Engine? 
Program that executes javascript code.

 - Browser -          - JS Engine Name - 
Google Chrome             V8 Engine

Compilation:
Entire code is converted into machine code at once, and written to a binary file
that can be executed by a computer.

               Step 1                   Step 2
Source Code >>>>>>>>>>> Portable File >>>>>>>>>> Program Running
             Compilation               Execution

Interpretation:
Interpreter runs through the source code and executes it line by line.

                    Step 1                   
Source Code >>>>>>>>>>>>>>>>>>>>>>>>>>> Program Running
               Execution line by line
      (Code still need to be converted to machine code)

Just-in-time (JIT) compilation:
Entire code is convereted into machine code at once, then executed immediately.

               Step 1                       Step 2
Source Code >>>>>>>>>>>>>>>> Machine code >>>>>>>>>>>>> Program Running
             Compilation                 Execution(Happens Immediately)


How is JavaScript code executed?
The parsing of JavaScript code is done before execution so it looks like a parsed language but the code is converted to binary form before execution. To further understand this concept let us see how this code execution takes place behind the scenes.

- First, the code is transpiled using babel or any other web pack.
- This form of code is given to the Engine which converts it to AST(Abstract Syntax Tree).
- This AST is then converted to the byte code which is understood by the
machine. This is an Intermediate Representation(IR) which is further optimized by the JIT compiler.
- After the optimization, the JS Virtual Machine Executes the code.

Hence we can conclude that JS code is executed in three phases.



                     | JAVASCRIPT ENGINE  |   
                     ----------------------                                       
Source Code >>>>>>>>  
                             Parsing ( - Code parse to datastructure known as Abstract syntax tree)
                                V        which are meaningfull to the javascript language.
                                V     - Syntax Error is checked in parsing process. 
                                V                     
               >>>>>>>>>    Compiling (JUST IN TIME COMPILATION) 
               V                V   First Un-optimised code in send for instant Execution
 OPTIMISATION  V                V   JIT compiler convert AST to byte code before execution.  
               V                V               
               V<<<<<<<     Execution (Happens in Call Stack)
Note: 
Opstisation happens in background and optimised code is than change with old un-optimised code
and this happens many times. This make javascript make fast.        
            

                   | BROWSER JAVASCRIPT RUNTIME  |   
                     ---------------------------  

      JS ENGINE                    WEB API  (Functionalities provided to the engine, 
                                                        accessible on window object)             
                                   DOM, Timers, Fetch API 

    HEAP        CALL STACK                    
      V            V       EVENT LOOP        CALLBACK QUEUE
      V            V       >>>>>>>>>>      |------------------|
      V            V                       | click, timer,data|
      V            V       <<<<<<<<<<<     |                  | 
      V            V       EVENT LOOP      |------------------|
*/