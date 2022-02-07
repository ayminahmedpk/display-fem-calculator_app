import { CalculatorState } from './CalculatorState.js';
import { FirstNum } from './FirstNum.js';

export class SecondNum extends CalculatorState {

    constructor( context, firstNum, operator, numberString = '0') {
        super();
        this.context      = context       ;
        this.firstNum     = firstNum      ;
        this.operator     = operator      ;
        this.numberString = numberString  ;
        
        this.updateDisplay(this.numberString);
    }


    computeAnswer = () => {
        let answer;
        switch (this.operator) {
            
            case '+' :
                answer = parseFloat(this.firstNum) + parseFloat(this.numberString);
                break;
    
            case '-' :
                answer = parseFloat(this.firstNum) - parseFloat(this.numberString);
                break;
    
            case '*' :
                answer = parseFloat(this.firstNum) * parseFloat(this.numberString);
                break;
    
            case '/' :
                answer = parseFloat(this.firstNum) / parseFloat(this.numberString);
                break;
        }

        if (!Number.isSafeInteger(answer) ) { // if decimal
            answer = answer.toFixed(2);
        }
        return answer;
    }


    processEquals = () => {
        let answer = this.computeAnswer();
        this.context.state = new FirstNum(this.context, `${answer}`);
    }


    processOperator = (character) => {
        
        // Overwrite the operator with the latest one pressed
        if (this.firstInput) {
            this.operator = character;
            return;
        }

        let answer = this.computeAnswer();
        this.context.state = new SecondNum(this.context, answer, character, `${answer}`);
    }
    

}