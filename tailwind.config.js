/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Flower: ['Indie Flower', "cursive"],
        Josefin: ['Josefin Sans', "sans-serif"],
      },
      colors: {
        black: "#0E0E0E",
        white: "#ffffff",
        lightGrayWhite: "#F2F2F2",
        deepGray: "#2f3c49",
        middleGray200: "#808D9A", //period
        middleGray100: "#D2DAE0",
        LightGray: "#e9eaeb",
        purple: "#B680F9",
        lightBluePurple: "#9793ed",
        bluePurple: "#645BFF",
        pink: "#FD7FD4",
        deepPink: "#f151bc",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
