"use client";

import Link from "next/link";

import {
  Search,
  Layout,
  Languages,
  Globe,
} from "lucide-react";

import { SectionLeft } from "@/components/ui/Section";
import { Grid, Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <main className="bg-transparent text-white overflow-hidden">

      {/* HERO */}
      <SectionLeft
        id="website"
        label="Solutions"
        title="Website Localization"
        img="/images/website-localization.png"
      >
        Websites are adapted to reflect local language, culture, and user
        expectations. This ensures a consistent and engaging experience
        across global markets.
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
          icon={<Search />}
          title="SEO Localization"
          desc="Content is optimized for local search engines and regional keywords. This improves visibility and discoverability in target markets. It ensures that your website performs effectively across geographies."
        />

        <Card
          icon={<Layout />}
          title="CMS Integration"
          desc="The platform integrates with content management systems for automated content updates. This reduces manual effort and ensures consistency. It enables dynamic content localization at scale."
        />

        <Card
          icon={<Languages />}
          title="Dynamic Content Handling"
          desc="Both static and dynamic website elements are localized efficiently. This includes metadata, UI strings, and user-generated content. It ensures a complete localized experience."
        />

        <Card
          icon={<Globe />}
          title="Cultural Adaptation"
          desc="Content is adapted to reflect local culture, tone, and preferences. This enhances user engagement and trust. It ensures your brand resonates with local audiences."
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