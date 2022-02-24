
import './modules/Theme.js';

import {Calculator} from './modules/Calculator/Calculator.js';

const displayElement = document.querySelector('.screen-text');
window.calculator = new Calculator(displayElement);

const keypadHandler = (e) => {
    const button = e.target.closest('.key');
    if (button) {
        window.calculator.processInput(button.getAttribute('data-key-value'));
    }
}

document.querySelector('.keypad').addEventListener('click', keypadHandler);