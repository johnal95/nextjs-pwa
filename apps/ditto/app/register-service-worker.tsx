"use client";
import React from "react";

export default function RegisterServiceWorker(): React.ReactNode {
    React.useEffect(() => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/sw.js").catch(console.warn);
        }
    }, []);

    return null;
}
