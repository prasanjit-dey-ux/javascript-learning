const commentBox = document.querySelector('#comment-box');
const commentPriview = document.querySelector('#comment-preview');

// The 'input' event fires every time the user types or deletes.
commentBox.addEventListener("input",(e) => {
    // We set the preview's text to the current value of the textarea.
    commentPriview.textContent = e.target.value

})