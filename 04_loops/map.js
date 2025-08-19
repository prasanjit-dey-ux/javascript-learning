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
