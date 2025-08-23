let courses = [{
    courseName: "Web Development",
    price: 5999
},
{
    courseName: "Web3 Development",
    price: 5999
},
{
    courseName: "DSA",
    price: 5999
},
{
    courseName: "Game Development",
    price: 5999
},
];

const discountCoupon = [
    {
        couponName: "WELCOME50",
        couponValue: 50
    },
]



const shoppingCart = courses.reduce((acc, item) => {
    let subtotal = acc + item.price
    return subtotal;
}, 0);

console.log(shoppingCart);
