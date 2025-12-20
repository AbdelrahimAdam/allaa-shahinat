/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'renault-blue': '#0055A4',
        'industrial-yellow': '#FFD100',
        'industrial-gray': '#4A4A4A',
        'industrial-dark': '#2D2D2D',
      },
      fontFamily: {
        'arabic': ['Tajawal', 'sans-serif'],
      },
    },
  },
  plugins: [],
}