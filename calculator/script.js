'use strict';

const input = document.querySelector('.screen-text');
const operator = document.querySelectorAll('#operators button');
const number = document.querySelectorAll('.button-y');
const result = document.querySelector('#equals');
const clear = document.querySelector('#clear');

////////////////////////////////////////////////////////////////////////////////////////////////calculator//

let operation;

//add pressed number to screen
const addNumber = function (e) {
  e.preventDefault();
  if (input.innerHTML !== 'ERROR\n[C]:Cancel')
    input.innerHTML += e.target.innerHTML;
};

//add pressed operator to screen
const addOperator = function (e) {
  e.preventDefault();
  operation = input.innerHTML;
  operation = operation.replace(/\×/, '*');
  operation = operation.replace(/\÷/, '/');

  if (operation === '' || operation === 'ERROR\n[C]:Cancel') {
  } else if (operation[operation.length - 1].match(/\+|\-|\*|\//)) {
    //if last character on screen is an operator replace with pressed operator
    operation = operation.replace(/.$/, e.target.innerHTML);
  } else {
    operation += e.target.innerHTML;
  }
  operation = operation.replace(/\*/, '×');
  operation = operation.replace(/\//, '÷');
  input.innerHTML = operation;
};

//clear screen
const clearInput = function (e) {
  e.preventDefault();
  input.innerHTML = '';
};

//calculator outcome of characters on screen
const calculate = function (e) {
  e.preventDefault();
  operation = input.innerHTML;
  operation = operation.replace(/\×/, '*');
  operation = operation.replace(/\÷/, '/');
  if (
    operation[operation.length - 1].match(/\+|\-|\*|\//) ||
    operation === 'ERROR\n[C]:Cancel'
  ) {
    operation = 'ERROR\n[C]:Cancel';
  } else {
    operation = eval(operation);
  }
  input.innerHTML = operation;
};

number.forEach(num => num.addEventListener('click', addNumber));

operator.forEach(op => op.addEventListener('click', addOperator));

clear.addEventListener('click', clearInput);

result.addEventListener('click', calculate);
