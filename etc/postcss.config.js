var tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
    tailwindcss('./etc/tailwind.config.js'),
    require('autoprefixer')
  ]
}
