/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        win: {
          blue: '#0078D7',
          dark: '#1f1f1f',
          darker: '#121212',
          light: '#f3f4f6'
        }
      }
    }
  },
  plugins: [],
}
