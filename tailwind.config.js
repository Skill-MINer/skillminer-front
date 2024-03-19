/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    './src/**/**/*.{html,ts}',
    './node_modules/preline/preline.js',
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        'secondary': {
          DEFAULT: "#F8F0D5",
        },
        'primary': {
          DEFAULT: "#DC9B34",
          0: '#fefce8',
          1: '#fef8c4',
          2: '#feef8a',
          3: '#fdde48',
          4: '#faca18',
          5: '#ecb008',
          6: '#cc8704',
          7: '#a46007',
          8: '#874b0e',
          9: '#723e12',
        },
        'accent': {
          DEFAULT: '#A63A50',
          0: '#fef1f5',
          1: '#fee5ec',
          2: '#fdcedd',
          3: '#fba6c1',
          4: '#f8719c',
          5: '#f1437a',
          6: '#df225e',
          7: '#be154c',
          8: '#9e1442',
          9: '#86153d',
        },
        'background': {
          DEFAULT: '#FFFBF8',
          0: '#F7F3F0',
          1:'#fcf8f5',
        },
        'textcolor': {
          DEFAULT: '#2C1A1D',
          light: '#7E7E7E',        
        },
      },
    },
    plugins: [
      require('preline/plugin'),
    ],
  }
}
