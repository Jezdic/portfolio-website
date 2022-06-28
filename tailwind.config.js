/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {
      screens: {
        sm: "480px",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "30%": { transform: "rotate(0.0deg)" },
          "40%": { transform: "rotate(14.0deg)" },
          "50%": { transform: "rotate(-8.0deg)" },
          "60%": { transform: "rotate(14.0deg)" },
          "70%": { transform: "rotate(-4.0deg)" },
          "80%": { transform: "rotate(10.0deg)" },
          "90%": { transform: "rotate(-4.0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        wave: "wave 2s ",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
