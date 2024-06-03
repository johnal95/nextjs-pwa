"use client";
import React, { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";

import { createStore } from "@/redux/store";
import type { AppStore } from "@/redux/store";

export default function StoreProvider({ children }: React.PropsWithChildren): React.JSX.Element {
    const storeRef = useRef<AppStore | null>(null);

    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = createStore();
    }

    useEffect(() => {
        if (storeRef.current != null) {
            const unsubscribe = setupListeners(storeRef.current.dispatch);

            return () => {
                unsubscribe();
            };
        }

        return;
    }, []);

    return <Provider store={storeRef.current}>{children}</Provider>;
}
