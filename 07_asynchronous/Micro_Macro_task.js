// Microtasks (higher priority):
// - Promise.then/catch/finally
// - queueMicrotask()
// - process.nextTick() (Node.js)

// Macrotasks (lower priority):
// - setTimeout/setInterval
// - setImmediate (Node.js)
// - I/O operations
// - UI rendering (browser)

// Example showing priority:
setTimeout(console.log('macrotask 1'),0);
Promise.resolve().then(() => console.log('macrotask 1'));
setTimeout(() => console.log('macrotask 2'),0);
Promise.resolve().then(() => console.log('microtask 2'));

