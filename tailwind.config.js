/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fd5545',
        secondary: '#000000',
        gray: '#eeeeee',
      },
    },
  },
  plugins: [],
}