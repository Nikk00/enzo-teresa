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
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio")
  ],
}