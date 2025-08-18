// its an example of truthy value like here we are assuming there is a value.

let userEmail = "jiit@gmail.com"

if (userEmail) {   
    console.log(`your email is ${userEmail}`);
} else {
    console.log("email is not available")
}

// but if i had add "" then it would be email not available because empty string become falsy

/*
falsy value eg
false, 0, -0, BigInt 0n (most probably use in c/c++, code engine ig), "", NaN, null, undefined

truthy value
everything except those above
" ", "0", 'false', " " so every thing inside string will be truthy value
[], {}, function(){} empty function is also consider as truthy 
*/

// how to find if my array and object is empty or not

let arr = [];

if (arr.length === 0) {
    console.log("array is empty");
}

// now for object first we need to transform the object into array and then check

let obj = {};

if (Object.keys(obj).length === 0) {
     console.log("object is empty");
}

// note:
// false == 0 is true
// 0 == "" is true
// 0 == false is true

// Nullish coalescing operator ?? it mainly used for null and undefined

// so for eg we are getting something from firebase or appwrite now, we normally get two response so if null came we can ignore it

let val1, val2, val3, val4;

val1 = 20 ?? 5 // 20
val2 = null ?? 20   //20 because we are ignoring null
val3 = undefined ?? 4 //  same here we are ignoring undefined

val1 = null ?? undefined // undefined because  it checks the left side (null), finds that it's a "nullish" value, and therefore returns the value on the right side, which in this case is undefined.

console.log(val1, val2, val3, val4);


// ternary operator
// condition ? true : false