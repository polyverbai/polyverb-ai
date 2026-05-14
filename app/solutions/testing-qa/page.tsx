"use client";

import Link from "next/link";

import {
  Languages,
  CheckCircle,
  Settings,
  FileCheck,
} from "lucide-react";

import { SectionLeft } from "@/components/ui/Section";
import { Grid, Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <main className="bg-transparent text-white overflow-hidden">

      {/* HERO */}
      <SectionLeft
        id="testing"
        label="Solutions"
        title="Testing & QA"
        img="/images/testing-qa.png"
      >
        Quality and performance are ensured across languages through structured
        testing and QA processes. This validates linguistic accuracy,
        functionality, and user experience. It ensures global-ready products
        meet high standards across markets.
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
          icon={<Languages />}
          title="i18n Testing"
          desc="Products are tested to ensure they support multiple languages and regional formats. This includes validation of encoding, formats, and adaptability. It ensures readiness for localization."
        />

        <Card
          icon={<CheckCircle />}
          title="Localization Testing"
          desc="Localized content is tested for linguistic accuracy and contextual relevance. This ensures the content aligns with target audience expectations. It improves overall quality."
        />

        <Card
          icon={<Settings />}
          title="Functional Testing"
          desc="All localized versions are tested for functionality and usability. This ensures there are no defects or broken elements. It guarantees a consistent user experience."
        />

        <Card
          icon={<FileCheck />}
          title="Linguistic QA"
          desc="Content is reviewed for grammar, tone, and consistency. Native linguists ensure cultural and contextual accuracy. This enhances the final output quality."
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