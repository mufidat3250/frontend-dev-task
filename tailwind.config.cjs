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
        orange300: "#F2994A",
        orange400: "#F2994A",
        lightBlue: " #817E9E",
        gray2: "#4F4F4F",
        red: "rgba(235, 87, 87, 1)",
      },
      boxShadow: {
        "4xxl": " 0px 6px 10px rgba(33, 30, 67, 0.08)",
      },
    },
  },
  plugins: ["tailwind-scrollbar-hide"],
};
