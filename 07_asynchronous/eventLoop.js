/*
what is event loop?
The event loop is JavaScript's mechanism for handling asynchronous operations in a single-threaded environment.

It acts as a guard that waits for the Call Stack to be completely empty. As soon as it's empty, it checks the queue,
takes the first callback function waiting there, and pushes it onto the stack to be executed.
*/

console.log('Start');
setTimeout(()=>console.log('Timeout'), 0);
console.log('End');

// output: Start, End, Timeout