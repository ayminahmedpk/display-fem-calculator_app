import { FirstNum } from './CalculatorStates/FirstNum.js';


export class Calculator {

    constructor(displayElement = null) {
        this.state          = new FirstNum(this);
        this.displayElement = displayElement;
    }

    // To be able to see the actual stored working number
    // Must also be enabled in State.updateDisplay
    // updateInputField = (value) => {
    //     document.querySelector('.stored').innerHTML = 'Stored: ' + value;
    // }

    
    updateOutputField = (value) => {
        if (this.displayElement) {
            this.displayElement.innerHTML = value;
        }
        else {
        }
    }


    processInput = (character) => {
        this.state.processInput(character)
    }


}