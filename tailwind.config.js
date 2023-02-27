/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily:{
      //   sans:['var(--font-inter']
      // },
      
      animation: {
        'spin-slow': 'spin 3s linear',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
    colors: {
      transparent: 'transparent',
      primary:colors.blue,
      secondary:colors.red,
      success: colors.green,
      warning:colors.orange,
      danger:colors.red,
      info:colors.blue,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      slate:colors.slate,
      green:colors.green,
      sky:colors.sky,
      red:colors.red,
      orange:colors.orange,
      brown: "#362c0a",
      sharp:"#25282a",
      store:"#2f2709",
      zinc:colors.zinc,
      gold:"#caab68",
      goldTwo:"#7b6031",
      goldThree:"#9c7d3c"
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/forms'),

  ],
}