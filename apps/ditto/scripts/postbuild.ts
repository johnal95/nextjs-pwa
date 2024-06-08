import fs from "node:fs";
import path from "node:path";
import { generateSW } from "workbox-build";

const NEXT_OUT_DIR = path.resolve(process.cwd(), ".next");
const NEXT_STANDALONE_OUT_DIR = path.resolve(process.cwd(), ".next/standalone/apps/ditto");

// COPY public folder into Next.js standalone build
// * should move to CDN
const publicAssets = {
    source: path.resolve(process.cwd(), "public"),
    target: path.resolve(NEXT_STANDALONE_OUT_DIR, "public"),
};
fs.cpSync(publicAssets.source, publicAssets.target, { recursive: true });

// COPY static build folder into Next.js standalone build
// * should move to CDN
const staticOutput = {
    source: path.resolve(NEXT_OUT_DIR, "static"),
    target: path.resolve(NEXT_STANDALONE_OUT_DIR, ".next", "static"),
};
fs.cpSync(staticOutput.source, staticOutput.target, { recursive: true });

// COMPILE sw.js
const SW_PATH = path.resolve(publicAssets.target, "sw.js");

generateSW({
    swDest: SW_PATH,
    globDirectory: staticOutput.target,
    globPatterns: ["**/*.{js,css,html,woff2}"],
    modifyURLPrefix: { "": "/_next/static/" },
    manifestTransforms: [
        (entries) => {
            const transformedEntries = entries.map((entry) => ({
                ...entry,
                url: entry.url.replaceAll("[", "%5B").replaceAll("]", "%5D"),
            }));
            return { manifest: transformedEntries };
        },
    ],
    additionalManifestEntries: ["/en", "/en/about", "/manifest.webmanifest"],
    runtimeCaching: [
        {
            urlPattern: ({ url }) => url.pathname.startsWith("/_next/static/"),
            handler: "StaleWhileRevalidate",
        },
    ],
});
