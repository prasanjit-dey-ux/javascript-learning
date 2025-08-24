const num = [1, 2, 3, 4, 5, 6];

// we need to store it because in filter we return something
const vault = num.filter((n) => n> 2);
console.log(vault);

// now for eg if we used it like this () => {} then we need to write return becuause we are in a scope.

const vault2 = num.filter((n2) => {
    return n2 < 5 // if we didnt used return then it would be []
})

console.log(vault2);


// this is another way to do it in foreach

const mynum = []

num.forEach((n3) => {
    if (n3 < 5) {
        mynum.push(n3);
    }
})

console.log(mynum);



