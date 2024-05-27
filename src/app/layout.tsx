import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans min-h-screen selection:bg-primary selection:text-light debug-screens bg-light pt-40 overflow-x-hidden">
        {/* <Header /> */}
          <main className="min-h-screen ">{children}</main>
      </body>
    </html>
  );
}
