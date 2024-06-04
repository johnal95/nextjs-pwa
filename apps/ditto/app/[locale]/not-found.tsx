import React from "react";
import { useTranslations } from "next-intl";

export default function NotFound(): React.JSX.Element {
    const t = useTranslations("NotFound");
    return <h1>{t("title")}</h1>;
}
