/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple500: "#4E598C",
        gray300: "#BDBDBD",
        primary: "#F2994A",
        blue800: "#2F80ED",
      },
    },
  },
  plugins: [],
};
