import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import React from "react";

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
    <html lang="en">
      <body className={`${manrope.className} bg-natural-3`}>{children}</body>
    </html>
  );
}
