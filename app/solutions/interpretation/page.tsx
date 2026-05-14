"use client";

import Link from "next/link";

import {
  Headphones,
  Users,
  Phone,
  Globe,
} from "lucide-react";

import { SectionLeft } from "@/components/ui/Section";
import { Grid, Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <main className="bg-transparent text-white overflow-hidden">

      {/* HERO */}
      <SectionLeft
        id="interpretation"
        label="Solutions"
        title="Interpretation"
        img="/images/interpretation.png"
      >
        Real-time communication is enabled across languages through interpretation
        services. This ensures accurate and seamless interaction in multilingual
        environments. It supports global collaboration without language barriers.
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
          icon={<Headphones />}
          title="Simultaneous Interpretation"
          desc="Real-time interpretation is delivered during live events and conferences. This ensures seamless communication without delays. It is ideal for large-scale and multilingual environments."
        />

        <Card
          icon={<Users />}
          title="Consecutive Interpretation"
          desc="Speakers pause to allow interpreters to deliver accurate translations. This ensures clarity and precision. It is commonly used in meetings, healthcare, and legal settings."
        />

        <Card
          icon={<Phone />}
          title="Remote / On-demand"
          desc="Interpretation services are available via phone or video platforms. This enables instant access to language support. It is ideal for urgent and distributed scenarios."
        />

        <Card
          icon={<Globe />}
          title="Event Support"
          desc="Dedicated interpreters support events, business meetings, and travel requirements. They also provide cultural guidance where needed. This ensures smooth communication in all settings."
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