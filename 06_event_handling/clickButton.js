const btn = document.querySelector("#button");
const noOfClick = document.querySelector("#click");
let click = 0;

btn.addEventListener("click",()=> {
   // we are using ++click to increament first and .textContent because we are only chaning the text
    ++click;
    noOfClick.textContent = click;
})