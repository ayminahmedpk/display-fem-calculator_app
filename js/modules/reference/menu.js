export class Menu {
    
    constructor(context) { this.context = context; }
    name = '';
    menuText = '';

    breadcrumb() { return this.name; }
    render() { return this.breadcrumb() + this.menuText ; }
    exitState() { this.context.state = null; }

    // evaluateChoice(){};

}

export class Submenu extends Menu {

    constructor(context, parent) {
        super(context);
        this.parent = parent;
    }
    
    breadcrumb() {
        return this.parent.breadcrumb() + ' > ' + this.name;
    }

    previousMenu() {
        this.context.state = this.parent;
    }

}