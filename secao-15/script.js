const btnDarkTheme = document.querySelector('#dark-mode')
const btnDarkThemeRing = document.querySelector('#dark-mode-ring')
const html = document.querySelector('html')

const dark = () => html.classList.toggle('dark')

btnDarkTheme.addEventListener('click', dark)
btnDarkThemeRing.addEventListener('click', dark)
