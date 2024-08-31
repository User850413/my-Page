/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screen: {
      tablet: '768px',
      desktop: '1280px',
    },
    extend: {
      colors: {
        bright: '#FFFFFF',
        darker: '#222222',
        darkerText: '#222222',
        middle: '#D9D9D9',
      },
    },
  },
  plugins: [],
};
