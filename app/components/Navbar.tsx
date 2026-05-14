"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  const navLinks = [
    { href: "/platform", label: "Platform" },
    { href: "/solutions", label: "Solutions" },
    { href: "/industries", label: "Industries" },
    { href: "/languages", label: "Languages" },
    { href: "/approach", label: "Approach" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[999999] pointer-events-auto w-full border-b border-white/10 bg-[#05070D]/95 backdrop-blur-xl">

      <div className="max-w-[1600px] mx-auto h-20 md:h-24 px-4 md:px-8 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" onClick={closeMenu}>
          <img
            src="/logo.png"
            alt="PolyVerb AI"
            className="h-14 md:h-24 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-10 text-[15px] font-medium text-gray-300">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative py-2 whitespace-nowrap hover:text-white transition group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-[2px] bg-cyan-400 w-0 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="bg-[#22D3EE] text-black px-7 py-3 rounded-3xl font-medium hover:bg-cyan-300 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2 rounded-lg"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
  <div className="lg:hidden absolute top-full right-3 mt-2 z-[999999] w-[210px] max-w-[82vw]">

    <div className="bg-[#05070D] border border-white/10 rounded-2xl px-3 py-3 shadow-2xl">

      <div className="space-y-1">
        {navLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={closeMenu}
            className="block px-3 py-2 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5 transition"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="mt-2">
        <Link
          href="/contact"
          onClick={closeMenu}
          className="flex items-center justify-center w-full bg-[#22D3EE] text-black px-3 py-2 rounded-xl text-sm font-medium hover:bg-cyan-300 transition"
        >
          Contact Us
        </Link>
      </div>

    </div>
  </div>
)}
    </header>
  );
}