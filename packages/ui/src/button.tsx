"use client";
import React from "react";
import type { MouseEventHandler, PropsWithChildren } from "react";

import styles from "./button.module.css";

interface ButtonProps extends PropsWithChildren {
    onClick: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

export default function Button(props: ButtonProps): React.JSX.Element {
    const className = props.className
        ? `${styles["container"]} ${props.className}`
        : styles["container"];

    return (
        <button className={className} onClick={props.onClick}>
            {props.children}
        </button>
    );
}
