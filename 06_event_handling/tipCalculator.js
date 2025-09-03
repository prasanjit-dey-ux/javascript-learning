//Combine your knowledge of form events and DOM manipulation to build a functional calculator. The values should update in real-time as the user types.

const billInput = document.querySelector("#bill");
const tipInput = document.querySelector("#tip");
const peopleInput = document.querySelector("#people");
const tipPerPersonSpan  = document.querySelector("#tip-per-person");
const totalPerPersonSpan = document.querySelector("#total-per-person");


function calculateTip() {
    const billAmount = parseFloat(billInput.value);
    const tipPercentage = parseFloat(tipInput.value);
    const numberOfPeople = parseInt(peopleInput.value);

    if (numberOfPeople >= 1) {
        const totalTip = billAmount * (tipPercentage/ 100);
        const totalBill = billAmount + totalTip;
        const tipPerPerson = totalBill / numberOfPeople;
        const totalPerPerson = totalBill /numberOfPeople;
        
        tipPerPersonSpan.textContent = tipPerPerson.toFixed(2);
         totalPerPersonSpan.textContent = totalPerPerson.toFixed(2);
    }

}

billInput.addEventListener('input', calculateTip);
tipInput.addEventListener("input", calculateTip);
peopleInput.addEventListener("input", calculateTip);

calculateTip();