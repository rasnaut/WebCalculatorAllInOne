let backendUrl = 'http://localhost:8080';

if (typeof process !== 'undefined' && process.env && process.env.REACT_APP_BACKEND_URL) {
    backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080';
}

console.log(`Using backend URL: ${backendUrl}`);

let currentOperation = null;
let firstOperand = null;

function appendNumber(number) {
    console.log('index.html appendNumber with argument:', number);
    const display = document.getElementById('display');
    display.value += number;
}

function setOperation(operation) {
    console.log('index.html set operation:', operation);
    const display = document.getElementById('display');
    firstOperand = parseInt(display.value);
    currentOperation = operation;
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    const secondOperand = parseInt(display.value);

    if (currentOperation === '+') {
        fetch(`${backendUrl}/api/j_calculator/add?a=${firstOperand}&b=${secondOperand}`)
            .then(response => response.text())
            .then(result => { 
                display.value = result;
                return result;
             });
    }
    if (currentOperation === '*') {
        fetch(`${backendUrl}/api/j_calculator/multiply?a=${firstOperand}&b=${secondOperand}`)
            .then(response => response.text())
            .then(result => { 
                display.value = result;
                return result;
             });
    }
    if (currentOperation === '/') {
        fetch(`${backendUrl}/api/j_calculator/devide?a=${firstOperand}&b=${secondOperand}`)
            .then(response => response.text())
            .then(result => { 
                display.value = result;
                return result;
             });
    }
    if (currentOperation === '*') {
        fetch(`${backendUrl}/api/j_calculator/multiply?a=${firstOperand}&b=${secondOperand}`)
            .then(response => response.text())
            .then(result => { 
                display.value = result;
                return result;
             });
    }
    if (currentOperation === '/') {
        fetch(`${backendUrl}/api/j_calculator/devide?a=${firstOperand}&b=${secondOperand}`)
            .then(response => response.text())
            .then(result => { 
                display.value = result;
                return result;
             });
    }
    return Promise.resolve();
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = { appendNumber, setOperation, calculate };
}
