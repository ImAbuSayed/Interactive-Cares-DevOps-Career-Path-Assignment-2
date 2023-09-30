// Calculator logic
const input = document.getElementById('input');

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.getElementById('calculate');
const clear = document.getElementById('clear');
const decimal = document.getElementById('.');

let firstValue = '';
let operator = '';
let secondValue = '';

numbers.forEach(number => {
  number.addEventListener('click', function(){
    input.value += this.id;
  })  
});

operators.forEach(op => {
  op.addEventListener('click', function() {
    firstValue = input.value;
    operator = this.id;
    input.value = '';
  })
});

equal.addEventListener('click', calculate);
clear.addEventListener('click', clearInput);
decimal.addEventListener('click', addDecimal);

function calculate() {
  secondValue = input.value;
  input.value = operate(firstValue, operator, secondValue);
}

function addDecimal() {
  if(!input.value.includes('.')) {
    input.value += '.';
  }
}

function clearInput() {
  input.value = '';
  firstValue = '';
  operator = '';
  secondValue = '';
}

function operate(a, op, b) {
  a = Number(a);
  b = Number(b);
  
  switch(op) {
    case '+':
      return a + b;
    case '-':  
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return null;
  }
}
