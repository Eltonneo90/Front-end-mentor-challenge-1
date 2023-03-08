/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  content: [],
  theme: {
    extend: {
      colors: {
        AlmostBlack: "hsl(0, 0%, 8%)",
        AlmostWhite: "hsl(0, 0%, 98%)",
        MediumGray: "hsl(0, 0%, 41%)",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
