const display = document.getElementById('display');
let currentInput = '0';  
let previousInput = 0;   
let operator = '';       


function getNumber(num) {
    currentInput = display.value;
    if (operator != ''){
        previousInput = Number(currentInput);   
        display.value = '';
    }
    if (display.value === '0' && !display.value.includes('.')) {
        display.value = num;  
    } else {   
        display.value += num; 
    } 
    currentInput = display.value;


}


function setDecimal() {
    if (!display.value.includes('.')) {
        display.value += '.'; 
    }
    currentInput = display.value;
}


function changeSign() {
    currentInput = Number(display.value);
    currentInput = -currentInput;
    display.value = currentInput;
}


function defineOperator(op) {
    operator = op;
    previousInput = Number(currentInput);  
    display.value = currentInput;
    currentInput = '0';
  

    console.log(operator);
    console.log(previousInput);
    console.log(currentInput);
}


function clearDisplay() {
    display.value = '0';
    currentInput = '0';
    previousInput = 0;
    operator = '';
}


function deleteLast() {
    currentInput = display.value;
    currentInput = currentInput.slice(0, -1) || '0';  
    display.value = currentInput;
}


function calculate() {
    let result = 0;
    currentInput = Number(currentInput);  
    
    switch (operator) {
        case '+':
            result = previousInput + currentInput;
            break;
        case '-':
            result = previousInput - currentInput;
            break;
        case '*':
            result = previousInput * currentInput;
            break;
        case '/':
            result = previousInput / currentInput;
            break;
        case '%':
            result = previousInput % currentInput;
            break;
        default:
            return;
    }

    display.value = result;   
    currentInput = result;    
    previousInput = 0;        
    operator = '';            
}
