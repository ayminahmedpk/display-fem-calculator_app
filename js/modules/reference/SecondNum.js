import { FirstNum } from './FirstNum.js';


export class SecondNum {
    
    constructor( context, firstNum, operator ) {
        this.context  = context  ;
        this.firstNum = firstNum ;
        this.operator = operator ;

        this.context.updateDisplay(this.firstNum)
    }
    
    decimalFlag = false;
    number      = 0;
    MAX_LENGTH  = 12;


    isValidLength = (value) => {
        const length = `${value}`.length;
        return length < this.MAX_LENGTH ? length : false;
    }
    

    appendNumber = (value, decimal = false) => {
        let newNumber;
        if(decimal) { newNumber = parseFloat(`${this.number}.${value}`) }
        else { newNumber = parseFloat(`${this.number}${value}`) }
        if (this.isValidLength(newNumber)) { this.number = newNumber; }
    }


    resetCalculator = () => {
        this.number = 0;  // for now, that's all; later, states
        this.state = new FirstNum(this.context, 0);
    }


    deleteCharacter = () => {
        const newNumber   = parseFloat(`${this.number}`.slice(0,-1)) ;
        this.number       = newNumber                                ;
    }


    acceptNumber   = (value) =>  {

        if(this.decimalFlag) {
            this.appendNumber(value, true);
            this.decimalFlag = false;
            return;
        }
        
        if(this.firstInput) { this.number = 0; }
        
        if(value=='decimal') {
            this.decimalFlag = true;
            return;
        }

        this.appendNumber(value);
    }
    

    acceptControl  = (value) =>  {
        switch (value) {
    
            case 'reset' :
                this.resetCalculator();
            break;

            case 'delete' :
                this.deleteCharacter();
            break;

        }
    }


    getAnswer = () => {
        let result;
        switch (this.operator) {

            case 'add':
                result = this.firstNum + this.number;
            break;

            case 'subtract':
                result = this.firstNum - this.number;
            break;

            case 'divide':
                result = this.firstNum / this.number;
            break;

            case 'multiply':
                result = this.firstNum * this.number;
            break;

        }

        return Number.isSafeInteger(result) ? result : result.toFixed(2);
    }


    acceptOperator = (value) => {
        console.log(this.getAnswer());
        switch (value) {
            
            case 'equals':
                this.context.state = new FirstNum(this.context, this.getAnswer());
            break;

            default:
                this.context.state = new SecondNum(this.context, this.getAnswer(), value)
                break;
        }
    }


    getInput(inputType, inputValue) {
        switch (inputType) {
            
            case 'number':
                this.acceptNumber(inputValue);
            break;

            case 'control':
                this.acceptControl(inputValue);
            break;

            case 'operator':
                this.acceptOperator(inputValue);
            return;

            case 'decimal':
                this.acceptNumber(inputValue);
            break;

        }
        this.context.updateDisplay(this.number);
    }
    

    acceptDecimal  = () => { }


}

