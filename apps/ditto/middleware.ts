import createIntlMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";

import { supportedLocales } from "./i18n/supported-locales";

const intlMiddleware = createIntlMiddleware({
    locales: supportedLocales,
    defaultLocale: "en",
    localeDetection: true,
});

export default async function middleware(request: NextRequest): Promise<Response | undefined> {
    return intlMiddleware(request);
}

export const config = {
    matcher: ["/", "/(en|es)/:path*"],
};
