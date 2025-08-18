
for(let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
}

for(let i = 0; i <= 10; i++) {
    // console.log(`the outer loop is : ${i}`);
    for(let j = 0; j <= 10; j++) {
        // console.log(`The outer loop is ${i} and the inner loop is ${j}`);
    }
}

// we can make a number table

for (let i = 1; i <= 10; i++) {
    // console.log(`The table of ${i}:`);
    for (let j = 1; j <= 10; j++) {
    //    console.log(`${i} * ${j} = ${i*j}`);
    }
}

// using array in loop
let food = ["Biriyani", "Pizza", "Burger"];

console.log(food.length);

for (let i = 0; i < food.length; i++) {
    const menu = food[i];
    console.log(menu);
}


// break and continue


// break: it break the flow same as we learned in control flow
for (let index = 0; index <= 10; index++) {
    if (index == 6) {
        console.log(`founded 6`);
        break;
    }
    console.log(index);
}


// continue: what continue does is it gives another chance that why even if 6 founded we continue
for (let index = 0; index <= 10; index++) {
    if (index == 6) {
        console.log(`founded 6`);
        continue;
    }
    console.log(index);
}




