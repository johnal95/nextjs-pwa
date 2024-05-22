import fs from "node:fs";
import path from "node:path";

function getBuildId() {
    const BUILD_ID_PATH = path.resolve(process.cwd(), ".next", "BUILD_ID");

    const BUILD_ID = fs.readFileSync(BUILD_ID_PATH, { encoding: "utf-8" });

    return BUILD_ID.replaceAll("\n");
}

function generateSw() {
    const SW_PATH = path.resolve(process.cwd(), "public", "sw.js");

    const swFile = fs.readFileSync(SW_PATH, { encoding: "utf-8" });

    const compiledSwFile = swFile.replaceAll("{{BUILD_ID}}", getBuildId());

    fs.writeFileSync(SW_PATH, compiledSwFile);
}

generateSw();
