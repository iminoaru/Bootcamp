import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import {ClerkProvider} from "@clerk/nextjs";
import Topbar from "@/components/shared/Topbar";
import LSbar from "@/components/shared/LSbar";
import RSbar from "@/components/shared/RSbar";
import Bottombar from "@/components/shared/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bootcamp",
  description: "Discussions, Camps, Orders, Connections",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
    <html lang="en">
    <body className={ inter.className }>
      <Topbar />
        <main className='flex flex-row'>
          <LSbar />
            <section className='main-container'>
              <div className='w-full max-w-4xl'>
                { children }
              </div>

            </section>

        </main>
      <Bottombar />
    </body>
    </html>
      </ClerkProvider>
  );
}
