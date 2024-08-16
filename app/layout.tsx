import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { ToastContainer } from "react-toastify";

import { Navbar } from "@/components/containers";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Blog",
  description: "My very own personal blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="emerald" lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
