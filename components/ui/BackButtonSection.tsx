"use client";

import Link from "next/link";

export default function BackButtonSection({ href }: { href: string }) {
  return (
    <div className="px-6 md:px-16 mt-2 md:-mt-20 pb-8 md:pb-10">
      <div className="max-w-xl md:max-w-7xl mx-auto flex justify-end md:pr-22">
        <Link
          href={href}
          className="inline-flex items-center gap-2 border border-white/10 px-5 py-2 rounded-xl text-sm hover:border-cyan-400 hover:text-cyan-400 transition"
        >
          ← Back
        </Link>
      </div>
    </div>
  );
}