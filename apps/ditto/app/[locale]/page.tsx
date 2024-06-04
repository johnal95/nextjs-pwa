import React from "react";
import { useTranslations } from "next-intl";

import Counter from "@/components/counter";
import Navbar from "@/components/navbar";

import styles from "./page.module.css";

export default function Home(): React.JSX.Element {
    const t = useTranslations("Home");

    return (
        <main className={styles["main"]}>
            <h1>{t("title")}</h1>
            <Navbar />
            <hr />
            <br />
            <Counter />
        </main>
    );
}
