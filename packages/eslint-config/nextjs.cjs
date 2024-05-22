const { resolve } = require("node:path");
const baseConfig = require("./base.cjs");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
    ...baseConfig,
    extends: [...baseConfig.extends, "next/core-web-vitals"],
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
