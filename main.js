const darkModeToggler = document.querySelector('#dark-mode-toggle');
let darkMode = localStorage.getItem('darkMode');
let icon = document.querySelector('#icon');
console.log(darkModeToggler)

// enable darkmode function
const enableDarkMode = () => {
    document.body.classList.add('darkmode');

    localStorage.setItem('darkMode', 'enabled')
}
// disable darkmode function
const disableDarkMode = () => {
    document.body.classList.remove('darkmode');

    localStorage.setItem('darkMode', null)
}

//
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
