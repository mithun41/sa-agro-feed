const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom brand palette where 700 == #009966 (site primary).
        green: {
          50: "#e6f7f3",
          100: "#ccefe7",
          200: "#99dfcf",
          300: "#66cdb6",
          400: "#33b996",
          500: "#00a57f",
          600: "#009976",
          700: "#009966",
          800: "#007a54",
          900: "#004d32",
        },
        // Mirror the same custom palette for `red-*` so explicit red
        // utilities also resolve to the brand primary color.
        red: {
          50: "#e6f7f3",
          100: "#ccefe7",
          200: "#99dfcf",
          300: "#66cdb6",
          400: "#33b996",
          500: "#00a57f",
          600: "#009976",
          700: "#009966",
          800: "#007a54",
          900: "#004d32",
        },
      },
    },
  },
  plugins: [],
};
