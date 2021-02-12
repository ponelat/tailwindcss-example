const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:  {
        gray: colors.blueGray,
        'sb-gray': {
          '900': '#312b2c'
        },
        'sb-orange': {
          DEFAULT: '#ff730b',
          light: '#f58735'
        }
      }
    },
    animation: {
      'spin-slow': 'spin 6s linear infinite',
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
    },
  },
  plugins: [],
}
