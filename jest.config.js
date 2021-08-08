module.exports = {
  verbose: true,
  testEnvironment: 'node',
  roots: ['<rootDir>packages'],
  testMatch: ['**/*.spec.js'],
  collectCoverage: true,
  coverageReporters: ['json-summary', 'text', 'text-summary', 'html'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!(lodash-es)/)']
}
