"use client";
import React from "react";
import Button from "@stack-x/ui/button";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { decrement, increment, selectCount } from "@/redux/features/counter/counter-slice";

import styles from "./counter.module.css";

export default function Counter(): React.JSX.Element {
    const dispatch = useAppDispatch();
    const count = useAppSelector(selectCount);

    return (
        <div className={styles["container"]}>
            <Button className="--margin-inline-end-m" onClick={() => dispatch(decrement())}>
                -
            </Button>
            <h2>Count: {count}</h2>
            <Button className="--margin-inline-start-m" onClick={() => dispatch(increment())}>
                +
            </Button>
        </div>
    );
}
