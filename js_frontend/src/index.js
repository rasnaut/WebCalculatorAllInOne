const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080';

console.log(`Using backend URL: ${backendUrl}`);

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
        fetch(`http://${backendUrl}/api/calculator/add?a=${firstOperand}&b=${secondOperand}`)
            .then(response => response.text())
            .then(result => { 
                display.value = result;
                return result;
             });
    }
    if (currentOperation === '*') {
        fetch(`http://${backendUrl}/api/calculator/multiply?a=${firstOperand}&b=${secondOperand}`)
            .then(response => response.text())
            .then(result => { 
                display.value = result;
                return result;
             });
    }
    if (currentOperation === '/') {
        fetch(`http://${backendUrl}/api/calculator/devide?a=${firstOperand}&b=${secondOperand}`)
            .then(response => response.text())
            .then(result => { 
                display.value = result;
                return result;
             });
    }
    return Promise.resolve();
}

module.exports = { appendNumber, setOperation, calculate };
