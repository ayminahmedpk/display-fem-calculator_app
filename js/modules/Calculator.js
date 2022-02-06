
import { FirstNum } from './FirstNum.js';

export class Calculator {

    constructor() {
        console.log('Calculator created');
        this.state = new FirstNum(this);
    }

    
    displayPanel = document.querySelector('.screen-text') ;

    updateDisplay = (value) => {
        let displayNumber;
        if(Number.isSafeInteger(value)) {
            displayNumber = value.toLocaleString();
        }
        else {
            const splitNumber = value.toString().split('.');
            splitNumber[0] = parseInt(splitNumber[0]).toLocaleString();
            displayNumber = `${splitNumber[0]}.${splitNumber[1]}`;
        }
        this.displayPanel.innerHTML = displayNumber;
    }

    getInput(inputType, inputValue) {
        this.state.getInput(inputType, inputValue);
    }

}