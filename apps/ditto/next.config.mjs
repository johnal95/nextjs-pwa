/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    output: "standalone",
    eslint: { ignoreDuringBuilds: true },
    transpilePackages: ["@stack-x/ui", "@stack-x/utilities"],
};

export default nextConfig;
