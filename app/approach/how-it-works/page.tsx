"use client";

import Link from "next/link";

import {
  Upload,
  Cpu,
  Users,
  CheckCircle,
  RefreshCw,
} from "lucide-react";

import { SectionLeft } from "@/components/ui/Section";
import { Grid, Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <main className="bg-transparent text-white overflow-hidden">

      {/* HERO */}
      <SectionLeft
        id="how-it-works"
        label="Approach"
        title="How It Works"
        img="/images/how-it-works-v2.png"
      >
        PolyVerb AI follows an intelligent AI-driven workflow that combines
        automation and human expertise to deliver accurate, scalable, and
        high-quality multilingual content across industries.
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
          icon={<Upload />}
          title="Intelligent Ingestion"
          desc="Content is automatically collected from multiple sources and formats. This ensures seamless input handling and reduces manual effort."
        />

        <Card
          icon={<Cpu />}
          title="AI Processing"
          desc="AI models process and prepare content for localization, including classification and alignment for efficiency and accuracy."
        />

        <Card
          icon={<Users />}
          title="Human Validation"
          desc="Experts review and refine AI outputs for quality, nuance, cultural relevance, and contextual accuracy."
        />

        <Card
          icon={<CheckCircle />}
          title="Automated QA"
          desc="System-driven checks validate consistency and correctness, reducing errors and improving reliability."
        />

        <Card
          full
          icon={<RefreshCw />}
          title="Continuous Learning"
          desc="The system learns from feedback and improves over time, enhancing performance, accuracy, and long-term efficiency."
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