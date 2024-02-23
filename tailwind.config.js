/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryOrange: "#FF5733", // hsl(26, 100%, 55%)
        paleOrange: "#FFF7EF", // hsl(25, 100%, 94%)
        veryDarkBlue: "#05070D", // hsl(220, 13%, 13%)
        darkGrayishBlue: "#2C365E", // hsl(219, 9%, 45%)
        grayishBlue: "#AEB8C6", // hsl(220, 14%, 75%)
        lightGrayishBlue: "#F9FBFE", // hsl(223, 64%, 98%)
        white: "#FFFFFF", // hsl(0, 0%, 100%)
        blackOpacity75: "rgba(0, 0, 0, 0.75)",
      },
      fontFamily: {
        "kumbh-sans": ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
