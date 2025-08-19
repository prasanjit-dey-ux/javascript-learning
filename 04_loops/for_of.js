/* 
1. for...of — For Looping Over Values (Arrays & Strings)

This is the modern, preferred way to loop over an array when you just need the value of each item and you don't care about the index (i).

Think of it as: "For each item of this array, do something."

here the element is like the i and object here is not the programming object but the the value which we are taking abou 
for (const element of object) {

}
*/


let greeting = "Prasanjit"
for (let greet of greeting) {
   // console.log(greet);   
}

let numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
   // console.log(`the numbers are ${num}`)
}

let fruits = ["apple", "banana", "mango"]

for ( const basket of fruits ) {
   // console.log(basket)
}

// greeting guest

const guest = ["Soumya", "Suvra", "Souro", "Sam", "Rex", "Arya"];

for(const greet of guest) {
    // console.log(`Welcome to the party ${greet}`);
}


/*
2. Sum the Numbers (for...of)

Problem: You have an array of numbers. Use a for...of loop to calculate the sum of all the numbers in the array.

Explanation:
First, you need a variable (sum) to keep track of the total, initialized to 0.
Then, you use a for...of loop to go through each number in the numbers array. 
In each iteration, you add the current number to your sum.
*/


const values = [10, 25, 5, 30] ;
let sum = 0 // Start the total at zero

for (const number of values) {
    sum = sum + number // Add the current number to the total
}

console.log(`the total sum is ${sum}`)


/*
3. Character Counter: You are given a sentence as a string. Use a for...of loop to count how many times the letter 'a' appears in the sentence. 

const sentence = "a quick brown fox jumps over a lazy dog";

Expected Output: The letter 'a' appears 3 times.
*/

const sentence = "a quick brown fox jumps over a lazy dog";

let count = 0;

for( const counter of sentence) {
    if ( counter == "a") {
        count ++
    } 
}

console.log(`The letter 'a' appears ${count} times.`)