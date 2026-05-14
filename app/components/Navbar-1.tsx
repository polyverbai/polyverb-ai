"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  const navLinks = [
    { href: "/platform", label: "Platform" },
    { href: "/solutions", label: "Solutions" },
    { href: "/industries", label: "Industries" },
    { href: "/languages", label: "Languages" },
    { href: "/approach", label: "Approach" },
  ];

  return (
    <>
      <header className="sticky top-0 z-[9999] w-full border-b border-white/10 bg-[#05070D]/90 backdrop-blur-xl">
        <div className="max-w-[1600px] mx-auto h-20 md:h-24 px-4 md:px-8 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" onClick={closeMenu}>
            <img
              src="/logo.png"
              alt="PolyVerb AI"
              className="h-14 md:h-20 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-14 text-[15px] font-medium text-gray-300">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative py-2 whitespace-nowrap text-gray-300 hover:text-white transition group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-[2px] bg-cyan-400 w-0 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* DESKTOP CONTACT */}
          <Link
            href="/contact"
            className="hidden md:inline-flex bg-[#22D3EE] text-black px-7 py-3 rounded-3xl font-medium hover:bg-cyan-300 transition shadow-md items-center"
          >
            Contact Us
          </Link>
        </div>
      </header>

      {/* FIXED MOBILE TOGGLE BUTTON */}
      <button
        type="button"
        onClick={() => setMobileOpen((prev) => !prev)}
        className="md:hidden fixed top-4 right-4 z-[999999] bg-[#05070D] border border-white/10 text-white rounded-xl p-2 shadow-xl pointer-events-auto"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* MOBILE MENU OVERLAY */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[999998] bg-black/60 backdrop-blur-sm pointer-events-auto">
          <div className="absolute top-16 left-4 right-4 bg-[#05070D] border border-white/10 rounded-2xl p-4 shadow-2xl space-y-2">

            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="block text-center mt-3 bg-[#22D3EE] text-black px-6 py-3 rounded-2xl font-medium hover:bg-cyan-300 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}