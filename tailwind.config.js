/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'phonemd': '375px',
        'phonelg': '425px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1440px'

      }
    },
  },
  plugins: [],
}

