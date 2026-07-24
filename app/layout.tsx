import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ScholatechAIChatbot } from "@/components/ai/ScholatechAIChatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Scholatech — Premium School Tech | Built Once. Owned Forever.",
  description:
    "We build websites, school management systems, and CBT installations for Nigerian schools. Pay once, get full source code, zero subscriptions.",
  keywords: [
    "Nigerian school website developer",
    "School management system Nigeria",
    "CBT software for schools",
    "One-time payment school software",
    "Source code ownership school software",
  ],
  authors: [{ name: "Scholatech Studio" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="bg-[#050816] text-[#F8FAFC] antialiased flex flex-col min-h-screen">
        {children}
        <ScholatechAIChatbot />
      </body>
    </html>
  );
}
