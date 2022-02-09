
import './modules/Theme.js';

import {Calculator} from './modules/Calculator/Calculator.js';

const displayElement = document.querySelector('.screen-text');
window.calculator = new Calculator(displayElement);

const buttonHandler = (e) => {
    window.calculator.processInput(e.currentTarget.getAttribute('data-key-value'));
};

document.querySelectorAll('.keypad button').forEach(btn => {
    btn.addEventListener('click', buttonHandler);
});