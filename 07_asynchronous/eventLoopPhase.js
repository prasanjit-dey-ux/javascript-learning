// Understanding the order of execution //
console.log("1 - Start");

// Macrotask (Time phase) //
setTimeout(() => console.log('2 - setTimeout'),0);

// Microtask 
Promise.resolve().then(() => console.log('3 - Promise'));

// Immidiate execution //
console.log('4 - Synchronous');

// Microtask //
queueMicrotask(() => console.log('5 - queueMicrotask'));

// Next tick (highest priority microtask in Node.js) //
process.nextTick(() => console.log('6 - NextTick')) 

// Output order:
// 1 - Start
// 4 - Synchronous  
// 6 - nextTick (highest priority)
// 3 - Promise (microtask)
// 5 - queueMicrotask (microtask)
// 2 - setTimeout (macrotask)