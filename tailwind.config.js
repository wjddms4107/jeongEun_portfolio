/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
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
        darkLightGrayWhite: "#1C1C1C",  
        deepGray: "#2f3c49",
        darkDeepGray:"#8D909D",
        middleGray900: "#343434",
        darkMiddleGray900: "#DBDBDB",
        middleGray300: "#565656",
        darkMiddleGray300: "#B2B2B2",
        middleGray200: "#727272", //period
        darkMiddleGray200: "#939393",
        middleGray100: "#A7A7A7",
        darkMiddleGray100: "#737373",
        lightGray200:"#D7D7D7",
        darkLightGray200: "#474747",
        LightGray: "#e9eaeb",
        darkLightGray: "#DBDBDB",
        purple: "#B680F9",
        darkPurple: "#8D2CD8",
        lightBluePurple: "#ADABED",
        bluePurple: "#645BFF",
        darkBluePurple: "#322AAE",
        pink: "#FD7FD4",
        deepPink: "#f151bc",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
