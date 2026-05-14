"use client";

import Link from "next/link";

import {
  Globe,
  Users,
  CheckCircle,
  Workflow,
} from "lucide-react";

import { SectionLeft } from "@/components/ui/Section";
import { Grid, Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <main className="bg-transparent text-white overflow-hidden">

      {/* HERO */}
      <SectionLeft
        id="linguist-network"
        label="Languages"
        title="Linguist Network"
        img="/images/network-v2.png"
      >
        PolyVerb AI’s global linguist network combines native, in-country
        expertise with domain specialization to deliver culturally accurate and
        contextually precise multilingual experiences at enterprise scale.
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
          icon={<Users />}
          title="Native Linguists"
          desc="In-country language experts ensure natural fluency, cultural relevance, and audience resonance across markets."
        />

        <Card
          icon={<CheckCircle />}
          title="Quality Framework"
          desc="Continuous evaluation systems maintain high standards for consistency, terminology accuracy, and performance."
        />

        <Card
          icon={<Workflow />}
          title="Platform Integrated"
          desc="The linguist network connects with workflows for faster collaboration, streamlined reviews, and rapid delivery."
        />

        <Card
          icon={<Globe />}
          title="Scalable Resource Pool"
          desc="An on-demand global network supports high-volume enterprise programs with flexibility and speed."
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