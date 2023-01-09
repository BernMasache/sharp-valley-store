/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
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
      sharp:"#2f2709",
      zinc:colors.zinc
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/forms'),

  ],
}