const { defaults } = require('jest-config');

module.exports = {
  testPathIgnorePatterns: [
    ...defaults.testPathIgnorePatterns,
    "<rootDir>/__tests__/__fixtures__/"
  ]
};
