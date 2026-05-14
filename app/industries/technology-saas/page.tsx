"use client";

import Link from "next/link";

import {
  Layout,
  FileText,
  Globe,
  Cpu,
} from "lucide-react";

import { SectionLeft } from "@/components/ui/Section";
import { Grid, Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <main className="bg-transparent text-white overflow-hidden">

      {/* HERO */}
      <SectionLeft
        id="technology"
        label="Industries"
        title="Technology & SaaS"
        img="/images/technology.png"
      >
        PolyVerb AI enables technology and SaaS companies to scale globally by
        localizing applications, platforms, websites, and technical
        documentation. From UI/UX and product experiences to developer
        resources, our platform ensures intuitive, high-performance, and
        culturally aligned user experiences across markets—driving adoption and
        global growth.
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
          icon={<Layout />}
          title="UI Localization"
          desc="User interfaces, layouts, and workflows are optimized to align with cultural, linguistic, and usability expectations."
        />

        <Card
          icon={<FileText />}
          title="Technical & Developer Documentation"
          desc="User manuals, API documentation, and developer resources are translated with precision to ensure clarity and technical accuracy."
        />

        <Card
          icon={<Globe />}
          title="Website & Web App Localization"
          desc="Websites and web applications are adapted to ensure accessibility, performance, and user engagement across diverse regions."
        />

        <Card
          icon={<Cpu />}
          title="Application & Platform Localization"
          desc="Software applications, SaaS platforms, and dashboards are localized to deliver seamless, intuitive, and globally consistent user experiences."
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