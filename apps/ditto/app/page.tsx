import React from "react";

import Counter from "@/components/counter";

import styles from "./page.module.css";

export default function Home(): React.JSX.Element {
    return (
        <main className={styles["main"]}>
            <h1>Hello world</h1>
            <hr />
            <br />
            <Counter />
        </main>
    );
}
