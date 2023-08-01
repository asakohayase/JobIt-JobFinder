import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import React from "react";
import { Providers } from "./providers";

import Nav from "@/components/Nav";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jobit",
  description: "Job Finder Web Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-natural-3 transition duration-150 ease-in-out dark:bg-darkBG-1 ${manrope.className}`}
      >
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
