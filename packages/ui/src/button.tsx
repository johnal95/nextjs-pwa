"use client";
import React from "react";
import type { MouseEventHandler, PropsWithChildren } from "react";
import mergeClassNames from "@stack-x/utilities/merge-class-names";

import styles from "./button.module.css";

interface ButtonProps extends PropsWithChildren {
    onClick: MouseEventHandler<HTMLButtonElement>;
    variant?: "primary" | "secondary";
    disabled?: boolean;
    className?: string;
}

export default function Button({ children, className, onClick }: ButtonProps): React.JSX.Element {
    return (
        <button className={mergeClassNames(styles["container"], className)} onClick={onClick}>
            {children}
        </button>
    );
}
