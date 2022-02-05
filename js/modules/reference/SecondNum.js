import { FirstNum } from './FirstNum.js';


export class SecondNum {
    
    constructor( context, firstNum, operator ) {
        this.context  = context  ;
        this.firstNum = firstNum ;
        this.operator = operator ;
    }
    
    number     = 0;
    MAX_LENGTH = 12;


    isValidLength = (value) => {
        const length = `${value}`.length;
        return length < this.MAX_LENGTH ? length : false;
    }
    

    appendNumber = (value) => {
        const newNumber   = parseFloat(`${this.number}${value}`)
        if (this.isValidLength(newNumber)) { this.number = newNumber; }
    }


    resetCalculator = () => {
        this.number = 0;  // for now, that's all; later, states
    }


    deleteCharacter = () => {
        const newNumber   = parseFloat(`${this.number}`.slice(0,-1)) ;
        this.number       = newNumber                                ;
    }


    acceptNumber   = (value) =>  { this.appendNumber(value) }
    

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
                return this.firstNum + this.number;

            case 'subtract':
                return this.firstNum - this.number;

            case 'divide':
                return this.firstNum / this.number;

            case 'multiply':
                return this.firstNum * this.number;

        }
        return result;
    }


    acceptOperator = (value) => {
        console.log(this.getAnswer());
        switch (value) {
            case 'equals':
                this.context.state = new FirstNum(this.context, this.getAnswer());
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

        }
        this.context.updateDisplay(this.number);
    }
    

    acceptDecimal  = () => { }


}

