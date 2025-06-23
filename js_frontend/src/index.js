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
function calculatePow2() {
    const firstOperand = parseFloat(document.getElementById('display').value); // замените 'display' на ваш id

    if (isNaN(firstOperand)) {
        alert("Введите число");
        return;
    }

    fetch(`http://localhost:8080/api/calculator/pow2?a=${firstOperand}``)
        .then(response => response.json()) // если сервер возвращает JSON
        .then(result => {
            document.getElementById('display').value = result; // покажи результат
        })
        .catch(error => {
            console.error("Ошибка:", error);
            alert("Не удалось выполнить возведение в квадрат");
        });
}


module.exports = { appendNumber, setOperation, calculate };
