import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/smooth-scroll-provider";
import Navbar from "@/components/layout/navbar";

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yaazhini | Luxury Heritage Catering",
  description: "Five-star concierge service meets ancestral Tamil culinary heritage. Serving pure, soft, handcrafted idlies for your premium events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodoniModa.variable} ${inter.variable} antialiased h-full`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-primary selection:text-white">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
