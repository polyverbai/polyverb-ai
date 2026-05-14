"use client";

import Link from "next/link";

import {
  ShieldCheck,
  FileText,
  Users,
  TrendingUp,
} from "lucide-react";

import { SectionLeft } from "@/components/ui/Section";
import { Grid, Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <main className="bg-transparent text-white overflow-hidden">

      {/* HERO */}
      <SectionLeft
        id="bfsi"
        label="Industries"
        title="BFSI (Banking, Financial Services & Insurance)"
        img="/images/bfsi.png"
      >
        Financial and banking content is localized with precision, compliance,
        and accuracy. PolyVerb AI enables global financial institutions to
        communicate effectively across markets while maintaining regulatory
        standards and trust.
      </SectionLeft>

      {/* BACK BUTTON RIGHT SIDE BELOW TEXT */}
      <div className="px-6 md:px-16 pb-8 md:pb-10 mt-0 md:-mt-20">
        <div className="max-w-xl md:max-w-7xl mx-auto flex justify-end md:pr-22">
          <Link
            href="/industries#capabilities"
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
          title="Regulatory Compliance"
          desc="Regulatory and compliance content for BFSI is localized with high accuracy and consistency, ensuring adherence to regional requirements while minimizing risk across global markets."
        />

        <Card
          icon={<FileText />}
          title="Financial Documentation"
          desc="Financial documents are localized with precision and consistency, ensuring accurate terminology, regulatory alignment, and clarity—supporting seamless communication across global financial markets."
        />

        <Card
          icon={<Users />}
          title="Customer Communications"
          desc="Customer-facing content is localized with clarity and cultural relevance, ensuring consistent messaging, improved engagement, and seamless communication across diverse global audiences."
        />

        <Card
          icon={<TrendingUp />}
          title="Fintech & Trading Platforms"
          desc="Fintech and trading platforms are localized to deliver accurate, real-time, and user-friendly experiences, ensuring clarity, regulatory alignment, and seamless interaction across global markets."
        />
      </Grid>

      {/* BOTTOM BUTTON */}
      <div className="px-6 md:px-16 pb-20">
        <div className="max-w-7xl mx-auto flex justify-center">
          <Link
            href="/industries#capabilities"
            className="inline-flex items-center gap-2 bg-cyan-400 text-black px-8 py-3 rounded-xl font-medium hover:bg-cyan-300 transition"
          >
            Back
          </Link>
        </div>
      </div>

    </main>
  );
  }