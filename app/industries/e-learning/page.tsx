"use client";

import Link from "next/link";

import {
  GraduationCap,
  Video,
  Monitor,
  FileCheck,
} from "lucide-react";

import { SectionLeft } from "@/components/ui/Section";
import { Grid, Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <main className="bg-transparent text-white overflow-hidden">

      {/* HERO */}
      <SectionLeft
        id="elearning"
        label="Industries"
        title="E-learning"
        img="/images/elearning.png"
      >
        PolyVerb AI localizes e-learning content including courses, training
        materials, multimedia, and platforms to deliver engaging and culturally
        relevant learning experiences. From interactive modules and assessments
        to instructor-led content, our platform ensures accuracy, accessibility,
        and consistency—helping organizations scale education and training globally.
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
          icon={<GraduationCap />}
          title="Course & Training Content Localization"
          desc="Online courses and training materials are localized to ensure accessibility, clarity, and engagement for global learners."
        />

        <Card
          icon={<Video />}
          title="Multimedia & Interactive Content"
          desc="Videos, e-learning modules, and interactive content are adapted using subtitles, voice-over, and localization for immersive learning experiences."
        />

        <Card
          icon={<Monitor />}
          title="Educational Platforms & Apps"
          desc="LMS platforms and educational applications are translated to deliver seamless, user-friendly learning experiences across regions."
        />

        <Card
          icon={<FileCheck />}
          title="Assessments"
          desc="Quizzes, tests, and certification materials are localized with precision to maintain accuracy and intended learning outcomes."
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