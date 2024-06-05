import React from "react";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Provider as JotaiProvider } from "jotai";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import StoreProvider from "@/redux/store-provider";
import RegisterServiceWorker from "@/components/register-service-worker";
import "@/styles/globals.css";

interface RequestParams {
    locale: string;
}

interface RootLayoutProps extends PropsWithChildren {
    params: RequestParams;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ditto App",
    description: "Ditto app description",
};

export default async function RootLayout({
    children,
    params,
}: RootLayoutProps): Promise<React.JSX.Element> {
    const messages = await getMessages();

    return (
        <StoreProvider>
            <JotaiProvider>
                <html lang={params.locale}>
                    <meta name="theme-color" content="#ffc252" />
                    <link rel="apple-touch-icon" href="icon-512.png" />
                    <body className={inter.className}>
                        <NextIntlClientProvider locale={params.locale} messages={messages}>
                            {children}
                        </NextIntlClientProvider>
                    </body>
                    {process.env["NODE_ENV"] !== "development" && <RegisterServiceWorker />}
                </html>
            </JotaiProvider>
        </StoreProvider>
    );
}
