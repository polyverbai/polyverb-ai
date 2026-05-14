"use client";

import Link from "next/link";

import {
  Video,
  Mic,
  Gamepad2,
  Megaphone,
} from "lucide-react";

import { SectionLeft } from "@/components/ui/Section";
import { Grid, Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <main className="bg-transparent text-white overflow-hidden">

      {/* HERO */}
      <SectionLeft
        id="media"
        label="Industries"
        title="Media & Entertainment"
        img="/images/media.png"
      >
        PolyVerb AI enables global content reach through end-to-end multimedia
        localization, including subtitling, dubbing, voice-over, and content
        adaptation. From gaming and streaming platforms to advertising and
        marketing campaigns, our platform ensures culturally relevant,
        engaging, and high-quality experiences that resonate with audiences worldwide.
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
          icon={<Video />}
          title="Subtitling & Captioning"
          desc="Accurate subtitles and captions are provided to enhance accessibility and expand audience reach."
        />

        <Card
          icon={<Mic />}
          title="Dubbing & Voice-over"
          desc="High-quality voice adaptations are delivered to preserve tone, emotion, and original intent."
        />

        <Card
          icon={<Gamepad2 />}
          title="Gaming Localization"
          desc="Game content is adapted to create immersive, culturally relevant experiences for global players."
        />

        <Card
          icon={<Megaphone />}
          title="Advertising & Marketing"
          desc="Campaigns are adapted to resonate with local audiences while maintaining brand consistency and impact."
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