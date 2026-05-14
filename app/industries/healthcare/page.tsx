"use client";

import Link from "next/link";

import {
  Stethoscope,
  ShieldCheck,
  Pill,
  Microscope,
} from "lucide-react";

import { SectionLeft } from "@/components/ui/Section";
import { Grid, Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <main className="bg-transparent text-white overflow-hidden">

      {/* HERO */}
      <SectionLeft
        id="healthcare"
        label="Industries"
        title="Healthcare & Life Sciences"
        img="/images/healthcare.png"
      >
        PolyVerb AI delivers precise, compliant localization for healthcare and
        life sciences content, including clinical, pharmaceutical, and research
        materials. From medical devices and regulatory documentation to
        scientific publications, our platform ensures accuracy, clarity, and
        adherence to global standards—enabling safe and effective communication
        across markets.
      </SectionLeft>

      {/* BACK BUTTON RIGHT SIDE BELOW TEXT */}
      <div className="px-6 md:px-16 pb-8 md:pb-10 mt-0 md:-mt-20">
        <div className="max-w-xl md:max-w-7xl mx-auto flex justify-end md:pr-22">
          <Link
            href="/industries#capabilities"
            className="inline-flex items-center gap-2 border border-white/10 px-5 py-2 rounded-xl text-sm hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            ← Back
          </Link>
        </div>
      </div>

      {/* FEATURES */}
      <Grid>
        <Card
          icon={<Stethoscope />}
          title="Clinical Documentation"
          desc="Clinical trial and research documents are translated with high accuracy and domain expertise to ensure reliability and clarity."
        />

        <Card
          icon={<ShieldCheck />}
          title="Regulatory Compliance"
          desc="Healthcare documentation is aligned with international regulations to ensure consistency, accuracy, and compliance."
        />

        <Card
          icon={<Pill />}
          title="Pharmaceutical Content"
          desc="Drug-related content is localized with precision while meeting global regulatory standards and terminology requirements."
        />

        <Card
          icon={<Microscope />}
          title="Research & Publications"
          desc="Scientific and research content is translated while preserving technical accuracy, scientific meaning, and intended context."
        />
      </Grid>

      {/* BOTTOM BUTTON */}
      <div className="px-6 md:px-16 pb-20">
        <div className="max-w-7xl mx-auto flex justify-center">
          <Link
            href="/industries#capabilities"
            className="inline-flex items-center gap-2 bg-cyan-400 text-black px-8 py-3 rounded-xl font-medium hover:bg-cyan-300 transition"
          >
            Back
          </Link>
        </div>
      </div>

    </main>
  );
}