"use client";

import Link from "next/link";

import {
  MonitorSmartphone,
  Workflow,
  Code,
  Globe,
} from "lucide-react";

import { SectionLeft } from "@/components/ui/Section";
import { Grid, Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <main className="bg-transparent text-white overflow-hidden">

      {/* HERO */}
      <SectionLeft
        id="software"
        label="Solutions"
        title="Software & App Localization"
        img="/images/software-localization.png"
      >
        Localization is seamlessly integrated into your development lifecycle.
        Applications are adapted across languages, regions, and cultural contexts
        while maintaining performance, usability, and consistency.
      </SectionLeft>

      {/* BACK BUTTON RIGHT SIDE BELOW TEXT */}
      <div className="px-6 md:px-16 pb-8 md:pb-10 mt-0 md:-mt-20">
        <div className="max-w-xl md:max-w-7xl mx-auto flex justify-end md:pr-22">
          <Link
            href="/solutions#capabilities"
            className="inline-flex items-center gap-2 border border-white/10 px-5 py-2 rounded-xl text-sm hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            ← Back
          </Link>
        </div>
      </div>

      {/* FEATURES */}
      <Grid>
        <Card
          icon={<MonitorSmartphone />}
          title="UI/UX Adaptation"
          desc="Interfaces are adapted to suit different languages, scripts, and cultural expectations. This includes layout adjustments, text expansion handling, and usability alignment. The result is a seamless user experience across regions."
        />

        <Card
          icon={<Workflow />}
          title="Continuous Delivery"
          desc="Localization updates are automatically delivered alongside product updates. This ensures that all language versions remain in sync. It supports agile and fast-paced development cycles."
        />

        <Card
          icon={<Code />}
          title="Code-level Integration"
          desc="Localization is integrated directly into the development environment and code repositories. This ensures that language support is built alongside product features. It reduces delays and eliminates post-development localization efforts."
        />

        <Card
          icon={<Globe />}
          title="Multi-language Builds"
          desc="The system supports generation of multiple language versions simultaneously. This ensures consistent releases across markets. It enables efficient global product deployment."
        />
      </Grid>

      {/* BOTTOM BUTTON */}
      <div className="px-6 md:px-16 pb-20">
        <div className="max-w-7xl mx-auto flex justify-center">
          <Link
            href="/solutions#capabilities"
            className="inline-flex items-center gap-2 bg-cyan-400 text-black px-8 py-3 rounded-xl font-medium hover:bg-cyan-300 transition"
          >
            Back
          </Link>
        </div>
      </div>

    </main>
  );
}