"use client";
import React from "react";

import Button from "@/components/button";

import styles from "./counter.module.css";

export default function Counter(): React.JSX.Element {
    const [count, setCount] = React.useState(0);

    return (
        <div className={styles["container"]}>
            <Button className="--margin-inline-end-m" onClick={() => setCount(count - 1)}>
                -
            </Button>
            <h2>Count: {count}</h2>
            <Button className="--margin-inline-start-m" onClick={() => setCount(count + 1)}>
                +
            </Button>
        </div>
    );
}
