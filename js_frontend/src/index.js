let currentOperation = null;
let firstOperand = null;

function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

function setOperation(operation) {
    const display = document.getElementById('display');
    firstOperand = parseInt(display.value);
    currentOperation = operation;
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    const secondOperand = parseInt(display.value);

    if (currentOperation === '+') {
        fetch(`http://localhost:8080/api/calculator/add?a=${firstOperand}&b=${secondOperand}`)
            .then(response => response.text())
            .then(result => { 
                display.value = result;
                return result;
             });
    }
    return Promise.resolve();
}

module.exports = { appendNumber, setOperation, calculate };
