import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/config.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    output: "standalone",
    eslint: { ignoreDuringBuilds: true },
    transpilePackages: ["@stack-x/ui", "@stack-x/utilities"],
};

export default withNextIntl(nextConfig);
