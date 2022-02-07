import { CalculatorState } from './CalculatorState.js';
import { SecondNum } from './SecondNum.js';

export class FirstNum extends CalculatorState {
    
    constructor( context, numberString = '0' ) {
        super();
        this.context      = context      ;
        this.numberString = numberString ;
        
        this.updateDisplay(this.numberString);
    }


    processEquals = () => {
        this.context.state = new FirstNum(this.context, this.numberString);
    }


    // Overrides State
    processOperator = (character) => {
        if ( (character == '-') && (this.numberString == '0') ) {
            this.numberString = '-0';
            this.updateDisplay(this.numberString);
            return;
        }

        if ( (character == '+') && (this.numberString == '-0') ) {
            this.numberString = '0';
            this.updateDisplay(this.numberString);
            return;
        }

        this.context.state = new SecondNum(this.context, this.numberString, character, this.numberString);
    }


}

