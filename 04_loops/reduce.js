// reduce - many time used in shopping cart function

let bag = [1, 2, 3, 4, 5]

const val = bag.reduce((acumilator, currentvalue) => {
        console.log(`acumilator: ${acumilator} currentvalue: ${currentvalue}`);
        let sum = acumilator + currentvalue
        return sum;
    }, 0 )

console.log(val);

