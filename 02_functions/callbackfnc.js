// what is callback fnc in Javascript

setTimeout(function() {
    console.log("timer");
}, 5000)

function x(y){
    console.log("x");
    y();
}
x(function x() {
    console.log("y")
})

// 