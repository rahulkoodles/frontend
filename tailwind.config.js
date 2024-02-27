/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        CustomBgColor: "#000000",
        CustomGreenColor: "#00C896",
        CustomCardBgColor: "#121212",
      },
      screens: {
        sm: "750px",
        md: "950px",
        lg: "1024px",
        xl: "1280px",
        // Add your custom breakpoints here
        custom: "1024px",
        customMdd:"970px",
      },
    },
  },
  plugins: [],
};
