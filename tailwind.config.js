/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('./tailwindcss/default-presets.js'),
    require('./tailwindcss/epfprojets-presets.js'),
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  content: [
    './src/**/*.{html,ts}',
    './src/**/**/*.{html,ts}',
    './node_modules/preline/preline.js',
  ],
  darkMode: 'selector',
}
