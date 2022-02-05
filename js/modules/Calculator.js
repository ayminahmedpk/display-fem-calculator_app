
import { FirstNum } from './reference/FirstNum.js';

export class Calculator {

    constructor() {
        console.log('Calculator created');
        this.state = new FirstNum(this);
    }

    
    displayPanel = document.querySelector('.screen-text') ;

    updateDisplay = (value) => {
        this.displayPanel.innerHTML = value;
    }

    getInput(inputType, inputValue) {
        this.state.getInput(inputType, inputValue);
    }


}