/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        primary: "#5f0101",
        secondary: "#ba0000",
        tertiary: "#ffffff",
        quaternary: "#000000",
      },
      fontFamily: {
        sans: ["Urbanist", "sans-serif"],
        libre: ["Libre Bodoni", "serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".text-shadow-sm": {
          textShadow: theme("textShadow.sm"),
        },
        ".text-shadow-md": {
          textShadow: theme("textShadow.md"),
        },
        ".text-shadow-lg": {
          textShadow: theme("textShadow.lg"),
        },
        ".text-shadow-custom": {
          textShadow: theme("textShadow.custom"),
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
