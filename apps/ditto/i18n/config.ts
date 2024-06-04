import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { supportedLocales } from "./supported-locales";

export default getRequestConfig(async ({ locale }) => {
    if (!supportedLocales.includes(locale)) {
        return notFound();
    }

    return {
        messages: (await import(`./messages/${locale}.json`)).default,
    };
});
