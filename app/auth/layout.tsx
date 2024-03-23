import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Bootcamp Auth",
    description: "Admissions and Recomps",
};

export default function RootLayout({ children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return ( <ClerkProvider>
        <html lang="en">
        <body className={`${inter.className} bg-dark-2`}>{children}</body>
        </html>
        </ClerkProvider>
    );
}
