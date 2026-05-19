"use client";

import Link from "next/link";

import {
  Languages,
  Map,
  Globe,
  CheckCircle,
} from "lucide-react";

import { SectionLeft } from "@/components/ui/Section";
import { Grid, Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <main className="bg-transparent text-white overflow-hidden">

      {/* HERO */}
      <SectionLeft
        id="regional-language-coverage"
        label="Languages"
        title="Regional Language Coverage"
        img="/images/regional_language_coverage-v2.png"
      >
        PolyVerb AI provides strong regional language support across high-growth
        and strategic markets. From India to Europe, Asia, and the Middle East,
        businesses can engage audiences with linguistic precision and cultural relevance.
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
          icon={<Languages />}
          title="Indian Languages"
          desc="Comprehensive support for regional Indian languages enables stronger domestic reach, accessibility, and multilingual engagement across diverse audiences."
        />

        <Card
          icon={<Map />}
          title="Asian Languages"
          desc="Coverage includes major Asian languages across fast-growing economies, helping businesses expand with linguistic confidence."
        />

        <Card
          icon={<Map />}
          title="European Languages"
          desc="Support for key European languages helps organizations access mature markets while aligning with local communication expectations."
        />

        <Card
          icon={<Globe />}
          title="Middle East & Africa"
          desc="Languages across the Middle East and Africa are supported with cultural sensitivity, nuance, and context-aware localization."
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