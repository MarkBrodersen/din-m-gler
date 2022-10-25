/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, ts, jsx, tsx,}"],
  theme: {
    extend: {
      fontSize: {
        buttomSm: [
          "2rem",
          {
            lineHeight: "2rem",
            fontWeight: 500,
          },
        ],
        button: {
          md: [
            "18px",
            {
              lineHeight: "30px",
              fontWeight: "500",
            },
          ],
          sm: [
            "1.1rem",
            {
              lineHeight: "1.5rem",
            },
          ],
        },
        mainHeading: {
          100: [
            "60px",
            {
              lineHeight: "80px",
              fontWeight: "bold",
            },
          ],
          200: [
            "50px",
            {
              lineHeight: "66px",
              fontWeight: "bold",
            },
          ],
          300: [
            "24px",
            {
              lineHeight: "50px",
              fontWeight: "bold",
            },
          ],
          400: [
            "46px",
            {
              lineHeight: "54px",
              fontWeight: "bold",
            },
          ],
          500: [
            "200px",
            {
              lineHeight: "200px",
              fontWeight: "bold",
            },
          ],
        },
        heading: {
          100: [
            "38px",
            {
              lineHeight: "54px",
              fontWeight: "bold",
            },
          ],
          200: [
            "30px",
            {
              lineHeight: "42px",
              fontWeight: "500",
            },
          ],
          300: [
            "24px",
            {
              lineHeight: "32px",
              fontWeight: "500",
            },
          ],
          400: [
            "20px",
            {
              lineHeight: "30px",
              fontWeight: "500",
            },
          ],
          500: [
            "16px",
            {
              lineHeight: "26px",
              fontWeight: "500",
            },
          ],
        },
        paragraph: {
          100: [
            "18px",
            {
              lineHeight: "30px",
            },
          ],
          200: [
            "16px",
            {
              lineHeight: "28px",
            },
          ],
          300: [
            "14px",
            {
              lineHeight: "24px",
            },
          ],
          400: [
            "12px",
            {
              lineHeight: "24px",
            },
          ],
          500: [
            "24px",
            {
              lineHeight: "32px",
            },
          ],
          600: [
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
      colors: {
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
    },
  },
  plugins: [],
};
