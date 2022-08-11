/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('./assets/img/shLogo.png')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#0C55CB",
        secondary: "#BABABC",
        tertiary: "#8E99A2",
        quarter: "#434445",
        redCancel: "#CB0C0C",
        blueItem: "#0A50C0",
      }),
      textColor: {
        primary: "#0C55CB",
        secondary: "#BABABC",
        tertiary: "#8E99A2",
        quarter: "#434445",
      },
      borderColor: {
        primary: "#0C55CB",
        secondary: "#BABABC",
        tertiary: "#8E99A2",
        quarter: "#434445",
      },
    },
  },
  plugins: [],
};
