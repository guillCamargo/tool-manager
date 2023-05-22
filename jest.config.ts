import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  preset: 'ts-jest',
  testEnvironment: "node",
  transform: {
    "^.+\\.[jt]s$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  testPathIgnorePatterns: [
    "/dist/",
    "/coverage",
    "/node_modules/"
  ],
  moduleNameMapper: {
    "@entities/(.*)": ["<rootDir>/src/core/entities/$1"],
    "@services/(.*)": ["<rootDir>/src/core/services/$1"],
    "@utils/(.*)": ["<rootDir>/src/core/utils/$1"],
    "@controllers/(.*)": ["<rootDir>/src/infra/controllers/$1"],
    "@database/(.*)": ["<rootDir>/src/infra/database/$1"],
    "@repositories/(.*)": ["<rootDir>/src/infra/repositories/$1"],
  },
  modulePaths: [
      '<rootDir>'
  ],
  moduleFileExtensions: [
    "ts",
    "js",
    "json",
    "node"
  ],
  setupFiles: [
    "dotenv/config"
  ]
};
