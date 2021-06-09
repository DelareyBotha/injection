module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/build/'],
  setupFilesAfterEnv: ['./test/jest.setup.ts'],
};