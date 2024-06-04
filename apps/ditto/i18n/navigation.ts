import { createSharedPathnamesNavigation } from "next-intl/navigation";

import { supportedLocales } from "./supported-locales";

const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
    locales: supportedLocales,
});

export { Link, redirect, usePathname, useRouter };
