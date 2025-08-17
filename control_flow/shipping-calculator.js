/*
This is the kind of logic you'll find on any e-commerce site where the shipping cost depends on the destination.

The Problem:

Write a script that determines the shipping cost based on a country variable.

If the country is "India", the cost is $5.
If the country is "Canada", the cost is $7.
If the country is "UK", the cost is $10.
For any other country, log a message saying "Shipping not available."

The Logic Breakdown: 

The Data: We need a variable to hold the destination country, which will be a string.
The Decision: We have more than two options ("India", "Canada", "UK", or something else). This is the perfect use case for an if...else if...else chain. This allows us to check multiple conditions in order.
The Catch-All: The final else statement is crucial. It acts as a default case, catching any country that didn't match the previous conditions.

*/

let country = "India"

let shippingCost;

console.log(`Calculating shippingcost for ${country}`)

if (country === "India") {
    shippingCost = "$5";
} else if (country === "Canada") {
    shippingCost = "$7";
} else if (country === "UK") {
    shippingCost = "$10"
} else {
    console.log(`Not available.`);
}


if (shippingCost === "Not available" ) {
    console.log(`Sorry, shipping is not available to your country.`);
} else {
        console.log(`Shipping cost is ${shippingCost}`);
}


// Its an example of nested loop.
