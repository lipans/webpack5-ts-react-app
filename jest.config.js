/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.(css|sass|scss)$": "identity-obj-proxy",
    "\\.(png)$": "<rootDir>/src/__mocks__/img",
    "\\.(svg)$": "<rootDir>/src/__mocks__/svg",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testEnvironment: "jsdom",
};
