import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${jakarta.className} text-white bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#0B1120] min-h-screen overflow-x-hidden`}
      >
        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="min-h-screen bg-transparent pt-20 md:pt-24">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}