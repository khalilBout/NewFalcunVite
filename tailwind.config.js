/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        // arabic: ["arabic", "sans-serif"],6
        fontTitle: ["AlHurraT", "sans-serif"],
        fontBody: ["AlHurraB", "sans-serif"],
      },
      colors: {
        primary: "#ED751F",
        secondary: "#F9DEC9",
        dark: "#000000",
        gray: "#3A405A",
        blue: "#3A405A",
        grayLight: "#DDD1CC",
        light: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
