const { resolve } = require("node:path");
const baseConfig = require("./base.cjs");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
    ...baseConfig,
    extends: [...baseConfig.extends, "plugin:react-hooks/recommended"],
    overrides: [
        ...baseConfig.overrides,
        {
            files: ["*.ts", "*.tsx"],
            rules: {
                "react-hooks/exhaustive-deps": "error",
            },
        },
    ],
};
