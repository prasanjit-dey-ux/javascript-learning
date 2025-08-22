/* Map - Transformer
what it does is it?

The .map() method creates a brand new array by taking an original array and performing an operation on every single element. The key things to remember are:

- It always returns a new array.
- The new array will always have the same length as the original one.
- It does not change the original array.
*/

const map = new Map()
map.set('IND', "India")
map.set('RUS', "Russia")
map.set('USA', "United State")
map.set('IND', "India")

// console.log(map);

for(const [key, value] of map){
    console.log(key,":", value);
    
}

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]

const mynum = number.map((num) => num + 10 );

console.log(`Adding 1to each number: ${mynum}`);


// Chaining, when we try to use more than one mode together
const mynum2 = number
            .map((num) => num * 10)
            .map((num) => num + 1)
            .filter((num) => num >= 50);

console.log(mynum2);


