/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'Avenir','Helvetica','Arial','sans-serif'],
      'serif': ['ui-sans-serif', 'Avenir','Helvetica','Arial','sans-serif'],
      'mono': ['ui-sans-serif', 'Avenir','Helvetica','Arial','sans-serif'],
      'display': ['ui-sans-serif', 'Avenir','Helvetica','Arial','sans-serif'],
      'body': ['ui-sans-serif', 'Avenir','Helvetica','Arial','sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          100: "#c7d6f3",
          200: "#8fade7",
          300: "#5785db",
          400: "#2a5fc4",
          500: "#2452a8",
          600: "#183670",
          700: "#183670",
          800: "#0c1b38",
          900: "#060e1c",
          DEFAULT: "#1E448C",
        },
        yellow: {
          100:"#fff9c4"
        },
        red:{
          100: "#ff1744"
        },
        secondary: {
          ...colors.cyan,
          DEFAULT: colors.cyan["600"],
        },
        error: {
          ...colors.red,
          DEFAULT: colors.red["600"],
        },
        warning: {
          ...colors.amber,
          DEFAULT: colors.amber["500"],
        },
        success: {
          ...colors.emerald,
          DEFAULT: colors.emerald["600"],
        },
        gray: {
          ...colors.gray,
          DEFAULT: colors.gray["600"],
        },
        purple: {
          ...colors.purple,
          DEFAULT: colors.purple["600"],
        },
        black: "#212121",
      },
    },
  },
  variants: {
    extend: {},
  },
};
