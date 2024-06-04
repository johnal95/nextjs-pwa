import React from "react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export default function Navbar(): React.JSX.Element {
    const t = useTranslations("Navbar");

    return (
        <nav>
            <Link href="/">{t("links.home")}</Link> <Link href="/about">{t("links.about")}</Link>
        </nav>
    );
}
