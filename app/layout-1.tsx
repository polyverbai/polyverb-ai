import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "PolyVerb AI",
  description: "AI Powered Localization Platform",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${jakarta.className} text-white bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#0B1120] min-h-screen min-h-[100dvh] overflow-x-hidden`}
      >
        <Navbar />

        <main className="min-h-screen min-h-[100dvh] bg-transparent overflow-x-hidden">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}