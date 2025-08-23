// reduce - many time used in shopping cart function

let bag = [1, 2, 3, 4, 5]

const val = bag.reduce((accumilator, currentvalue) => {
        console.log(`acumilator: ${accumilator} currentvalue: ${currentvalue}`);
        let sum = accumilator + currentvalue
        return sum;
    }, 0 )

console.log(val);

// shopping cart

let cart = [{
    name: "Burger",
    price: 300,
    quantity: 3
},
{
    name: "Pizza",
    price: 400,
    quantity: 2
},
{
    name: "Moito",
    price: 100,
    quantity: 3
}
];

let discountCoupon = 50;

const itemAdd = cart.reduce((acc, item) =>{
    let price = acc + item.price * item.quantity;
    return price
}, 0);

console.log(itemAdd);


