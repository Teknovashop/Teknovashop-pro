
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { 500: "#7C3AED", 600: "#6D28D9" }
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,0.08)"
      }
    },
  },
  plugins: [],
};
