/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#019EBF",
        secondary: "#96a2b5",
        hoverGreen: "#0287a1",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}; 