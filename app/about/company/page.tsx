"use client";

import Link from "next/link";
import {
  Building2,
  Cpu,
  Users,
  CheckCircle,
  Target,
  Zap,
} from "lucide-react";

export default function Page() {
  const differentiators = [
    "AI + Human hybrid execution model",
    "30+ years founder-led industry expertise",
    "150+ languages and global market reach",
    "Enterprise delivery governance systems",
    "Continuous localization automation",
    "Faster turnaround with measurable ROI",
    "Scalable vendor and linguist ecosystem",
    "Built from operational reality, not theory",
  ];

  return (
    <main className="bg-transparent text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-7xl mx-auto text-center rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0B0F1A] to-[#05070D] px-8 md:px-14 py-16 md:py-20 shadow-[0_0_60px_rgba(34,211,238,0.08)]">

          <p className="text-[#67E8F9] uppercase tracking-[0.25em] text-sm mb-4">
            Company
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Building the Future of <br />
            <span className="text-[#22D3EE]">Global Localization</span>
          </h1>

          <div className="flex justify-center">
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl">
              PolyVerb AI is an AI-powered localization company helping enterprises
              expand across languages and markets through intelligent automation,
              multilingual workflows, and expert-driven quality systems built for
              speed, consistency, and global growth.
            </p>
          </div>

        </div>
      </section>

      {/* ================= COMPANY STORY ================= */}
<section className="px-6 md:px-16 pb-24">
  <div className="max-w-7xl mx-auto rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0B0F1A] to-[#05070D] p-8 md:p-14">

    {/* HEADER */}
    <div className="mb-12 text-center">
      <p className="text-[#67E8F9] uppercase text-sm tracking-widest mb-4">
        Company Story
      </p>

      <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
        Why PolyVerb AI Was Built
      </h2>
    </div>

    {/* TEXT CONTENT */}
    <div className="w-full max-w-6xl mx-auto">

      <p className="text-gray-400 leading-relaxed pb-4 text-justify">
        PolyVerb AI was founded by Radhakrishnan Mani, a localization
        industry leader with over 30 years of experience across
        multilingual delivery, enterprise operations, and global business
        transformation, together with Akash Madhu, a seasoned BFSI
        professional with 13+ years of experience across banking,
        financial services, governance, and regulated business environments.
      </p>

      <p className="text-gray-400 leading-relaxed pb-4 text-justify">
        Their complementary expertise in language technology,
        operational excellence, stakeholder management, and risk
        oversight created the strategic foundation for building a
        next-generation platform designed for modern global enterprises.
      </p>

      <p className="text-gray-400 leading-relaxed text-justify">
        PolyVerb AI was created to solve fragmented vendor ecosystems,
        rising costs, slow turnaround times, and disconnected tools
        through one unified platform that combines artificial intelligence,
        human expertise, workflow automation, and enterprise-grade governance.
      </p>

    </div>

    {/* FEATURE BOXES BELOW */}
    <div className="mt-12">
      <div className="grid md:grid-cols-3 gap-6">

        {/* Unified Platform */}
        <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
          <Building2 className="text-[#22D3EE] shrink-0 mt-1" size={20} />

          <div>
            <h4 className="font-semibold mb-1">
              Unified Platform
            </h4>

            <p className="text-sm text-gray-400 leading-relaxed">
              One ecosystem for multilingual growth.
            </p>
          </div>
        </div>

        {/* AI Automation */}
        <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
          <Cpu className="text-[#22D3EE] shrink-0 mt-1" size={20} />

          <div>
            <h4 className="font-semibold mb-1">
              AI Automation
            </h4>

            <p className="text-sm text-gray-400 leading-relaxed">
              Faster workflows and scalable execution.
            </p>
          </div>
        </div>

        {/* Human Expertise */}
        <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
          <Users className="text-[#22D3EE] shrink-0 mt-1" size={20} />

          <div>
            <h4 className="font-semibold mb-1">
              Human Expertise
            </h4>

            <p className="text-sm text-gray-400 leading-relaxed">
              Quality strengthened by specialists.
            </p>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>

      {/* ================= VISION / MISSION ================= */}
      <section className="px-6 md:px-16 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0B0F1A] to-[#05070D] p-8 md:p-10">
            <Target className="text-[#22D3EE] mb-5" size={28} />

            <h3 className="text-2xl font-semibold mb-4">
              Our Vision
            </h3>

            <p className="text-gray-400 leading-relaxed">
              To become the most trusted AI-powered localization infrastructure
              for enterprises expanding across languages and global markets.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0B0F1A] to-[#05070D] p-8 md:p-10">
            <Zap className="text-[#22D3EE] mb-5" size={28} />

            <h3 className="text-2xl font-semibold mb-4">
              Our Mission
            </h3>

            <p className="text-gray-400 leading-relaxed">
              To simplify multilingual operations through automation, expert
              quality, and scalable delivery models that help businesses grow globally.
            </p>
          </div>

        </div>
      </section>

      {/* ================= DIFFERENTIATORS ================= */}
      <section className="px-6 md:px-16 pb-24">
        <div className="max-w-7xl mx-auto rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0B0F1A] to-[#05070D] p-8 md:p-14">

          <p className="text-[#67E8F9] uppercase text-sm tracking-widest mb-4 text-center">
            What Makes Us Different
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold text-center mb-12">
            Built for Modern Enterprises
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {differentiators.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white/5 rounded-xl p-4"
              >
                <CheckCircle
                  size={18}
                  className="text-[#22D3EE] mt-0.5 shrink-0"
                />

                <span className="text-sm text-gray-300">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 md:px-16 pb-28">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to Grow Globally?
          </h2>

          <p className="text-gray-400 mb-16">
            Partner with PolyVerb AI to simplify multilingual expansion.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 mt-10 bg-[#22D3EE] text-black px-8 py-3 rounded-xl font-medium hover:bg-cyan-300 transition"
          >
            Contact Us
          </Link>

        </div>
      </section>

    </main>
  );
}