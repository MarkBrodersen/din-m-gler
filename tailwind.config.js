/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, ts, jsx, tsx,}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#162A41",
          200: "#A3CB38",
          300: "#10AC84",
          400: "#FA983A",
        },
        heading: {
          100: "#263048",
          200: "#2A2C30",
        },
        paragraph: {
          100: "#333333",
          200: "#7B7B7B",
          300: "#D5E0EA",
        },
        background: {
          100: "#F8F8FB",
          200: "#F9FCFF",
          300: "#25517A",
        },
        shape: {
          100: "#D3DEE8",
          200: "#EEF7FF",
          300: "#33628D",
        },
        multi: {
          100: "#33485C",
          200: "#51789D",
          300: "#465F78",
          400: "#444444",
          500: "#455463",
        },
      },
    },
  },
  plugins: [],
};
