let var1 = 0;
let var2 = 0;

const numberButtons = document.querySelectorAll(".btn-number");
const operatorButtons = document.querySelectorAll(".btn-operator");
const clearButton = document.querySelector(".btn-clear");
const deleteButton = document.querySelector(".btn-delete");
const displayValue = document.querySelector(".calculator-screen");

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', () => {
        if (["+", "-", "*", "/"].includes(displayValue.textContent.charAt(displayValue.textContent.length-1))) {
            displayValue.textContent = numberButton.textContent;
        } else {
            if (displayValue.textContent == "0") {
                displayValue.textContent = numberButton.textContent;
            } else {
                displayValue.textContent += numberButton.textContent;
            }
        }
    })
})

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        switch (operatorButton.textContent) {
            case "+":
                operator = "add";
                var1 = parseInt(displayValue.textContent);
                displayValue.textContent += operatorButton.textContent;
                break;
            case "-":
                operator = "subtract";
                var1 = parseInt(displayValue.textContent);
                displayValue.textContent += operatorButton.textContent;
                break;
            case "*":
                operator = "multiply";
                var1 = parseInt(displayValue.textContent);
                displayValue.textContent += operatorButton.textContent;
                break;
            case "/":
                operator = "divide";
                var1 = parseInt(displayValue.textContent);
                displayValue.textContent += operatorButton.textContent;
                break;
            case "=":
                var2 = parseInt(displayValue.textContent);
                displayValue.textContent = operate(operator, var1, var2);
        }
    })
})

clearButton.addEventListener('click', () => displayValue.textContent = "0");
deleteButton.addEventListener('click', () => displayValue.textContent = displayValue.textContent.substring(0, displayValue.textContent.length - 1));


function add(var1, var2) {
    return var1 + var2;
}

function subtract(var1, var2) {
    return var1 - var2; 
}

function multiply(var1, var2) {
    return var1 * var2;
}

function divide(var1, var2) {
    return var1 / var2;
}

function operate(operator, var1, var2) {
    switch (operator) {
        case "add":
            return add(var1, var2);
        case "subtract":
            return subtract(var1, var2);
        case "multiply":
            return multiply(var1, var2);
        case "divide":
            return divide(var1, var2);
    }
}