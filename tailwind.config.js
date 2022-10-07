/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '780px',
        lg: '976px',
        xl: '1440px',
      },

      colors: {
        'dark-blue': 'hsl(209, 23%, 22%)',
        'very-dark-blue': 'hsl(207, 26%, 17%)',
        'text-white': 'hsl(0, 0%, 100%)',
        'lmtext-very-dark-blue': 'hsl(200, 15%, 8%)',
        'lminput-dark-gray': 'hsl(0, 0%, 52%)',
        'lmbg-very-light-gray': 'hsl(0, 0%, 98%)',
        'lmelements-white': 'hsl(0, 0%, 100%)',  

      },
 
      fontFamily: {
        NunitoSans: "'Nunito Sans', sans-serif",

      },
      fontWeight: {
        threeHundred: 300,
        sixHundred: 600,
        eightHundred: 800,
      },
      fontSize: {
        homePage: '14px',
        detailPage: '16px',

      },
      minWidth: {
        'onehundred': '100%',
        'ninty': '90%',
        'eighty': '80%',
        'fifty': '50%',
        'forty': '40%',
        'thirtythree': ': 33.333333%',
      },
      maxWidth: {
        'onehundred': '100%',
        'ninty': '90%',
        'sixty': '60%',
        'forty': '40%',
        'eighty': '80%',
        'fifty': '50%',
        'fortyFive': '45%',
        'thirtythree': ': 33.333333%',
      },
      height: {
        'onehundred': '100%',
        'nintyFive': '95%',
        'ninty': '90%',
        'eighty': '80%',
        'forty': '40%',
        'fifty': '50%',
        'fortyFive': '45%',
      },
      width: {
        'onehundred': '100%',
        'nintyfive': '94%',
        'nintyfour': '94%',
        'nintythree': '93%',
        'ninty': '90%',
        'eighty': '80%',
        'seventy': '70%',
        'fifty': '50%',
        'forty': '40%',
        'thirty': '30%',
      },
      top: {
        'ninty': '90%',
        'forty': '40%',
        'eighty': '80%',
        'fifty': '50%',
      },
      maxHeight: {
        'onehundred': '100%',
        'ninty': '90%',
        'sixty': '60%',
        'forty': '40%',
        'eighty': '80%',
        'fifty': '50%',
        'fortyFive': '45%',
        'thirtythree': ': 33.333333%',
      },
      minHeight: {
        'onehundred': '100%',
        'ninty': '90%',
        'sixty': '60%',
        'forty': '40%',
        'eighty': '80%',
        'fifty': '50%',
        'fortyFive': '45%',
        'thirtythree': ': 33.333333%',
      },
    },
  },
  plugins: [require("daisyui")],

}
