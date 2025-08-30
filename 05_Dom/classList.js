const emailInput = document.querySelector('#email');
const validateBtn = document.querySelector('#validate-btn');
const errorMessage = document.querySelector('#error-message');


validateBtn.addEventListener("click", () => {
    const emailValue = emailInput.value;

    if (emailValue.includes('@') === false) {
        // a) Set the error message text
        errorMessage.textContent = 'Please enter a valid email.';
        // b) Remove the 'hidden' class to show the message
        errorMessage.classList.remove('hidden');
        // c) Add the 'error-border' class to the input
        emailInput.classList.add('error-border');
    } else {
        // If it IS a valid email, make sure the 'error' class is removed
       errorMessage.classList.add('hidden');
        emailInput.classList.remove('error-border');
    }

})

