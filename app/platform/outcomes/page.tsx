"use client";

import Link from "next/link";

import {
  Clock,
  CheckCircle,
  Activity,
  TrendingUp,
} from "lucide-react";

import { SectionLeft } from "@/components/ui/Section";
import { Grid, Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <main className="bg-transparent text-white overflow-hidden">

      {/* HERO */}
      <SectionLeft
        id="outcomes"
        label="Platform"
        title="Outcomes"
        img="/images/outcomes-v2.png"
      >
        The platform delivers measurable outcomes by improving speed, quality,
        and efficiency across localization workflows. It enables businesses to
        scale globally with consistency and reduced operational complexity.
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
          icon={<Clock />}
          title="Faster time-to-market"
          desc="Automation and integration reduce delays in localization. Products can be launched globally faster. This improves competitive advantage."
        />

        <Card
          icon={<CheckCircle />}
          title="Consistent quality"
          desc="Standardized processes and AI ensure uniform quality across languages. Terminology and style remain consistent. This strengthens brand integrity."
        />

        <Card
          icon={<Activity />}
          title="Reduced manual effort"
          desc="Automation eliminates repetitive tasks and manual coordination. Teams can focus on high-value activities. This improves efficiency and productivity."
        />

        <Card
          icon={<TrendingUp />}
          title="Scalable operations"
          desc="The platform supports growing volumes and markets without complexity. It adapts to business expansion seamlessly. This enables long-term scalability."
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