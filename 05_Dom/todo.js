// Select the element: the input, the button, and the ul (the to-do list).

const input = document.querySelector('#task-input');
const button = document.querySelector('#add-btn');
const list = document.querySelector('#todo-list');

// 2. Listen for the "Add Task" Click
button.addEventListener('click', () => {
    // 3. Get the text from the input
    const taskText = input.value;

    // Stop if the input is empty
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    };

    // 4. Create a new <li> element
    const newList= document.createElement('li');
    newList.textContent = taskText;

    // 5. Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    // 6. Add an event listener to the new delete button
    deleteBtn.addEventListener('click', () => {
        newList.remove();
    });

    //  7. Append the delete button to the list item
    newList.appendChild(deleteBtn);

    // 8. Append the list item to the main list
    list.appendChild(newList);

    // 9. Clear the input field
    input.value = '';
     
})
