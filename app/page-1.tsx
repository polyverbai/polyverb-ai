"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* Slides */
const slides = [
  { title: "Platform", img: "/images/platform.png" },
  { title: "Solutions", img: "/images/solutions.png" },
  { title: "Industries", img: "/images/industries.png" },
  { title: "Languages", img: "/images/languages.png" },
  { title: "Approach", img: "/images/approach.png" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
const [mobileFeature, setMobileFeature] = useState<string | null>(null);

  /* ===== ADDED ONLY FOR STATS ===== */
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startSlider = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
  };

  const stopSlider = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, []);

/* ===== ADDED ONLY FOR STATS ===== */
  useEffect(() => {
    const animateValue = (
      setter: React.Dispatch<React.SetStateAction<number>>,
      end: number,
      duration: number
    ) => {
      let start = 0;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;

        if (start >= end) {
          setter(end);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    animateValue(setCount1, 150, 1400);
    animateValue(setCount2, 10, 1600);
    animateValue(setCount3, 99, 1500);
    animateValue(setCount4, 3, 1200);
  }, []);

  return (

<main className="bg-[#05070D] text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 grid md:grid-cols-2 gap-16 items-center">

        <div className="absolute inset-0 bg-gradient-to-br from-[#05070D] via-[#0B0F1A] to-[#111827]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(34,211,238,0.12),transparent_38%)]" />

        <div className="relative z-10">
          <p className="text-[#67E8F9] uppercase text-sm mb-4 tracking-wider">
            AI-Powered Global Localization
          </p>

          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Scale Your Content Across{" "}
            <span className="text-[#67E8F9]">Languages & Markets</span>
          </h1>

          <p className="text-gray-400 text-lg mb-12 max-w-xl">
            PolyVerb AI empowers enterprises to seamlessly scale content across languages and global markets using AI-driven automation and human expertise.
          </p>

          <div className="flex gap-4 mt-8">
            <Link href="#what-we-do" className="bg-[#67E8F9] text-black px-6 py-3 rounded-lg font-medium hover:bg-cyan-300 transition">
              Explore
            </Link>

            <Link href="/contact" className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/5 transition">
              Contact Us
            </Link>
          </div>
        </div>

        {/* CAROUSEL */}
        <div
          className="relative z-10 flex flex-col items-center w-full"
          onMouseEnter={stopSlider}
          onMouseLeave={startSlider}
        >
          <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-3xl rounded-full"></div>

          {/* SLIDER */}
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((item, i) => (
                <div key={i} className="min-w-full flex justify-center items-center">
                  <img src={item.img} alt={item.title} className="w-full h-auto" />
                </div>
              ))}
            </div>
          </div>

          {/* ===== NAVIGATION DOTS (ADDED BELOW SLIDER) ===== */}
          <div className="mt-8 flex justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-8 bg-[#22D3EE] shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                    : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

        </div>

      </section>

      {/* ================= WHY POLYVERB AI ================= */}
<section className="mb-24 md:mb-0">
  <div className="bg-[#05070D] text-white min-h-screen px-6 md:px-16 py-24 overflow-hidden">

    <div className="max-w-7xl mx-auto relative rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0B0F1A] to-[#05070D] p-8 md:p-12 shadow-[0_0_60px_rgba(34,211,238,0.08)]">

      {/* HEADER */}
      <div className="mb-20 flex justify-center">
        <div className="inline-flex flex-col items-center">

          <h2 className="text-[30px] sm:text-4xl md:text-5xl font-semibold bg-gradient-to-r from-white to-[#22D3EE] text-transparent bg-clip-text whitespace-nowrap leading-tight">
            Why PolyVerb AI
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl text-center leading-relaxed">
            Built for modern enterprises, PolyVerb AI redefines localization with intelligence, automation, and scalability at its core.
          </p>

        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT SIDE ================= */}
        <div className="relative min-h-auto md:min-h-[420px]">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(34,211,238,0.10),transparent_30%)] pointer-events-none"></div>

          {/* DEFAULT TEXT */}
          <div
            className={`transition duration-300 ${
              activeFeature ? "md:opacity-0 opacity-100" : "opacity-100"
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug">
              From fragmented workflows to intelligent, continuous localization
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              Traditional localization is manual, disconnected, and difficult to scale. PolyVerb AI transforms this with a unified platform that automates translation, adapts content contextually, and integrates directly into development workflows.
            </p>

            <p className="text-gray-400 leading-relaxed">
              By combining AI intelligence with continuous delivery, enterprises can move faster, maintain consistency, and expand globally without operational complexity.
            </p>
          </div>

          {/* DESKTOP POPUP ONLY */}
          {activeFeature && (
            <div className="hidden md:flex absolute inset-0 z-20 items-center justify-center">

              <div className="absolute inset-0 bg-[#05070D]/80 backdrop-blur-sm rounded-xl"></div>

              <div className="relative w-[95%] max-w-md bg-[#0B0F1A] border border-white/10 rounded-xl p-4 shadow-[0_0_40px_rgba(34,211,238,0.15)]">

                {activeFeature === "hybrid" && (
                  <>
                    <img src="/images/ai-human-hybrid-model-v2.png" className="w-full rounded-lg mb-4" />
                    <p className="text-gray-400 text-sm text-center">
                      We combine advanced AI systems with expert human linguists to ensure both speed and accuracy.
                    </p>
                  </>
                )}

                {activeFeature === "continuous" && (
                  <>
                    <img src="/images/continuous-localization.png" className="w-full rounded-lg mb-4" />
                    <p className="text-gray-400 text-sm text-center">
                      Localization is integrated into your product lifecycle with real-time multilingual updates.
                    </p>
                  </>
                )}

                {activeFeature === "workflow" && (
                  <>
                    <img src="/images/workflow-automation.png" className="w-full rounded-lg mb-4" />
                    <p className="text-gray-400 text-sm text-center">
                      Our platform automates ingestion, routing, processing, and quality checks.
                    </p>
                  </>
                )}

                {activeFeature === "languages" && (
                  <>
                    <img src="/images/languages-support.png" className="w-full rounded-lg mb-4" />
                    <p className="text-gray-400 text-sm text-center">
                      We support a wide range of global languages with local relevance and precision.
                    </p>
                  </>
                )}

                {activeFeature === "quality" && (
                  <>
                    <img src="/images/enterprise-quality.png" className="w-full rounded-lg mb-4" />
                    <p className="text-gray-400 text-sm text-center">
                      Multi-layer QA processes ensure consistency, compliance, and terminology accuracy.
                    </p>
                  </>
                )}

              </div>

            </div>
          )}

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="grid md:grid-cols-2 gap-6">

          {[
            {
              title: "AI + Human Hybrid Model",
              desc: "Combines advanced AI systems with expert human linguists for speed and accuracy.",
              type: "hybrid",
            },
            {
              title: "Continuous Localization",
              desc: "Seamlessly integrates into CI/CD pipelines for real-time updates across all languages.",
              type: "continuous",
            },
            {
              title: "Workflow Automation",
              desc: "Handles high-volume multilingual content across products, platforms, and markets.",
              type: "workflow",
            },
            {
              title: "150+ Languages",
              desc: "Supports a wide range of global languages.",
              type: "languages",
            },
            {
              title: "Enterprise-grade Quality",
              desc: "Maintains terminology, tone, and brand voice with built-in intelligence and validation.",
              type: "quality",
            },
          ].map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => {
                if (window.innerWidth >= 768) setActiveFeature(item.type);
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 768) setActiveFeature(null);
              }}
              onTouchStart={() =>
                setActiveFeature(
                  activeFeature === item.type ? null : item.type
                )
              }
              className={`group relative bg-[#0B0F1A] border rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
                activeFeature === item.type
                  ? "border-[#22D3EE] shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                  : "border-white/10"
              }`}
            >
              <h3 className="text-[#22D3EE] font-semibold mb-2">
                {item.title}
              </h3>

              {activeFeature !== item.type && (
  <p className="text-gray-400 text-sm mb-4">
    {item.desc}
  </p>
)}

              {/* MOBILE IMAGE + TEXT */}
              {activeFeature === item.type && (
                <div className="md:hidden mt-4 space-y-3">

                  <img
                    src={
                      item.type === "hybrid"
                        ? "/images/ai-human-hybrid-model-v2.png"
                        : item.type === "continuous"
                        ? "/images/continuous-localization.png"
                        : item.type === "workflow"
                        ? "/images/workflow-automation.png"
                        : item.type === "languages"
                        ? "/images/languages-support.png"
                        : "/images/enterprise-quality.png"
                    }
                    alt={item.title}
                    className="w-full rounded-xl border border-white/10"
                  />

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.type === "hybrid"
                      ? "We combine advanced AI systems with expert human linguists to ensure both speed and accuracy. AI handles scale and automation, while humans ensure cultural and contextual precision. This balance delivers enterprise-grade outcomes."
                      : item.type === "continuous"
                      ? "Localization is integrated into your product lifecycle, not treated as a one-time activity. Updates flow automatically across languages and markets. This ensures your global presence stays consistent and up to date."
                      : item.type === "workflow"
                      ? "Our platform automates ingestion, processing, routing, and quality checks. This reduces manual intervention and accelerates delivery timelines. Business benefit from streamlined and predictable operations."
                      : item.type === "languages"
                      ? "We support a wide range of global languages across regions and industries. Our network of native linguists ensures local relevance and accuracy. This enables seamless expansion into diverse markets."
                      : "Multi-layered QA processes ensure accuracy, consistency, and compliance. Terminology and style are governed centrally across all content. This guarantees reliable and high-quality outputs at scale."}
                  </p>

                </div>
              )}

            </div>
          ))}

        </div>

      </div>

    </div>

  </div>
</section>

{/* ================= STATS ================= */}
<section className="mt-8 md:mt-1 mb-24 md:mb-32">

  <div className="w-full">
    <div className="w-full bg-gradient-to-br from-bg-[#08111F] to-[#0F1724] overflow-hidden rounded-2xl">

      {/* CLIENT LOGOS */}
      <div className="h-[220px] overflow-hidden flex items-center relative">

        <div className="w-full overflow-hidden">
          <div className="flex whitespace-nowrap items-center animate-[marquee_28s_linear_infinite]">

            {[
              "/images/client1.png",
              "/images/client1.png",
              "/images/client1.png",
              "/images/client1.png",
              "/images/client1.png",
              "/images/client1.png",
              "/images/client1.png",
              "/images/client1.png",
              "/images/client1.png",
              "/images/client1.png",

              /* duplicate for seamless loop */
              "/images/client1.png",
              "/images/client1.png",
              "/images/client1.png",
              "/images/client1.png",
              "/images/client1.png",
              "/images/client1.png",
              "/images/client1.png",
              "/images/client1.png",
              "/images/client1.png",
              "/images/client1.png",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="client"
                className="block h-12 md:h-14 mx-14 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            ))}

          </div>
        </div>

      </div>

      {/* STATS INSIDE SAME BOX */}
      <div className="px-6 py-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">

          {/* STAT 1 */}
      <div
        className="bg-[#D9FFFF] rounded-2xl p-8
        shadow-[0_0_28px_rgba(34,211,238,0.12)]
        hover:shadow-[0_0_38px_rgba(34,211,238,0.22)]
        transition-all duration-300"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[#001F54] mb-2">
          {count1}+
        </h2>

        <p className="text-black text-sm">
          Languages Supported
        </p>
      </div>

          {/* STAT 2 */}
      <div
        className="bg-[#D9FFFF] rounded-2xl p-8
        shadow-[0_0_28px_rgba(34,211,238,0.12)]
        hover:shadow-[0_0_38px_rgba(34,211,238,0.22)]
        transition-all duration-300"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[#001F54] mb-2">
          {count2}M+
        </h2>

        <p className="text-black text-sm">
          Words Processed
        </p>
      </div>

           {/* STAT 3 */}
      <div
        className="bg-[#D9FFFF] rounded-2xl p-8
        shadow-[0_0_28px_rgba(34,211,238,0.12)]
        hover:shadow-[0_0_38px_rgba(34,211,238,0.22)]
        transition-all duration-300"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[#001F54] mb-2">
          {count3}%
        </h2>

        <p className="text-black text-sm">
          Accuracy Rate
        </p>
      </div>

           {/* STAT 4 */}
      <div
        className="bg-[#D9FFFF] rounded-2xl p-8
        shadow-[0_0_28px_rgba(34,211,238,0.12)]
        hover:shadow-[0_0_38px_rgba(34,211,238,0.22)]
        transition-all duration-300"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[#001F54] mb-2">
          {count4}x
        </h2>

        <p className="text-black text-sm">
          Faster Delivery
        </p>
      </div>

        </div>

      </div>

    </div>
  </div>

</section>


      {/* ================= WHAT WE DO ================= */}
      <section id="what-we-do">
  <div className="bg-[#05070D] text-white min-h-screen px-6 md:px-16 py-0 overflow-hidden">

    <div className="max-w-7xl mx-auto relative rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0B0F1A] to-[#05070D] px-8 md:px-12 pt-8 md:pt-12 pb-16 md:pb-28">

      <h1 className="text-4xl md:text-5xl font-semibold mb-14 md:mb-20 text-center bg-gradient-to-r from-white to-[#22D3EE] text-transparent bg-clip-text">
        What We Do
      </h1>

      {/* ================= MOBILE VERSION ================= */}
      <div className="md:hidden space-y-6">

        {[
          {
            title: "Global-ready product design (i18n)",
            desc: "We help businesses design systems that are ready for multiple languages, regions, and cultural formats from the development stage. This reduces rework and ensures seamless global scalability.",
            img: "/images/global-ready-product-design.png",
          },
          {
            title: "Scalable localization (l10n)",
            desc: "PolyVerb AI delivers localization that adapts content, software, and experiences for specific markets. It ensures linguistic accuracy, cultural relevance, and contextual precision.",
            img: "/images/scalable-localization.png",
          },
          {
            title: "AI-driven multilingual workflows",
            desc: "Our platform automates the entire language lifecycle—from content ingestion to delivery. This results in faster turnaround, consistency, and cost efficiency.",
            img: "/images/ai-workflows-infographic-v2.png",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#0B0F1A] border border-white/10 rounded-2xl p-5"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full rounded-xl mb-4"
            />

            <h3 className="text-[#22D3EE] text-lg font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

      {/* ================= DESKTOP VERSION ================= */}
      <div className="hidden md:flex relative flex-col items-center">

        {/* VERTICAL LINE */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-[#22D3EE]/60"></div>

        {/* ================= ITEM 1 ================= */}
        <div className="w-full flex items-center justify-between relative mb-24">

          {/* LEFT BOX */}
          <div className="w-5/12 flex justify-end">
            <div className="group relative bg-[#0B0F1A] border border-white/10 rounded-2xl p-6 w-[90%] transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:border-[#22D3EE]/40 hover:-translate-y-1">

              <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#22D3EE] rounded-full"></span>

              <h2 className="text-[#22D3EE] text-lg font-semibold mb-2">
                Global-ready product design (i18n)
              </h2>

              <p className="text-gray-400 text-sm">
                We help businesses design systems that are ready for multiple languages, regions, and cultural formats from the development stage.
              </p>

              {/* RIGHT IMAGE */}
              <div className="hidden md:block absolute left-[147%] top-[-25%] z-[999] opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">

                <div className="bg-[#0B0F1A] border border-white/10 rounded-xl p-4 shadow-[0_25px_80px_rgba(0,0,0,0.7)] w-[420px]">

                  <img
                    src="/images/global-ready-product-design.png"
                    alt="i18n"
                    className="w-full rounded-lg"
                  />

                </div>

              </div>

            </div>
          </div>

          {/* CENTER */}
          <div className="w-2/12 flex justify-center relative -top-1">
            <div className="w-3 h-3 bg-[#22D3EE] rounded-full z-10 relative -top-1.5"></div>
            <div className="absolute left-0 w-1/2 h-[2px] bg-[#22D3EE]/60"></div>
          </div>

          <div className="w-5/12"></div>
        </div>

        {/* ================= ITEM 2 ================= */}
        <div className="w-full flex items-center justify-between relative mb-24">

          <div className="w-5/12"></div>

          {/* CENTER */}
          <div className="w-2/12 flex justify-center relative -top-1">
            <div className="w-3 h-3 bg-[#22D3EE] rounded-full z-10"></div>
            <div className="absolute right-0 w-1/2 h-[2px] bg-[#22D3EE]/60"></div>
          </div>

          {/* RIGHT BOX */}
          <div className="w-5/12 flex justify-start">
            <div className="group relative bg-[#0B0F1A] border border-white/10 rounded-2xl p-6 w-[90%] transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:border-[#22D3EE]/40 hover:-translate-y-1">

              <span className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#22D3EE] rounded-full"></span>

              <h2 className="text-[#22D3EE] text-lg font-semibold mb-2">
                Scalable localization (l10n)
              </h2>

              <p className="text-gray-400 text-sm">
                PolyVerb AI delivers localization that adapts content, software, and experiences for specific markets.
              </p>

              {/* LEFT IMAGE */}
              <div className="hidden md:block absolute right-[146%] top-[-25%] z-[999] opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">

                <div className="bg-[#0B0F1A] border border-white/10 rounded-xl p-4 shadow-[0_25px_80px_rgba(0,0,0,0.7)] w-[420px]">

                  <img
                    src="/images/scalable-localization.png"
                    alt="l10n"
                    className="w-full rounded-lg"
                  />

                </div>

              </div>

            </div>
          </div>

        </div>

        {/* ================= ITEM 3 ================= */}
        <div className="w-full flex items-center justify-between relative">

          {/* LEFT BOX */}
          <div className="w-5/12 flex justify-end">
            <div className="group relative bg-[#0B0F1A] border border-white/10 rounded-2xl p-6 w-[90%] transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:border-[#22D3EE]/40 hover:-translate-y-1">

              <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#22D3EE] rounded-full"></span>

              <h2 className="text-[#22D3EE] text-lg font-semibold mb-2">
                AI-driven multilingual workflows
              </h2>

              <p className="text-gray-400 text-sm">
                Our platform automates the entire language lifecycle—from content ingestion to delivery.
              </p>

              {/* RIGHT IMAGE */}
              <div className="hidden md:block absolute left-[147%] top-[-25%] z-[999] opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">

                <div className="bg-[#0B0F1A] border border-white/10 rounded-xl p-4 shadow-[0_25px_80px_rgba(0,0,0,0.7)] w-[420px]">

                  <img
                    src="/images/ai-workflows-infographic-v2.png"
                    alt="workflow"
                    className="w-full rounded-lg"
                  />

                </div>

              </div>

            </div>
          </div>

          {/* CENTER */}
          <div className="w-2/12 flex justify-center relative -top-1">
            <div className="w-3 h-3 bg-[#22D3EE] rounded-full z-10"></div>
            <div className="absolute left-0 w-1/2 h-[2px] bg-[#22D3EE]/60"></div>
          </div>

          <div className="w-5/12"></div>
        </div>

      </div>

    </div>

  </div>
</section>

{/* ================= CTA ================= */}
<section className="mt-24 md:mt-32 mb-24 md:mb-32">
  <div className="max-w-4xl mx-auto text-center px-6">

    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
  Ready to scale your content globally with <br />
  AI-powered localization?
</h2>

    <div className="flex justify-center gap-4 flex-wrap">
      <a
        href="/contact"
            className="inline-flex items-center gap-3 mt-10 bg-[#22D3EE] text-black px-8 py-3 rounded-xl font-medium hover:bg-cyan-300 transition"
      >
        Talk to Us    
      
      </a>

    </div>

  </div>
</section>

    </main>
  );
}