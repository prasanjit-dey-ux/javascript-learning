// Note:

// = is use for assinging value
// == is use to check if the value is equal or not
// === is for check both the value and data types is equal or not, and its also called strict equal.

if(2 == "2" ) {
    console.log("Excuted");
} else {
    console.log("Not executed");
    
};

if ( 2 === "2") {
    console.log("Executed");
} else {
    console.log("Not executed, because === operator also check the types");
}

// != is not equalto, or we can say Loose Inequality. Does perform type coercion. It tries to convert the values to a common type before comparing them.
// !== is not equalto, or we can say Strict Inequality. Does not perform type coercion. If the types are different, the values are considered unequal.

if (5 != "5") {
    console.log(`true`);
}else {
    console.log(`false`);
}

// output is false, because != type coercion it change values to common type

if (5 !== "5") {
    console.log(`true`);
}else {
    console.log(`false`);
}

// output is True, because !== doesnot perfom type coercion to change values to common type.

// Comparing zero and false
0 !== false // true  (Types are different: number vs. boolean)
0 != false  // false (The boolean false is converted to the number 0 before comparing)

// Comparing null and undefined
null !== undefined // true  (Types are different)
null != undefined  // false (A special rule in loose comparison makes them equal)