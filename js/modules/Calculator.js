
export class Calculator {

    constructor() {
        console.log('Calculator created');
    }
    

    state      = null ;
    userchoice = ''   ;
    cache      = 0    ;
    
    MAX_LENGTH = 12;
    

    displayCache = () => {
        const displayPanel     = document.querySelector('.screen-text') ;
        displayPanel.innerHTML = this.cache.toLocaleString()            ;
    }


    isValidLength = (value) => {
        const length = `${value}`.length;
        return length < this.MAX_LENGTH ? length : false;
    }
    

    appendCache = (value) => {
        const newCache   = parseFloat(`${this.cache}${value}`)
        if (this.isValidLength(newCache)) { this.cache = newCache; }
    }

    resetCalculator = () => {
        this.cache = 0;  // for now, that's all; later, states
    }

    deleteCharacter = () => {
        const newCache   = parseFloat(`${this.cache}`.slice(0,-1)) ;
        this.cache       = newCache                    ;
    }


    acceptNumber   = (value) =>  { this.appendCache(value) }
    
    
    acceptOperator = (value) =>  { }
    
    
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
    
    
    acceptDecimal = () => { }
    

    getInput(inputType, inputValue) {
        switch (inputType) {
            
            case 'number':
                this.acceptNumber(inputValue);
            break;

            case 'control':
                this.acceptControl(inputValue);
            break;

        }
        this.displayCache();
    }


}