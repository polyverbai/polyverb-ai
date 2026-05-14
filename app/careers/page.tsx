"use client";

import Link from "next/link";
import {
  Briefcase,
  Users,
  Globe,
  Rocket,
  CheckCircle,
} from "lucide-react";

export default function Page() {
  const perks = [
    "Growth-driven startup culture",
    "Global market exposure",
    "Learning & development support",
    "Ownership based environment",
    "AI-first innovation workspace",
    "Flexible high-performance culture",
    "Leadership visibility",
    "Meaningful long-term growth",
  ];

  return (
    <main className="bg-transparent text-white overflow-hidden">
      {/* HERO */}
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-7xl mx-auto text-center rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0B0F1A] to-[#05070D] px-8 md:px-14 py-16 md:py-20">
          <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm mb-4">
            Careers
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Join the Team Building the <br />
            <span className="text-cyan-400">
              Future of Localization
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed text-center px-6">
            We are building a category-defining company where ambitious professionals can grow, lead and create global impact.
          </p>

          <Link
            href="/careers/openings"
            className="inline-block mt-8 bg-cyan-400 text-black px-8 py-3 rounded-xl font-medium hover:bg-cyan-300 transition"
          >
            View Current Opportunities
          </Link>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="px-6 md:px-16 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            ["People First", "Strong collaborative teams.", Users],
            ["Fast Growth", "Accelerated learning opportunities.", Rocket],
            ["Global Impact", "Work with enterprises worldwide.", Globe],
            ["Career Path", "Leadership opportunities ahead.", Briefcase],
          ].map(([title, desc, Icon]: any, i) => (
            <div
              key={i}
              className="bg-[#0B0F1A] rounded-3xl border border-white/10 p-8"
            >
              <Icon className="text-cyan-400 mb-4" />
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-6 md:px-16 pb-28">
        <div className="max-w-7xl mx-auto rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0B0F1A] to-[#05070D] p-8 md:p-14">
          <h2 className="text-3xl md:text-5xl font-semibold text-center mb-12">
            Why Work With Us
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {perks.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white/5 rounded-xl p-4"
              >
                <CheckCircle
                  size={18}
                  className="text-cyan-400 mt-0.5 shrink-0"
                />
                <span className="text-sm text-gray-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA OUTSIDE BOX */}
      <section className="px-6 md:px-16 pb-28 text-center">
        <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm mb-4">
          Careers
        </p>

        <h2 className="text-3xl md:text-5xl font-semibold mb-5">
          Build the Future With Us
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed text-center mb-8 px-6">
  Join a high-performance team creating AI-powered language solutions for global businesses.
</p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link
            href="/careers/openings"
            className="bg-cyan-400 text-black px-8 py-3 rounded-xl font-medium hover:bg-cyan-300 transition"
          >
            View Open Roles
          </Link>

          <Link
            href="/contact"
            className="border border-white/10 px-8 py-3 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}