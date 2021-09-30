const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'arial': 'Arial'
      },
      fontSize: {
        '12xl': '8rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
