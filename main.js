const darkModeToggler = document.querySelector('#dark-mode-toggle');
let darkMode = localStorage.getItem('darkMode');
let icon = document.querySelector('#icon')


const enableDarkMode = () => {
    document.body.classList.add('darkmode');

    localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');

    localStorage.setItem('darkMode', null)
}

if (darkMode === 'enabled') {
    enableDarkMode();
    icon.src ="/images/sun2.png"
}

darkModeToggler.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled'){
        enableDarkMode()
        icon.src ="/images/sun2.png"
    } else {
        disableDarkMode()
        icon.src ="/images/moon.png"
    }
})
