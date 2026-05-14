"use client";

import Link from "next/link";

import {
  Code,
  Upload,
  ShieldCheck,
  GitBranch,
} from "lucide-react";

import { SectionLeft } from "@/components/ui/Section";
import { Grid, Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <main className="bg-transparent text-white overflow-hidden">

      {/* HERO */}
      <SectionLeft
        id="engine"
        label="Platform"
        title="AI Language Engine"
        img="/images/ai-language-engine.png"
      >
        The AI Language Engine powers multilingual content processing with advanced
        models that understand context, tone, and domain-specific nuances. It
        ensures high accuracy, consistency, and scalability across all languages.
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
          title="Context-aware AI models"
          desc="Advanced models understand context, tone, and intent across languages. This ensures accurate and meaningful translations."
        />

        <Card
          icon={<Upload />}
          title="Multi-format processing"
          desc="Supports documents, media, and structured content formats. This enables seamless processing across diverse content types."
        />

        <Card
          icon={<ShieldCheck />}
          title="Quality optimization"
          desc="AI models are continuously refined with feedback loops. This ensures consistent and high-quality output across use cases."
        />

        <Card
          icon={<GitBranch />}
          title="Scalable architecture"
          desc="Designed to handle enterprise-scale volumes efficiently. This ensures performance, speed, and reliability."
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