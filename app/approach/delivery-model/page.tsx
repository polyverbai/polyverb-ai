"use client";

import Link from "next/link";

import {
  Briefcase,
  Layers,
  Eye,
  DollarSign,
} from "lucide-react";

import { SectionLeft } from "@/components/ui/Section";
import { Grid, Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <main className="bg-transparent text-white overflow-hidden">

      {/* HERO */}
      <SectionLeft
        id="delivery-model"
        label="Approach"
        title="Delivery Model"
        img="/images/delivery-model-v2.png"
      >
        PolyVerb AI delivers projects through scalable workflows, real-time
        tracking, and dedicated management to ensure efficiency,
        transparency, and optimized outcomes for enterprise clients.
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
          icon={<Briefcase />}
          title="Dedicated Project Management"
          desc="Each engagement is managed by experienced professionals to ensure coordination, accountability, and timely delivery."
        />

        <Card
          icon={<Layers />}
          title="Scalable Workflows"
          desc="Processes are designed to handle increasing volumes, multiple markets, and growing complexity with flexibility."
        />

        <Card
          icon={<Eye />}
          title="Real-time Tracking"
          desc="Projects are monitored continuously for visibility, transparency, faster decisions, and better operational control."
        />

        <Card
          icon={<DollarSign />}
          title="Cost Optimization"
          desc="Automation, reuse, and streamlined execution reduce costs while maintaining high quality and strong ROI."
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