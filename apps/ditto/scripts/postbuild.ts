import fs from "fs";
import path from "path";

const NEXT_OUT_DIR = path.resolve(process.cwd(), ".next");
const NEXT_STANDALONE_OUT_DIR = path.resolve(process.cwd(), ".next/standalone/apps/ditto");

const publicAssets = {
    source: path.resolve(process.cwd(), "public"),
    target: path.resolve(NEXT_STANDALONE_OUT_DIR, "public"),
};
fs.cpSync(publicAssets.source, publicAssets.target, { recursive: true });

const staticOutput = {
    source: path.resolve(NEXT_OUT_DIR, "static"),
    target: path.resolve(NEXT_STANDALONE_OUT_DIR, ".next", "static"),
};
fs.cpSync(staticOutput.source, staticOutput.target, { recursive: true });

const SW_PATH = path.resolve(publicAssets.target, "sw.js");
const BUILD_ID = fs.readFileSync(path.resolve(NEXT_OUT_DIR, "BUILD_ID"), "utf-8");

const swFile = fs.readFileSync(SW_PATH, "utf-8");

fs.writeFileSync(SW_PATH, swFile.replaceAll("{{BUILD_ID}}", BUILD_ID));
