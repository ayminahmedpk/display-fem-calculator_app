import { SecondNum } from './SecondNum.js';


export class FirstNum {
    
    constructor( context, number = 0 ) {
        this.context = context;
        this.number  = number;
        
        this.context.updateDisplay(this.number);
    }

    firstInput  = true;
    decimalFlag = false;
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

    acceptOperator = (value) => {
        switch (value) {
            case 'equals' :
                this.context.state = new FirstNum(this.context, this.number);
            break;
            
            default:
                this.context.state = new SecondNum(this.context, this.number, value);
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
            break;

            case 'decimal':
                this.acceptNumber(inputValue);
            break;

        }
        if(this.firstInput) { this.firstInput = false; }
        this.context.updateDisplay(this.number);
    }
    

    acceptDecimal  = ()      => { }

}

