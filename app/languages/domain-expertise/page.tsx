"use client";

import Link from "next/link";

import {
  ShieldCheck,
  HeartPulse,
  Scale,
  Cpu,
} from "lucide-react";

import { SectionLeft } from "@/components/ui/Section";
import { Grid, Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <main className="bg-transparent text-white overflow-hidden">

      {/* HERO */}
      <SectionLeft
        id="domain-expertise"
        label="Languages"
        title="Domain Expertise"
        img="/images/network-v2.png"
      >
        PolyVerb AI combines linguistic excellence with industry knowledge to
        deliver translations and localization tailored to specialized sectors.
        This ensures terminology precision, compliance alignment, and business relevance.
      </SectionLeft>

      {/* BACK BUTTON RIGHT SIDE BELOW TEXT */}
      <div className="px-6 md:px-16 pb-8 md:pb-10 mt-0 md:-mt-20">
        <div className="max-w-xl md:max-w-7xl mx-auto flex justify-end md:pr-22">
          <Link
            href="/languages#capabilities"
            className="inline-flex items-center gap-2 border border-white/10 px-5 py-2 rounded-xl text-sm hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            ← Back
          </Link>
        </div>
      </div>

      {/* FEATURES */}
      <Grid>
        <Card
          icon={<ShieldCheck />}
          title="BFSI & Compliance"
          desc="Financial, insurance, and compliance terminology is managed with accuracy, consistency, and regulatory awareness."
        />

        <Card
          icon={<HeartPulse />}
          title="Healthcare & Life Sciences"
          desc="Medical, pharmaceutical, and research content is localized with precision and domain sensitivity."
        />

        <Card
          icon={<Scale />}
          title="Legal & Corporate"
          desc="Contracts, litigation, and corporate documentation are translated while preserving legal meaning and intent."
        />

        <Card
          icon={<Cpu />}
          title="Technology & SaaS"
          desc="Software, UI strings, developer resources, and product content are localized for global user adoption."
        />
      </Grid>

      {/* BOTTOM BUTTON */}
      <div className="px-6 md:px-16 pb-20">
        <div className="max-w-7xl mx-auto flex justify-center">
          <Link
            href="/languages#capabilities"
            className="inline-flex items-center gap-2 bg-cyan-400 text-black px-8 py-3 rounded-xl font-medium hover:bg-cyan-300 transition"
          >
            Back
          </Link>
        </div>
      </div>

    </main>
  );
}