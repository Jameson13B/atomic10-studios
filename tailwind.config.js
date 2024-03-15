/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        button:
          '0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 200px #03e9f4',
      },
      fontFamily: {
        chicle: ['Chicle', 'serif'],
        Poppins: ['Poppins', 'sans-serif'],
        PlusJakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      hueRotate: {
        270: '270deg',
        110: '110deg',
      },
      textShadow: {
        DEFAULT: '4px 6px 0 rgba(0, 0, 0, 0.4)',
        small: '3px 4px 0 rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        logo: "url('../src/assets/neon_logo.png')",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
