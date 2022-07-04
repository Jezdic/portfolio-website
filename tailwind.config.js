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
        shakeError: {
          "0%, 10%, 20%, 30%, 40%, 50%, 60%": { transform: "translateX(2px)" },
          "5%, 15%, 25%, 35%, 45%, 55%, 65%": {
            transform: "translateX(-2px)",
          },
        },
        opacity: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeScale: {
          "0%": { transform: "scale(0.25)" },
          "25%": { transform: "scale(0.5)" },
          "50%": { transform: "scale(0.75)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        wave: "wave 2.5s ",
        shakeError: "shakeError 1s",
        opacity: "opacity .2s",
        fadeScale: "fadeScale .3s",
      },
    },
  },
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  darkMode: "class",
};
