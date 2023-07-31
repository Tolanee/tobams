/** @type {import('tailwindcss').Config} */


// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/hero-bg.png')",
      },
    },
  },
  plugins: [],
}

