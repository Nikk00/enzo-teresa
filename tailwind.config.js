/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        alexBrush: ['Alex Brush', 'cursive'],
        playFair: ['Playfair Display', 'serif'],
        montSerrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 3s ease-in forwards',
        },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
                 },
               },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio")
  ],
}