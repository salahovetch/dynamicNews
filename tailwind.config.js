/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#50AE35",
        text: {
          "dark-blue": "#22313F",
          "dark-lnk": "#6D767E",
          "gray-fb": "#fbfbfb",
          gray: "#6D767E",
          "gray-light": "#F4F5F5",
          dark: "#22313F",
        },
        bg: {
          "green-f2": "#f2ffee",
          "gray-239": "rgba(239, 240, 241, 0.35)",
          gray: "#6D767E",
          "gray-light": "#F4F5F5",
          dark: "#22313F",
        },
        gradient: {
          white: {
            2: "rgba(255, 255, 255, 0.2)",
          },
        },
        neutral: {
          8: "#F1F2F3",
          50: "#FBFBFB",
          100: "#22333F",
          200: "#E9EAEC",
          400: "#6D767E",
          500: "#9DA9AF",
        },
        neutral: {
          light: {
            200: "#E1E8ED",
          },

          dark: {
            8: "#F1F2F3",
            50: "#FBFBFB",
            100: "#22333F",
            200: "#E9EAEC",
            300: "#A7ADB2",
            400: "#6D767E",
            500: "#22313F",
            600: "#BEC3C6",
          },
        },
        backgroundColor: {
          "neutral-dark": {
            200: "#E9EAEC",
          },
        },
        brownBlur: {
          1: "rgba(179, 161, 151, 0.5)",
        },
      },
      backgroundImage: {
        "gradient-green": {
          1: "linear-gradient(90deg, #E2F8F7 0%, #F9F8E7 76.4%, #F9F8E7 100%)",
        },
      },
      screens: {
        xsm: "440px",
        sm: "640px",
        md: "768px",
        lg: "1024.5px",
        xl: "1280px",
        xl1: "1340px",
        xl2: "1440px",
        xl3: "1485px",
        "2xl": "1520px",
        "3xl": "1650px",
        "4xl": "1750px",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
        screens: {
          xl: "1280px",
          "4xl": "1320px",
        },
      },

      fontFamily: {
        body: ["Quicksand", "sans-serif"],
      },
      fontSize: {
        12: ["12px"],
        14: ["14px"],
        16: ["16px"],
        18: ["18px"],
        20: ["20px"],
        22: ["22px"],
        24: ["24px"],
        26: ["26px"],
        28: ["28px"],
        30: ["30px"],
        32: ["32px"],
        36: ["36px"],
        40: ["40px"],
        45: ["45px"],
        48: [
          "48px",
          {
            lineHeight: "60px",
          },
        ],
        54: [
          "54px",
          {
            lineHeight: 1.4,
          },
        ],
        55: [
          "55px",
          {
            lineHeight: 1.4,
          },
        ],
        xs: [
          "0.75rem",
          {
            lineHeight: "1rem",
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.25rem",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        lg: [
          "1.125rem",
          {
            lineHeight: "1.75rem",
          },
        ],
        xl: [
          "1.25rem",
          {
            lineHeight: "1.75rem",
          },
        ],
        "2xl": [
          "1.5rem",
          {
            lineHeight: "2rem",
          },
        ],
        "3xl": [
          "1.875rem",
          {
            lineHeight: "2.25rem",
          },
        ],
        "4xl": [
          "2.25rem",
          {
            lineHeight: "2.5rem",
          },
        ],
        "5xl": [
          "3rem",
          {
            lineHeight: "1",
          },
        ],
        "6xl": [
          "3.75rem",
          {
            lineHeight: "1",
          },
        ],
        "7xl": [
          "4.5rem",
          {
            lineHeight: "1",
          },
        ],
        "8xl": [
          "6rem",
          {
            lineHeight: "1",
          },
        ],
        "9xl": [
          "8rem",
          {
            lineHeight: "1",
          },
        ],
        100: [
          "100px",
          {
            lineHeight: "1",
          },
        ],
        120: [
          "120px",
          {
            lineHeight: "1",
          },
        ],
        170: [
          "170px",
          {
            lineHeight: "1",
          },
        ],
        210: [
          "210px",
          {
            lineHeight: "1",
          },
        ],
        288: [
          "288px",
          {
            lineHeight: "1",
          },
        ],
      },
    },

    container: {
      center: true,
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
