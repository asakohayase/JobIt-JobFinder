"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <ToastContainer />
      {children}
    </ThemeProvider>
  );
}
