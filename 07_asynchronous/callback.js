// A callback is a function passed as an argument to another function, executed after some operation completes.

// Simple callback example

function greetUser(name, callback) {
    console.log("Hello" + name);
    callback();
}

function afterGreet() {
    console.log("Nice to meet you");
}

greetUser('John', afterGreet);

// Hello John nice to meet you