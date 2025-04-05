// Function to insert numbers or operators into the display
function insert(value) {
    document.getElementById('display').value += value;
}

// Function to insert scientific functions
function insertScientificFunction(func) {
    let display = document.getElementById('display');
    if (func === 'Math.sqrt(') {
        display.value += '√(';
    } else {
        display.value += func;
    }
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete the last character in the display
function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result of the expression
function calculate() {
    let expression = document.getElementById('display').value;
    
    // Check for division by zero error
    if (expression.includes('/0')) {
        document.getElementById('display').value = 'Cannot divide by zero';
    } else {
        try {
            let result = eval(expression); // Eval evaluates the mathematical expression
            document.getElementById('display').value = result;
        } catch (error) {
            document.getElementById('display').value = 'Error';
        }
    }
}

// Add keyboard support
window.addEventListener('keydown', function(event) {
    if (event.key >= '0' && event.key <= '9' || event.key === '.' || event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.key === '%') {
        insert(event.key);
    } else if (event.key === 'Enter') {
        calculate();
    } else if (event.key === 'Backspace') {
        backspace();
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});

// Double click to clear the display
let clearButton = document.querySelector('.clear');
clearButton.addEventListener('dblclick', clearDisplay);
