import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopNav from "@/components/top-nav";
import { Toaster } from "@/components/ui/sonner"
import Footer from "@/components/footer";
import {SessionProvider} from "next-auth/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tradian",
  description: "Evaluation of Tradian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f6f6f6]`}
      >
      <SessionProvider>
        <TopNav />
        <main className="pt-20 pb-12">
          {children}
        </main>
        <Footer />
        <Toaster />
      </SessionProvider>
      </body>
    </html>
  );
}
