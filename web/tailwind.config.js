module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'ntst-purple': '#5267DF',
        'ntst-red': '#FA5959',
        'ntst-blue': '#003d99',
        'ntst-grey': '#9194A2',
        'ntst-white': '#f7f7f7',
      },
    },
    fontFamily: {
      Poppins: ['Poppins, sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
