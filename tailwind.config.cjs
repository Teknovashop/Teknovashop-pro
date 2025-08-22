/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:"#f3f0ff", 100:"#e6e1ff", 500:"#6c4eff", 600:"#5a3ef0"
        }
      }
    },
  },
  plugins: [],
};
