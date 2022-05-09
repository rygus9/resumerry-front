module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        deepPurple: '#B284EC',
        lightPurple: '#C1A0EB',
        deepBlack: '#232323',
        black: '#454545',
        lightBlack: '#787878',
        deepGray: '#a1a1a1',
        gray: '#cdcdcd',
        lightGray: '#efefef',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
