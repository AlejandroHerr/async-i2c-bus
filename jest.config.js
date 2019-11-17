module.exports = {
  coverageDirectory: './coverage/',
  collectCoverage: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
  testMatch: ['**/src/**/?(*.)+(spec).[jt]s'],
  setupFilesAfterEnv: ['./src/tests/matchers/index.ts'],
};
