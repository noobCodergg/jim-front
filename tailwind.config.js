module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#00FF00', // Add any custom colors based on the design
        secondary: '#FFFFFF',
        dark: '#000000',
      },
      backgroundImage:{
        'hero-pattern': "url('image.png')"
      },
      fontFamily: {
        raleway: ['"Raleway"', "sans-serif"], // Add Raleway as a custom font
      },
    },
  },
  plugins: [],
};
