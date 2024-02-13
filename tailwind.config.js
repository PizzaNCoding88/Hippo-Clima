/** @type {import('tailwindcss').Config} */
export default {
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#F58E49',
        gray: '#373838'
      },
      backgroundImage: {
        // bgImage: '.src/images/landing-bg.webp'
        // bgImage: "url('../../../src/images/landing-bg.webp')"
      }
    }
  },
  plugins: []
}
