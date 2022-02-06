import { FirstNum } from './FirstNum.js';
import { Helper } from './Helper.js';


export class SecondNum extends Helper{
    
    constructor( context, firstNum, operator ) {
        super()
        this.context  = context  ;
        this.firstNum = firstNum ;
        this.operator = operator ;

        this.context.updateDisplay(this.firstNum)
    }


    number = 0;


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
    

}