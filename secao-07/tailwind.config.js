const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '125px': '125px'
      },
      colors: {
        'hoverspt': '#18d760',
        'purple-main': '#2d46b9',
        'green-main': '#1ed760'
      },
      backgroundImage: theme => ({
        'spotify-theme': "url('/img/bursts.svg')",
        'spotify-theme-mobile': "url('/img/bursts-mobile.svg')",
      }),
      backgroundSize: {
        '175%': '175%',
        '195%': '195%',
      },
      backgroundPosition: {
        'banner': '46% 4%',
        'banner-mobile': 'top 25% center'
      },
      fontSize: {
        '9xl': '9rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
