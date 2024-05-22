import React from "react";

import styles from "./page.module.css";
import Counter from "./counter";

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
