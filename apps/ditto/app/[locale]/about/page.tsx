import React from "react";
import { getTranslations } from "next-intl/server";

import Navbar from "@/components/navbar";

import CounterReference from "./counter-reference";
import styles from "./page.module.css";

export default async function About(): Promise<React.JSX.Element> {
    const t = await getTranslations("About");

    return (
        <main className={styles["main"]}>
            <h1>{t("title")}</h1>
            <Navbar />
            <hr />
            <p className={styles["paragraph"]}>Something here about me.</p>
            <CounterReference />
        </main>
    );
}
