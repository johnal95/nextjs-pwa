"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { useAtom } from "jotai";
import Button from "@stack-x/ui/button";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { decrement, increment, selectCount } from "@/redux/features/counter/counter-slice";
import { counterAtom } from "@/atoms/counter-atom";

import styles from "./counter.module.css";
import ClientOnly from "./client-only";

export default function Counter(): React.JSX.Element {
    const dispatch = useAppDispatch();
    const reduxCount = useAppSelector(selectCount);
    const [jotaiCount, setJotaiCount] = useAtom(counterAtom);
    const t = useTranslations("Counter");

    return (
        <div className={styles["container"]}>
            <Button
                className="--margin-inline-end-m"
                onClick={() => {
                    setJotaiCount((prev) => prev - 1);
                    dispatch(decrement());
                }}
            >
                -
            </Button>
            <h2>
                {t("title")}: {reduxCount} (Redux)
                <br />
                {t("title")}: <ClientOnly fallback="?">{jotaiCount}</ClientOnly> (Jotai)
            </h2>
            <Button
                className="--margin-inline-start-m"
                onClick={() => {
                    setJotaiCount((prev) => prev + 1);
                    dispatch(increment());
                }}
            >
                +
            </Button>
        </div>
    );
}
