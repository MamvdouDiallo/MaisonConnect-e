/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui','-apple-system','Segoe UI','Roboto','Ubuntu','Cantarell','Noto Sans','Helvetica Neue','Arial','sans-serif']
      },
      colors:{
        ink: "#111113",
        gray1:"#1d1d1f",
        gray2:"#6e6e73"
      },
      keyframes: {
    fadeIn: {
      "0%": { opacity: 0, transform: "translateY(5px)" },
      "100%": { opacity: 1, transform: "translateY(0)" }
    }
  },
  animation: {
    fadeIn: "fadeIn .18s ease-out"
  }
    }
  },
  plugins: [],
}
