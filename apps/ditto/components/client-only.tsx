"use client";
import React from "react";
import type { PropsWithChildren } from "react";

interface ClientOnlyProps extends PropsWithChildren {
    fallback: React.ReactNode;
}

export default function ClientOnly({ children, fallback }: ClientOnlyProps): React.ReactNode {
    const [hasMounted, setHasMounted] = React.useState(false);

    React.useEffect(() => {
        setHasMounted(true);
    }, []);

    if (hasMounted) {
        return children;
    }

    return fallback;
}
