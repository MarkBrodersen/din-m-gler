/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, ts, jsx, tsx,}"],
  theme: {
    extend: {
      colors: {
        energiLabel: {
          100: "#10AC84",
          200: "#F2C94C",
          300: "#F2994A",
          400: "#EB5757",
        },
        primary: {
          100: "#162A41",
          200: "#A3CB38",
          300: "#10AC84",
          400: "#FA983A",
        },
        headingColor: {
          100: "#263048",
          200: "#2A2C30",
        },
        paragraphColor: {
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
      fontSize: {
        btn100: [
          "18px",
          {
            lineHeight: "30px",
            fontWeight: "500",
          },
        ],
        btn200: [
          "1.1rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        mainHeading100: [
          "60px",
          {
            lineHeight: "80px",
            fontWeight: "bold",
          },
        ],
        mainHeading200: [
          "50px",
          {
            lineHeight: "66px",
            fontWeight: "bold",
          },
        ],
        mainHeading300: [
          "24px",
          {
            lineHeight: "50px",
            fontWeight: "bold",
          },
        ],
        mainHeading400: [
          "46px",
          {
            lineHeight: "54px",
            fontWeight: "bold",
          },
        ],
        mainHeading500: [
          "200px",
          {
            lineHeight: "200px",
            fontWeight: "bold",
          },
        ],
        heading100: [
          "38px",
          {
            lineHeight: "54px",
            fontWeight: "bold",
          },
        ],
        heading200: [
          "30px",
          {
            lineHeight: "42px",
            fontWeight: "500",
          },
        ],
        heading300: [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "500",
          },
        ],
        heading400: [
          "20px",
          {
            lineHeight: "30px",
            fontWeight: "500",
          },
        ],
        heading500: [
          "16px",
          {
            lineHeight: "26px",
            fontWeight: "500",
          },
        ],
        para100: [
          "18px",
          {
            lineHeight: "30px",
          },
        ],
        para200: [
          "16px",
          {
            lineHeight: "28px",
          },
        ],
        para300: [
          "14px",
          {
            lineHeight: "24px",
          },
        ],
        para400: [
          "12px",
          {
            lineHeight: "24px",
          },
        ],
        para500: [
          "24px",
          {
            lineHeight: "32px",
          },
        ],
        para600: [
          "20px",
          {
            lineHeight: "30px",
            fontWeight: "500",
          },
        ],
        italic: [
          "20px",
          {
            lineHeight: "32px",
            fontWeight: "500",
            fontStyle: "italic",
          },
        ],
      },
    },
  },
  plugins: [],
};
