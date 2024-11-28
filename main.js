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
    equals.disabled = true;
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
            enableEqualsButton();
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

const equals = document.querySelector("#equals");
equals.disabled = true;

const enableEqualsButton = () => {
    if(b) {
        equals.disabled = false;
    }
}

equals.addEventListener("click", () => {
    // Check division by 0
    if(operator == "/" && b == "0") {
        display.textContent = "Nice try";
    } 
    // Perform calculation 
        a = trimDecimal(operate(+a,operator,+b));
        b = "";
        operator = "";
        display.textContent = a;
})

const trimDecimal = (num) => {
    if(num % 1) {
        return +num.toFixed(4);
    }
    return num;
}