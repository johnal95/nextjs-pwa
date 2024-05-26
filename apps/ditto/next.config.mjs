/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    output: "standalone",
    eslint: { ignoreDuringBuilds: true },
    experimental: {
        reactCompiler: true,
    },
};

export default nextConfig;
