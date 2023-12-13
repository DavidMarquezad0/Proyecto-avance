document.addEventListener('DOMContentLoaded', () => {
    darkMode();
});

function darkMode() {
    const buttonDarkMode = document.querySelector('.dark-mode-button');
    buttonDarkMode.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode')
    })
}