"use client";

import Link from "next/link";

import {
  FileText,
  Target,
  Layout,
  Database,
} from "lucide-react";

import { SectionLeft } from "@/components/ui/Section";
import { Grid, Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <main className="bg-transparent text-white overflow-hidden">

      {/* HERO */}
      <SectionLeft
        id="global"
        label="Solutions"
        title="Global Content & Translation"
        img="/images/global-content-translation.png"
      >
        Translate enterprise content across formats with high accuracy and scalability.
        Supports multi-format content while preserving original layouts and structure.
        Delivers domain-specific translation tailored to industry terminology and context.
        Handles high-volume workloads efficiently with AI-driven automation and human validation.
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
          icon={<FileText />}
          title="Multi-format Support"
          desc="The platform supports a wide range of file formats including documents, PDFs, and scanned files. This ensures flexibility across use cases. It eliminates the need for format-specific handling."
        />

        <Card
          icon={<Target />}
          title="Domain-specific Translation"
          desc="Content is matched with domain-trained AI models and expert linguists. This ensures accuracy in specialized fields. It improves quality for technical and regulated content."
        />

        <Card
          icon={<Layout />}
          title="Layout Preservation"
          desc="Translated content retains the original formatting and structure. This ensures consistency in presentation. It reduces post-processing effort."
        />

        <Card
          icon={<Database />}
          title="High-volume Processing"
          desc="The system is designed to handle large volumes of content efficiently. Automation ensures speed without compromising quality. It supports enterprise-scale operations."
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