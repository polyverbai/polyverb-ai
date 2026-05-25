import Script from "next/script";
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

        {/* CRISP CHAT */}
        <Script id="crisp-chat" strategy="afterInteractive">
          {`
            window.$crisp = [];
            window.CRISP_WEBSITE_ID = "4506c411-9282-4b46-86a8-ee0f75c57a5d";

            (function() {
              var d = document;
              var s = d.createElement("script");

              s.src = "https://client.crisp.chat/l.js";
              s.async = 1;

              d.getElementsByTagName("head")[0].appendChild(s);
            })();

            window.addEventListener("load", function () {
              if (window.$crisp) {
                window.$crisp.push(["do", "session:reset"]);
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}