module.exports = {
  setupFiles: ['<rootDir>/testSetup.js'],
  testMatch: ['<rootDir>/__tests__/**.spec.js'],
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/projects/',
    '.*.helper.js'
  ]
}
