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

      },
      backgroundColor: {
        'main-brand-col': '#3C4A79',
        'light-shade': '#D2DAF0',
        'dark-shade': '#3D2622',
        'light-accent': '#9CACBB',
        'dark-accent': '#8B77A5',
        'hover-nav': '#4f5c86'
      }
    },
  },
  plugins: [],
}

