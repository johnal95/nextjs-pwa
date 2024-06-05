"use client";
import React from "react";
import { useAtom } from "jotai";

import { counterAtom } from "@/atoms/counter-atom";
import ClientOnly from "@/components/client-only";

export default function CounterReference(): React.JSX.Element {
    const [jotaiCount] = useAtom(counterAtom);

    return (
        <p>
            Oh and btw, the Jotai count is <ClientOnly fallback="?">{jotaiCount}</ClientOnly>
        </p>
    );
}
