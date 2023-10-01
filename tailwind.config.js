/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      content: {},
      colors: {
        body: "hsl(11, 60%, 99%)",
        section: "hsl(0, 0%, 100%)",
        mainHeading: "hsl(0, 0%, 0%)",
        text: "hsl(0, 0%, 0%)",
        sectionHeading: "hsl(0, 0%, 25%)",
        greyText: "hsl(280, 1%, 45%)",
        greyBackground: "hsl(0, 0%, 95%)",
        greyBackHourly: "hsl(0, 0%, 91%)",
        chanceOfPrecipitation: "hsl(210, 91%, 61%)",

        //DARK STYLES
        bodyD: "hsl(0, 10%, 5%)",
        sectionD: "hsl(0, 5%, 10%)",
        mainHeadingD: "hsl(11, 60%, 99%)",
        textD: "hsl(0, 100%, 100%)",
        sectionHeadingD: "hsl(0, 0%, 75%)",
        greyTextD: "hsl(0, 0%, 70%)",
        greyBackgroundD: "hsl(280, 1%, 15%)",
        greyBackHourlyD: "hsl(0, 0%, 15%)",
      },

      backgroundImage: {
        aqiGradient:
          "linear-gradient(90deg,hsl(165, 78%, 45%) 10%,hsl(50, 92%, 66%) 0 20%,hsl(24, 98%, 69%) 0 30%,hsl(355, 92%, 62%) 0 40%,hsl(270, 81%, 67%) 0 60%,hsl(353, 57%, 44%) 0)",
      },
      keyframes: {
        windmill: {
          from: {
            transform: `rotate(${0}turn)`,
          },
          to: {
            transform: `rotate(${-1}turn)`,
          },
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        pathway: ["Pathway Extreme", "sans-serif"],
        audiowide: ["Audiowide", "cursive"],
      },
    },
  },
  plugins: [],
};
