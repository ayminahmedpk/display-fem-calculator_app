import { FirstNum } from './FirstNum.js';


// Common tasks like processing input, updating displayed output, etc.
// Inherited by both states.

export class CalculatorState {

    // numberString - this is what a state will be most concerned with
    // it means different things for different state, but think of it as the
    // value that it is collecting from the user

    firstInput = true; // Only gets falsed after at first NUMBER

    generateOutput = (value) => {
        let generatedOutput;
        
        if (this.numberString.includes('.')) { 
            const floatChunks = value.split('.');
            generatedOutput   = parseInt(floatChunks[0]).toLocaleString();
            generatedOutput  += '.';
            generatedOutput  += floatChunks[1];
        }
    
        else { generatedOutput = parseInt(value).toLocaleString(); }
        
        return generatedOutput;
    }


    updateDisplay = (value) => {
        //this.context.updateInputField(value);
        this.context.updateOutputField(this.generateOutput(value));
    }


    processReset = () => {
        this.context.state = new FirstNum(this.context);
    }


    processDel = () => {
        if (this.numberString.length == 1 ) {
            if (this.numberString == '0') {}
            else this.numberString = '0';
        }
        else {
            this.numberString = this.numberString.slice(0, -1);
        }
    }


    processNumber = (character) => {

        // if decimal at first input, treat as if received "0."
        if ( (character=='.') && this.numberString.includes('.') && this.firstInput==true) {
            this.numberString = '0.';
            return;
        }

        // ignore . if already decimal
        if ( (character=='.') && this.numberString.includes('.')) { return; }

        // ignore 0 if already 0
        if ( (character=='0') && (this.numberString=='0' || this.numberString=='-0' ) ) { return; }
        
        // replace if 0
        if ( this.numberString=='0' && (character!='.') ) { 
            this.numberString = character;
            return;
        }

        // replace if -0, keep -
        if ( this.numberString=='-0' && (character!='.') ) {  
            this.numberString = '-' + character;
            return;
        }

        // replace if first input - should come below other conditionals
        if ((this.firstInput==true) && (character!='.')) {
            this.numberString = character;
            return;
        }

        this.numberString += character; // in all other cases, append to string
    }
    
    
    // Does nothing - Override this
    processEquals = () => {  }
    
    
    // Does nothing - Override this
    processOperator = (character) => {  }


    processInput = (character) => {
        const numbers   = '.0123456789';
        const operators = '+-*/'
        const equals    = 'e'
        const reset     = 'r'
        const del       = 'd'
    
        if (numbers.includes(character) ) {
            this.processNumber(character);
            this.firstInput = false;
        }
        if (operators.includes(character)) {
            this.processOperator(character);
            return;
        }
        if (equals.includes(character) ) {
            this.processEquals();
            return;
        }
        if (reset.includes(character)) {
            this.processReset();
            return;
        }
        if (del.includes(character)) {
            this.processDel();
            this.firstInput = false;
        }
        this.updateDisplay(this.numberString);
    }


}
