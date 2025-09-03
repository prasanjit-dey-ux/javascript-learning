a();
b(); // error due to hoisting

// Function Statement aka Function declaration

function a() {
    console.log("a is called");
}

// Function Expression
let b = function () {
    console.log("b is called");   
}

/*
Difference between these two is hoisting because as we know in 
function we diretly calling it but in b we are storing it and when 
we store it value become undefine until it reaches that code line
*/

// Function Declaration is same thing as function statement

// Anonymous Function : a function without name is called anonymous function and it doesnot have there own identity
let c = function () { // here i am assigning so that it not shows error
    console.log("its a no name fnc, and c is called");
    
}

// if it shows erorr what the use use of it? because it can be used as values

// Name Function Expression: it is same as function expression with name like in anonymous fnc we saw it has no name here it has it
 
let d = function xyz() {
    console.log("d is called"); 
}

d(); // we will use d here and not xyz()

/*
xyz() it not in outer scope so we cant call it, if we call it it will give refference error;
*/


// Difference bettween Parameters & Arguments
let param = function (paramerters) {
}

params(argument);

/*
the value we pass inside a function is called argument, 
and the label and identifier get those value is the parameter
*/

// First Class Function: the ability to use function as values is called first class function

function e() {
    return function yml() {

    }
}

console.log(e());

/*
A first-class function refers to the concept in programming languages where functions are treated as "first-class citizens." This means that functions can be manipulated and used in the same ways as any other data type or variable within the language.
Specifically, a language with first-class functions allows for the following operations:
Assignment to variables: Functions can be assigned as values to variables, just like numbers, strings, or objects.
Passing as arguments: Functions can be passed as arguments to other functions. This enables the creation of higher-order functions that operate on or return other functions.
Returning from functions: Functions can be returned as the result of another function's execution.
Storage in data structures: Functions can be stored within data structures such as arrays or objects. 

*/

// Arrow Function: its a part of ES6

