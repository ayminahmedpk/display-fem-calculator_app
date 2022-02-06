import { FirstNum }  from './FirstNum.js';

export class Helper {
    
    MAX_LENGTH  = 10;


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
        if(this.firstInput) { this.number = 0; }
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
        if(this.firstInput) { this.firstInput = false; }
        this.context.updateDisplay(this.number);
    }


    acceptDecimal  = () => { }
}