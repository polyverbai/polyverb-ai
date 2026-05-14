"use client";

import Link from "next/link";

import {
  ShieldCheck,
  FileText,
  Activity,
  BarChart3,
} from "lucide-react";

import { SectionLeft } from "@/components/ui/Section";
import { Grid, Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <main className="bg-transparent text-white overflow-hidden">

      {/* HERO */}
      <SectionLeft
        id="quality-framework"
        label="Approach"
        title="Quality Framework"
        img="/images/quality-framework-v2.png"
      >
        PolyVerb AI ensures enterprise-grade quality through structured
        frameworks, multi-level validation, and continuous performance tracking
        to maintain consistency and accuracy across all multilingual content.
      </SectionLeft>

      {/* BACK BUTTON RIGHT SIDE BELOW TEXT */}
      <div className="px-6 md:px-16 pb-8 md:pb-10 mt-0 md:-mt-20">
        <div className="max-w-xl md:max-w-7xl mx-auto flex justify-end md:pr-22">
          <Link
            href="/approach#capabilities"
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
          title="Multi-level QA"
          desc="Content undergoes multiple layers of review and validation to ensure high accuracy, consistency, and minimized errors."
        />

        <Card
          icon={<FileText />}
          title="Terminology Governance"
          desc="Centralized terminology management ensures consistent language usage, brand voice, and domain accuracy across projects."
        />

        <Card
          icon={<Activity />}
          title="Style Consistency"
          desc="Content follows approved style guides, tone standards, and communication principles for uniform global messaging."
        />

        <Card
          icon={<BarChart3 />}
          title="Performance Tracking"
          desc="Quality and efficiency metrics are continuously measured to support optimization, accountability, and long-term improvement."
        />
      </Grid>

      {/* BOTTOM BUTTON */}
      <div className="px-6 md:px-16 pb-20">
        <div className="max-w-7xl mx-auto flex justify-center">
          <Link
            href="/approach#capabilities"
            className="inline-flex items-center gap-2 bg-cyan-400 text-black px-8 py-3 rounded-xl font-medium hover:bg-cyan-300 transition"
          >
            Back
          </Link>
        </div>
      </div>

    </main>
  );
}