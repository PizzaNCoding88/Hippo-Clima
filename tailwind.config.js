/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        orange: '#F58E49',
        gray: '#373838'
      },
      backgroundImage: {
        bgImage: '../../src/images/'
      }
    }
  },
  plugins: []
}
