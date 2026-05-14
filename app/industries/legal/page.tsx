"use client";

import Link from "next/link";

import {
  FileText,
  ShieldCheck,
  Copyright,
  Scale,
} from "lucide-react";

import { SectionLeft } from "@/components/ui/Section";
import { Grid, Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <main className="bg-transparent text-white overflow-hidden">

      {/* HERO */}
      <SectionLeft
        id="legal"
        label="Industries"
        title="Legal"
        img="/images/legal.png"
      >
        PolyVerb AI delivers high-precision legal localization for contracts,
        corporate documents, litigation, compliance materials, and intellectual
        property. With domain-specialized expertise, our platform ensures
        accurate terminology, preserves legal intent, and meets regional
        regulatory requirements—minimizing risk and enabling seamless global
        legal operations.
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
          icon={<FileText />}
          title="Contracts & Corporate Legal"
          desc="Contracts, agreements, and corporate legal documents are localized with precision to preserve intent, accuracy, and enforceability across jurisdictions."
        />

        <Card
          icon={<ShieldCheck />}
          title="Regulatory Compliance"
          desc="Court documents, legal proceedings, and compliance materials are adapted to meet regional legal requirements while ensuring clarity and consistency."
        />

        <Card
          icon={<Copyright />}
          title="Intellectual Property"
          desc="Patents, trademarks, and copyrights are translated with domain expertise to protect and accurately represent global intellectual assets."
        />

        <Card
          icon={<Scale />}
          title="Personal & Official Legal Documents"
          desc="Certificates, affidavits, and official documents are localized for accurate, compliant, and seamless use across different regions."
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