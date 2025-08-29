/*
Create a practice.js file. Your mission is to write the JavaScript code to select the following elements. Use console.log() to check if you've successfully grabbed them.

Select the <h1> element using its ID.

Select the "Add Item" button using its class .add.

Select all the list items (the <li> elements) using their shared class.

Select the list item that is also marked as a priority (it has two classes).

Select only the <span> that is inside the <footer>.
*/



const mainHeading = document.querySelector('#main-heading');
console.log('Main Heading:', mainHeading);

const btn = document.querySelector(".add");
// console.log(`button: ${btn}`); // not to use temeral literal becuase we will get the obj not the exact button
console.log('button:', btn)

const listItem = document.querySelectorAll('.list-item')
console.log('Item Lists:', listItem);

const listItemPriority = document.querySelectorAll('.priority')
console.log('Priority Item Lists:', listItemPriority);

const span = document.querySelector('footer span');
console.log('span:', span);
