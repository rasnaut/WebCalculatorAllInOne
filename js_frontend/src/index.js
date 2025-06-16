 


function calculateLn() {
    const display = document.getElementById('display');
    const firstOperand = parseFloat(display.value);

    if (firstOperand <= 0 || isNaN(firstOperand)) {
        display.value = 'Error';
        return;
    }
    fetch(`http://localhost:8080/api/calculator/ln?a=${firstOperand}`)
        .then(response => response.text())
        .then(result => {
            display.value = result;
            return result;
        });
}
