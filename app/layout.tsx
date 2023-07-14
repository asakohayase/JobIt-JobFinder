import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import React from "react";
import { Providers } from "./providers";

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
        className={`h-screen bg-natural-3 transition duration-150 ease-in-out dark:bg-black ${manrope.className}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
