"use client";

import Link from "next/link";

import {
  Upload,
  ScanText,
  Route,
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
        id="workflow"
        label="Platform"
        title="Workflow Automation"
        img="/images/workflow-automation-v2.png"
      >
        Workflow Automation enables seamless orchestration of multilingual content
        processes, from ingestion to delivery. It eliminates manual intervention,
        improves efficiency, and ensures consistent execution across all stages of
        localization workflows.
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
          icon={<Upload />}
          title="Content ingestion (API, CMS, files)"
          desc="Content is automatically ingested from multiple sources including APIs, CMS platforms, and files. This eliminates manual uploads and reduces delays. It ensures seamless integration with existing systems."
        />

        <Card
          icon={<ScanText />}
          title="OCR + parsing"
          desc="The system extracts text from scanned documents, PDFs, and images using OCR. It then parses and structures the content for processing. This enables handling of complex formats efficiently."
        />

        <Card
          icon={<Route />}
          title="Automated routing"
          desc="Content is routed to the right AI models and human experts based on language and domain. This ensures optimal processing paths. It reduces manual coordination and errors."
        />

        <Card
          icon={<ShieldCheck />}
          title="QA automation"
          desc="Automated checks validate formatting, numbers, terminology, and completeness. This ensures consistency before human review. It reduces quality issues and rework."
        />

        <Card
          full
          icon={<GitBranch />}
          title="Version control"
          desc="All content versions are tracked and managed centrally. Changes and updates are recorded systematically. This ensures traceability and consistency across projects."
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