/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        primary: "#04e762",
        primaryhover: "#04b84e",
        cream: "#FFFFDD",
        creamhover: "#ededca",
      },
      colors: {
        primary: "#04e762",
      },
    },
  },
  plugins: [],
};
