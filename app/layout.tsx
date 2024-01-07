"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "sonner";
import SmoothScroll from "@/components/SmoothScroll";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {/* <SmoothScroll> */}
          {children}
          <Footer />
          {/* </SmoothScroll> */}

          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
