import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  testMatch: [`**/?(*.)+(spec|test).+(ts|tsx|js)`],
  setupFiles: [],
  reporters: ["default", ["jest-junit", { outputName: "test-report.xml" }]],
  coverageReporters: ["text", "html", "cobertura", "text-summary"],
  coveragePathIgnorePatterns: ["/__test__/", "/testUtils/", "/generated/"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.test.json",
      },
    ],
  },
};

export default jestConfig;
