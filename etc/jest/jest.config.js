const Path = require('path')

module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx'
  ],
  rootDir: '../../src',
  setupFiles: [
    Path.join(__dirname, 'shims.js'),
    Path.join(__dirname, 'jest.setup.js')
  ]
}
