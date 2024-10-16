const display = document.getElementById('display');
let currentInput = '';
let secondInput = '';
let operation = '';
let result = '';
let operator = '';


function clearDisplay(key){
    display.value = "";
};

function getNumber(num){
    display.value += num;
};

function getOperator(op){
    console.log(op);
};

function setDecimal(dec){
    console.log(dec);
};

function getSign() {
    let currentInput = Number(display.value);
    if (currentInput > 0) {
        currentInput = -Math.abs(currentInput); // Turn it negative
    } else {
        currentInput = Math.abs(currentInput); // Turn it positive
    }
    display.value = currentInput; // Update the display with the new value
}


function deleteLast(del){
    currentInput = display.value;
    let displayArray = currentInput.split('');
    displayArray.pop();
    currentInput = displayArray.join('');
    display.value = currentInput;
};

function calculate(operation){
    console.log(operation);
};
