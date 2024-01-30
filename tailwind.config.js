const forms = require('@tailwindcss/custom-forms');

module.exports = {
  important: true,
  plugins: [forms],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        secondary: '#1d4ed8',
        accent: '#F74371',
        charcoal: '#353B50',
        bluemarin: '#003296',
      },
      fontFamily: {
        display: 'Libre Baskerville, Arial, sans-serif',
      },
    },
  },
  purge: [
    './components/**/*.jsx', // all components
    './pages/**/*.js', // all pages as well
    '**/@chesscoders/**/*.jsx', // chesscoders packages
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
