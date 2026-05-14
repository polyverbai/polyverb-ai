"use client";

import Link from "next/link";

import {
  Mic,
  Video,
  Subtitles,
  FileText,
} from "lucide-react";

import { SectionLeft } from "@/components/ui/Section";
import { Grid, Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <main className="bg-transparent text-white overflow-hidden">

      {/* HERO */}
      <SectionLeft
        id="multimedia"
        label="Solutions"
        title="Multimedia Localization"
        img="/images/multimedia-localization.png"
      >
        Content is adapted for global audiences through multimedia localization.
        This includes subtitles, dubbing, and voice-over. It ensures cultural
        relevance and audience engagement across markets.
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
          icon={<Mic />}
          title="Voice-over"
          desc="Professional voice artists deliver localized audio that matches tone, emotion, and intent. This enhances audience engagement across regions. It ensures consistency in messaging."
        />

        <Card
          icon={<Video />}
          title="Dubbing (Lip-sync / Phrase Sync)"
          desc="Audio is synchronized with on-screen visuals for a natural viewing experience. This includes lip-sync and phrase-sync techniques. It ensures high-quality localized media content."
        />

        <Card
          icon={<Subtitles />}
          title="Subtitling"
          desc="Subtitles are created with precise timing, readability, and contextual accuracy. This improves accessibility and comprehension. It enables content to reach wider audiences."
        />

        <Card
          icon={<FileText />}
          title="Transcription"
          desc="Audio and video content are converted into accurate text formats. This supports content reuse and localization workflows. It also enhances accessibility and compliance."
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