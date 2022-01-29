import { Mainmenu } from "./menu_submenus.js";

export class Context {

    constructor() {
        console.log('context created');
    }
    state = null;
    userchoice = '';

    render() {
        if (this.state) {
            return window.prompt(this.state.render());
        }
        else {
            return "No state initialized.";
        }
    }

    runMenu() {
        this.userChoice = this.render();
    }

    evaluateChoice() {
        this.state.evaluateChoice(this.userChoice);
    }

    enterMenu() {
        this.state = new Mainmenu(this);
        while(this.state) {
            this.runMenu();
            this.evaluateChoice();
        }
    }

}