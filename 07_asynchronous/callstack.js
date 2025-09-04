/*
Callstack:
The call stack tracks function execution. JavaScript executes functions in LIFO (Last In, First Out) order.

Mainly callstack manage the execution context.
*/

function first() {
    console.log('first function');
    second();
    console.log('first function ends');
}

function second(){
    console.log('Second function');
    third();
    console.log('Second function ends');
}

function third(){
    console.log('Third function');   
}

first();


// Call stack progression:
// 1. first() added to stack
// 2. second() added to stack  
// 3. third() added to stack
// 4. third() completes, removed from stack
// 5. second() completes, removed from stack
// 6. first() completes, removed from stack