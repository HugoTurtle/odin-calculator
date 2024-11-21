const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

const operate = (a, operator, b) => {
    switch(operator) {
        case '+' : 
            return add(a, b);
        case '-' : 
            return subtract(a, b);
        case '*' : 
            return multiply(a, b);
        case '/' : 
            return divide(a, b);
        default :
            console.log("Error");
    }
}
let a = "";
let b = "";
let operator = "";
let display = document.querySelector("#display");

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
    a = "";
    b = "";
    operator = "";
    display.textContent = "0000"
})

let numberContainer = document.querySelector(".number-container")
let numberButtons = numberContainer.querySelectorAll("button");
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            if(operator === "") {
                a += button.textContent;
                display.textContent = a;
            }
            else if(!(operator === "")) {
                b += button.textContent;
                display.textContent = b;
            }
        })
    });
    
let operatorContainer = document.querySelector(".operator-container")
let operatorButtons = operatorContainer.querySelectorAll("button");
    operatorButtons.forEach(button => {
        button.addEventListener("click", () => {
            operator = button.textContent;
            display.textContent = operator;
        })
    });
