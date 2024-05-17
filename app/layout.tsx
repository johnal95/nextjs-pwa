import React from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: PropsWithChildren): React.JSX.Element {
    return (
        <html lang="en">
            <meta name="theme-color" content="#ffc252" />
            <link rel="apple-touch-icon" href="icon-512.png" />
            <body className={inter.className}>{children}</body>
            <Script src="/sw-register.js" />
        </html>
    );
}
