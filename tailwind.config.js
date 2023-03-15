module.exports = {
  mode: 'jit', // enable Just-in-Time compiler or purge option for production build performance
  purge: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}