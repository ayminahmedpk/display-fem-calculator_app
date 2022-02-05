import { SecondNum } from './SecondNum.js';


export class FirstNum {
    
    constructor( context, number = 0 ) {
        this.context = context;
        this.number  = number;
        
        this.context.updateDisplay(this.number);
    }

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

    acceptOperator = (value) => {
        this.context.state = new SecondNum(this.context, this.number, value);
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

        }
        this.context.updateDisplay(this.number);
    }
    

    acceptDecimal  = ()      => { }


}

