/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-meimg': "url('../assets/BG.jpg')"
      }
    },
  },
  plugins: [],
}

