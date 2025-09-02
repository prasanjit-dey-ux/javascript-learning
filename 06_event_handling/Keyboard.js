// Goal: Learn to use keydown and inspect the event object for key information.

const keyInput = document.querySelector("#key-input");
const keyOutput = document.querySelector("#key-output");

keyInput.addEventListener("keydown",(e) => {
    // We update the HTML to show properties from the event object
    keyOutput.innerHTML = `
        <p>event.key: ${e.key}</p>
        <p>event.code: ${e.code}</p>
    `
})