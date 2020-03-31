module.exports = {
  verbose: true,
  testEnvironment: 'node',
  roots: ['<rootDir>packages'],
  testMatch: ['**/*.spec.js'],
  collectCoverage: true,
  coverageReporters: [
    'json-summary',
    'text',
    'text-summary',
    'html'
  ],
  transform: {
    '^.+\\.(js)$': 'babel-jest'
  }
}
