module.exports = {
    testEnvironment: "node",
    bail: false,
    verbose: true,
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testMatch: ["**/*.test.ts"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    collectCoverage: false,
    coverageDirectory: "<rootDir>/.coverage",
    collectCoverageFrom: ["src/**/{!(index),}.ts", "!**/node_modules/**"],
    coverageReporters: ["json", "lcov", "text", "clover", "html"],
    // coverageThreshold: {
    //     global: {
    //         branches: 100,
    //         functions: 100,
    //         lines: 100,
    //         statements: 100,
    //     },
    // },
    watchman: false,
    setupFilesAfterEnv: ["jest-extended"],
    globals: {
        "ts-jest": {
            tsConfig: "tsconfig.json",
        },
    },
};
