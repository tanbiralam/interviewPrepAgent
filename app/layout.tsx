import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import React from "react";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Intervu",
  description: "An AI-powered platform for preparing for mock interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.className} antialiased pattern`}>
        {children}

        <Toaster />
      </body>
    </html>
  );
}
