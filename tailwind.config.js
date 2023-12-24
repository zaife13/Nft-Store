/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        customPurple: "#A259FF",
        customGray: "#2B2B2B",
        customGray1: "#3B3B3B",
      },
      colors: {
        customPurple: "#A259FF",
        customGray: "#2B2B2B",
        customGray1: "#3B3B3B",
        customGray2: "#7E7E7D",
      },
      fontFamily:{
        'spacemono': ['Space Mono']
      }
    },
  },
  plugins: [],
};
