/* 
The Problem

Create a variable isSubscribed (which can be true or false). Based on its value, your script should decide what text to show on a button.

    If isSubscribed is true, it should log: "Show 'Unsubscribe' button".
    If isSubscribed is false, it should log: "Show 'Subscribe' button". 

*/

let isSubscribed = true;

if (isSubscribed) {
    console.log(`Unsubscribe`);
} else {
    console.log(`Subscribe`);
}

/*
A More Concise Alternative: The Ternary Operator
For simple conditional assignments like this, you can also use the ternary operator (? :) to write it in a single line. It's a clean and common shorthand in JavaScript.

The syntax is: condition ? expressionIfTrue : expressionIfFalse
*/


let isFollow = true;

// use the ternary operator to determine the button text
let buttonText = isFollow ? "Unsubscribe" : "Subscribe"

console.log(`Show "${buttonText}" button`);
