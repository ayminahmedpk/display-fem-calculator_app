
import {Calculator} from './modules/Calculator/Calculator.js';

import './modules/Theme.js';

const displayElement = document.querySelector('.screen-text');
window.calculator = new Calculator(displayElement);

const buttonHandler = (e) => {
    //console.log(e.currentTarget);
    window.calculator.processInput(e.currentTarget.getAttribute('data-key-value'));
};

document.querySelectorAll('.keypad button').forEach(btn => {
    btn.addEventListener('click', buttonHandler);
})