import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  moduleNameMapper: {
    '.+\\.(css|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^@test/(.*)$': '<rootDir>/test/$1',
  },
  testPathIgnorePatterns: ['dist'],
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        isolatedModules: true,
        useESM: true,
        tsconfig: './tsconfig.jest.json',
      },
    ],
  },
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};

export default jestConfig;
