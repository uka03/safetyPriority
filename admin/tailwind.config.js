/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { mycolor: "rgb(10,19, 36)", button: "rgb(101,208, 189)" },
    },
  },
  plugins: [],
};
