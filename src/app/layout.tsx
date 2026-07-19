import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InitialLoadSplash from "@/components/ui/InitialLoadSplash";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { SITE_URL } from "@/lib/metadata";
import "./globals.css";

// CLAUDE.md §5 — Display/Headings: Poppins, Bold/Semi-Bold only.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700"],
});

// CLAUDE.md §5 — Body/UI: Inter, Regular/Medium only.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "The LIOZIO Solutions — Building What Africa Deserves.",
  description:
    "LIOZIO Solutions is a Nigerian technology and commerce group building e-commerce and AI-powered solutions for African consumers, starting in Ibadan, Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <InitialLoadSplash />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
