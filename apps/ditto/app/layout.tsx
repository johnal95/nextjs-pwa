import React from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import StoreProvider from "@/redux/store-provider";
import RegisterServiceWorker from "@/components/register-service-worker";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ditto App",
    description: "Ditto app description",
};

export default function RootLayout({ children }: PropsWithChildren): React.JSX.Element {
    return (
        <StoreProvider>
            <html lang="en">
                <meta name="theme-color" content="#ffc252" />
                <link rel="apple-touch-icon" href="icon-512.png" />
                <body className={inter.className}>{children}</body>
                <RegisterServiceWorker />
            </html>
        </StoreProvider>
    );
}
