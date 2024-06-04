import React from "react";
import { useTranslations } from "next-intl";

import Navbar from "@/components/navbar";

import styles from "./page.module.css";

export default function About(): React.JSX.Element {
    const t = useTranslations("About");

    return (
        <main className={styles["main"]}>
            <h1>{t("title")}</h1>
            <Navbar />
            <hr />
            <p className={styles["paragraph"]}>Something here about me.</p>
        </main>
    );
}
