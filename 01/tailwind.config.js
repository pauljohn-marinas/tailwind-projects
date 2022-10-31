/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      'soft-orange': 'hsl(35, 77%, 62%)',
      'soft-red': 'hsl(5, 85%, 63%)',
      'off-white': 'hsl(36, 100%, 99%)',
      'grayish-blue': 'hsl(233, 8%, 79%)',
      'dark-grayish-blue': 'hsl(236, 13%, 42%)',
      'very-dark-blue': 'hsl(240, 100%, 5%)',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
