const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/strict",
        "plugin:@typescript-eslint/stylistic",
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    settings: {
        "import/resolver": { typescript: { project } },
    },
    ignorePatterns: [".*.cjs", ".*.js", "node_modules/"],
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            rules: {
                "@typescript-eslint/explicit-module-boundary-types": "error",
                "@typescript-eslint/no-unused-vars": "off",
            },
        },
    ],
};
