"use client";
import React from "react";
import type { MouseEventHandler, PropsWithChildren } from "react";

import styles from "./button.module.css";

interface ButtonProps extends PropsWithChildren {
    onClick: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

export default function Button({ children, className, onClick }: ButtonProps): React.JSX.Element {
    return (
        <button
            className={className ? `${styles["container"]} ${className}` : styles["container"]}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
