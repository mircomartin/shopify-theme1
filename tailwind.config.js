/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/*.liquid",
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
    "./templates/customers/*.liquid"
  ],
  theme: {
    extend: {
      minHeight: {
        '500': '500px',
      },
      fontFamily: {
        'body': ["'Roboto', sans-serif"]
      }
    },
  },
  plugins: [],
}
