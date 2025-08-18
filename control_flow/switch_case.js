/*
Note:

Many time there will be a value which we need to check with multiple condition and that we use switch case 
It also very usefull when we will learn redux.

switch (key) {
    case value:
        break;
    default:
        break;
}

the key is the thing which we want to check everytime, the value is that through which we check and 
break is used to break the control flow

*/

let month = 4

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;    
    case 4:
        console.log("April");
        break;

    default:
        console.log("default case");
        break;
}
