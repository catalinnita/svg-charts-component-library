import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ["**/*.test.+(ts|tsx)"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  coverageThreshold: {
    "global": {
      "branches": 100,
      "functions": 100,
      "lines": 100,
    }
  }
};
export default config;