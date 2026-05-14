"use client";

import Link from "next/link";

import {
  Code,
  Upload,
  FlaskConical,
  RefreshCw,
} from "lucide-react";

import { SectionLeft } from "@/components/ui/Section";
import { Grid, Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <main className="bg-transparent text-white overflow-hidden">

      {/* HERO */}
      <SectionLeft
        id="continuous"
        label="Platform"
        title="Continuous Localization"
        img="/images/continuous-localization-v2.png"
      >
        Continuous localization ensures that content is updated, translated, and
        deployed in real time as products evolve. It integrates localization into
        the development lifecycle, enabling faster releases and consistent global
        experiences.
      </SectionLeft>

      {/* BACK BUTTON RIGHT SIDE BELOW TEXT */}
      <div className="px-6 md:px-16 pb-8 md:pb-10 mt-0 md:-mt-20">
        <div className="max-w-xl md:max-w-7xl mx-auto flex justify-end md:pr-22">
          <Link
            href="/platform#capabilities"
            className="inline-flex items-center gap-2 border border-white/10 px-5 py-2 rounded-xl text-sm hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            ← Back
          </Link>
        </div>
      </div>

      {/* FEATURES */}
      <Grid>
        <Card
          icon={<Code />}
          title="String extraction"
          desc="Translatable content is automatically extracted from code and systems. This removes manual effort and errors. It ensures all elements are captured accurately."
        />

        <Card
          icon={<Upload />}
          title="Auto reintegration"
          desc="Translated content is automatically pushed back into the system. This reduces engineering effort and delays. It ensures seamless deployment."
        />

        <Card
          icon={<FlaskConical />}
          title="Pseudo-localization"
          desc="Simulated translations help identify UI and layout issues early. This improves product readiness for global markets. It reduces post-release issues."
        />

        <Card
          icon={<RefreshCw />}
          title="Release synchronization"
          desc="All language versions are aligned with product releases. This ensures consistency across regions. It enables simultaneous global launches."
        />
      </Grid>

      {/* BOTTOM BUTTON */}
      <div className="px-6 md:px-16 pb-20">
        <div className="max-w-7xl mx-auto flex justify-center">
          <Link
            href="/platform#capabilities"
            className="inline-flex items-center gap-2 bg-cyan-400 text-black px-8 py-3 rounded-xl font-medium hover:bg-cyan-300 transition"
          >
            Back
          </Link>
        </div>
      </div>

    </main>
  );
}