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
        cream: "#04e762",
        creamhover: "#04b84e",
      },
      colors: {
        cream: "#04e762",
      }
    },
  },
  plugins: [],
};
