"use client";

import Link from "next/link";

import {
  Globe,
  Languages,
  Map,
  CheckCircle,
} from "lucide-react";

import { SectionLeft } from "@/components/ui/Section";
import { Grid, Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <main className="bg-transparent text-white overflow-hidden">

      {/* HERO */}
      <SectionLeft
        id="global-language-coverage"
        label="Languages"
        title="Global Language Coverage"
        img="/images/languages-v2.png"
      >
        PolyVerb AI supports a wide range of global languages, enabling
        businesses to reach diverse audiences with accuracy, consistency,
        and cultural relevance across international markets.
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
          icon={<Globe />}
          title="150+ Global Languages"
          desc="Enterprise-grade multilingual capabilities across widely spoken and niche languages help organizations scale confidently into international markets."
        />

        <Card
          icon={<Languages />}
          title="Contextual Intelligence"
          desc="Language delivery is enhanced through context-aware workflows that preserve tone, intent, and business meaning across regions."
        />

        <Card
          icon={<Map />}
          title="Market Expansion Ready"
          desc="Support for multiple geographies enables faster launches, stronger customer engagement, and seamless global communication."
        />

        <Card
          icon={<CheckCircle />}
          title="Consistent Quality"
          desc="Centralized quality systems ensure consistent terminology, brand voice, and linguistic accuracy across all supported languages."
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