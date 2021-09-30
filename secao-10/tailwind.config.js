const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '2xlfull': '200vh'
      },
      backgroundImage: theme => ({
        'pixel': 'url(../img/pixel-jeff-clipa-s.gif)',
        'cidade': 'url(../img/sc3a3oi-paulo.gif)'
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
