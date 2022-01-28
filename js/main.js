

const body   = document.querySelector('body');
const slider = document.querySelector('.toggle__slider');


const setInitialTheme = () => {    
    const theme = localStorage.getItem('prefers-color-scheme');
    if(theme) {
        slider.value = parseInt(theme.slice(-1));
        body.className = theme;
    }
    else {
        slider.value = 1;
        body.className = 'theme-1';
    }
}


const handleThemeChange = (e) => {
    const theme = `theme-${e.target.value}`;
    localStorage.setItem('prefers-color-scheme', theme)
    body.className = theme;
}


setInitialTheme();
slider.addEventListener('change', (e) => { handleThemeChange(e); });