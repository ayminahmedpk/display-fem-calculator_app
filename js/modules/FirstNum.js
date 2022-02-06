import { SecondNum } from './SecondNum.js';
import { Helper } from './Helper.js';


export class FirstNum extends Helper {
    
    constructor( context, number = 0 ) {
        super();
        this.context = context;
        this.number  = number;
        
        this.context.updateDisplay(this.number);
    }

    firstInput  = true;
    decimalFlag = false;

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
    

}

