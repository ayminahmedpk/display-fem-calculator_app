
import {Calculator} from './modules/calculator.js';

const body   = document.querySelector('body');
const slider = document.querySelector('.toggle__slider');


const setInitialTheme = () => {    
    const themeNumber = parseInt(localStorage.getItem('prefers-color-scheme'));
    if(themeNumber) {
        slider.value    = themeNumber;
        const themeName = `theme-${themeNumber}`;
        body.className  = themeName;
    }
    else {
        slider.value = 1;
        body.className = 'theme-1';
    }
}


const handleThemeChange = (e) => {
    localStorage.setItem('prefers-color-scheme', e.target.value)
    const themeName = `theme-${e.target.value}`;
    body.className = themeName;
}


setInitialTheme();
slider.addEventListener('change', (e) => { handleThemeChange(e); });




//import {Menu} from './modules/menu';


window.calculator = new Calculator();

// To start, run context.enterMenu();

//window.x = new submenu.A1();