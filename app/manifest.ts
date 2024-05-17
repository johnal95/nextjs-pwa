import type { MetadataRoute } from "next";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
    return {
        name: "Next.js PWA",
        short_name: "Next App",
        description: "This is a Next.js PWA",
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "any",
        theme_color: "#ffc252",
        icons: [
            {
                src: "/icon-512.png",
                sizes: "512x512",
                type: "image/png",
            },
            {
                src: "/icon-1024.png",
                sizes: "1024x1024",
                type: "image/png",
            },
            {
                src: "/icon-maskable.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable",
            },
        ],
        screenshots: [
            {
                src: "/screenshot.png",
                sizes: "1170x2532",
                type: "image/png",
            },
        ],
    };
}
