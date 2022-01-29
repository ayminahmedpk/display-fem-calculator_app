import {Menu} from './menu.js';
import {Submenu} from './menu.js';

export class Mainmenu extends Menu {

    name = 'Main Menu';
    
    menuText = '\n\n' +
               '1. Menu A \n' +
               '2. Menu B \n' +
               '3. Menu C \n' +
               '4. Exit \n' +
               '\nYour choice: ';

    evaluateChoice(choice) {
        
        switch (choice) {

            case '1':
                this.context.state = new A1(this.context, this);
                break;

            case '2':
            this.context.state = new B1(this.context, this);
            break;

            case '3':
            this.context.state = new C1(this.context, this);
            break;

            case '4':
                this.exitState();
                break;

            default:
                alert('Invalid choice');
        }
    }
}



export class A1 extends Submenu {
    
    name = 'A1';
    
    menuText = '\n\n' +
               '1. Return to Main Menu \n' +
               '2. Got to A2 \n' +
            //    '3. Exit \n' +
               '\nYour choice: ';

    evaluateChoice(choice) {
        
        switch (choice) {

            case '1':
                this.previousMenu();
                break;

            case '2':
                this.context.state = new A2(this.context, this);
                break;

            
            // case '3':
            //     this.exitState();
            //     break;

            default:
                alert('Invalid Choice');
        }
    }
}

export class A2 extends Submenu {
    
    name = 'A2';
    
    menuText = '\n\n' +
               '1. Return to A1 \n' +
               '2. Got to A3 \n' +
            //    '3. Exit \n' +
               '\nYour choice: ';

    evaluateChoice(choice) {
        
        switch (choice) {

            case '1':
                this.previousMenu();
                break;

            case '2':
                this.context.state = new A3(this.context, this);
                break;

            
            // case '3':
            //     this.exitState();
            //     break;

            default:
                alert('Invalid Choice');
        }
    }
}

export class A3 extends Submenu {
    
    name = 'A3';
    
    menuText = '\n\n' +
               '1. Return to A2 \n' +
            //    '2. Exit \n' +
               '\nYour choice: ';

    evaluateChoice(choice) {
        
        switch (choice) {

            case '1':
                this.previousMenu();
                break;
            
            // case '2':
            //     this.exitState();
            //     break;

            default:
                alert('Invalid Choice');
        }
    }

}

export class B1 extends Submenu {
    
    name = 'B1';
    
    menuText = '\n\n' +
               '1. Return to Main Menu \n' +
               '2. Got to B2 \n' +
            //    '3. Exit \n' +
               '\nYour choice: ';

    evaluateChoice(choice) {
        
        switch (choice) {

            case '1':
                this.previousMenu();
                break;

            case '2':
                this.context.state = new B2(this.context, this);
                break;

            
            // case '3':
            //     this.exitState();
            //     break;

            default:
                alert('Invalid Choice');
        }
    }
}

export class B2 extends Submenu {
    
    name = 'B2';
    
    menuText = '\n\n' +
               '1. Return to B1 \n' +
               '2. Got to B3 \n' +
            //    '3. Exit \n' +
               '\nYour choice: ';

    evaluateChoice(choice) {
        
        switch (choice) {

            case '1':
                this.previousMenu();
                break;

            case '2':
                this.context.state = new B3(this.context, this);
                break;

            
            // case '3':
            //     this.exitState();
            //     break;

            default:
                alert('Invalid Choice');
        }
    }
}

export class B3 extends Submenu {
    
    name = 'B3';
    
    menuText = '\n\n' +
               '1. Return to B2 \n' +
            //    '2. Exit \n' +
               '\nYour choice: ';

    evaluateChoice(choice) {
        
        switch (choice) {

            case '1':
                this.previousMenu();
                break;
            
            // case '2':
            //     this.exitState();
            //     break;

            default:
                alert('Invalid Choice');
        }
    }

}

export class C1 extends Submenu {
    
    name = 'C1';
    
    menuText = '\n\n' +
               '1. Return to Main Menu \n' +
               '2. Got to C2 \n' +
            //    '3. Exit \n' +
               '\nYour choice: ';

    evaluateChoice(choice) {
        
        switch (choice) {

            case '1':
                this.previousMenu();
                break;

            case '2':
                this.context.state = new C2(this.context, this);
                break;

            
            // case '3':
            //     this.exitState();
            //     break;

            default:
                alert('Invalid Choice');
        }
    }
}

export class C2 extends Submenu {
    
    name = 'C2';
    
    menuText = '\n\n' +
               '1. Return to C1 \n' +
               '2. Got to C3 \n' +
            //    '3. Exit \n' +
               '\nYour choice: ';

    evaluateChoice(choice) {
        
        switch (choice) {

            case '1':
                this.previousMenu();
                break;

            case '2':
                this.context.state = new C3(this.context, this);
                break;

            
            // case '3':
            //     this.exitState();
            //     break;

            default:
                alert('Invalid Choice');
        }
    }
}

export class C3 extends Submenu {
    
    name = 'C3';
    
    menuText = '\n\n' +
               '1. Return to C2 \n' +
            //    '2. Exit \n' +
               '\nYour choice: ';

    evaluateChoice(choice) {
        
        switch (choice) {

            case '1':
                this.previousMenu();
                break;
            
            // case '2':
            //     this.exitState();
            //     break;

            default:
                alert('Invalid Choice');
        }
    }

}