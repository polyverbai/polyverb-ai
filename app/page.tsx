"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
  const [activeWhatWeDo, setActiveWhatWeDo] = useState<string | null>(null);

  /* ===== ADDED ONLY FOR STATS ===== */
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const stopSlider = () => {};
const startSlider = () => {};

useEffect(() => {
  const timer = setTimeout(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, 3000);

  return () => clearTimeout(timer);
}, [current]);


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

<main className="bg-[#08111F] text-white overflow-hidden pt-6 md:pt-8">

      {/* ================= HERO ================= */}
      <section className="relative z-0 max-w-7xl mx-auto px-6 pt-2 md:pt-8 lg:pt-16 pb-24 grid md:grid-cols-2 gap-16 items-center">

        <div className="absolute inset-0 bg-gradient-to-br from-[#08111F] via-[#0F1726] to-[#123040]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(34,211,238,0.12),transparent_38%)]" />

        <div className="relative z-10">
          <p className="text-[#67E8F9] font-bold uppercase text-sm mb-4 tracking-wider">
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
  onMouseEnter={() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      stopSlider();
    }
  }}
  onMouseLeave={() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      startSlider();
    }
  }}
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
  <div className="bg-[#08111F] text-white min-h-screen px-6 md:px-16 py-24 overflow-hidden">

    <div className="max-w-7xl mx-auto relative rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0F1726] to-[#08111F] p-8 md:p-12 shadow-[0_0_60px_rgba(34,211,238,0.08)]">

      {/* HEADER */}
      <div className="mb-20 flex justify-center">
        <div className="inline-flex flex-col items-center">

          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Why <span className="whitespace-nowrap">PolyVerb Ai</span>
          </h1>

          <p className="text-white mt-4 max-w-xl text-center leading-relaxed">
            Built for modern enterprises, PolyVerb AI redefines localization with intelligence, automation, and scalability at its core.
          </p>

        </div>
      </div>

      {/* ================= DESKTOP / LAPTOP ================= */}
      <div className="why-desktop hidden md:grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="relative min-h-[420px]">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(34,211,238,0.10),transparent_30%)] pointer-events-none"></div>

          <div className={`${activeFeature ? "opacity-0" : "opacity-100"} transition duration-300`}>
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

          {activeFeature && (
            <div className="absolute inset-0 z-20 flex items-center justify-center">

              <div className="absolute inset-0 bg-[#08111F]/80 backdrop-blur-sm rounded-xl"></div>

              <div className="relative w-[95%] max-w-md bg-[#0F1726] border border-white/10 rounded-xl p-4 shadow-[0_0_40px_rgba(34,211,238,0.15)]">

                {activeFeature === "hybrid" && (
                  <>
                    <img src="/images/ai-human-hybrid-model-v2.png" className="w-full rounded-lg mb-4" />
                    <p className="text-gray-100 text-sm text-center">
                      We combine advanced AI systems with expert human linguists to ensure both speed and accuracy. AI handles scale and automation, while humans ensure cultural and contextual precision. This balance delivers enterprise-grade outcomes.
                    </p>
                  </>
                )}

                {activeFeature === "continuous" && (
                  <>
                    <img src="/images/continuous-localization.png" className="w-full rounded-lg mb-4" />
                    <p className="text-gray-100 text-sm text-center">
                      Localization is integrated into your product lifecycle, not treated as a one-time activity. Updates flow automatically across languages and markets. This ensures your global presence stays consistent and up to date.
                    </p>
                  </>
                )}

                {activeFeature === "workflow" && (
                  <>
                    <img src="/images/workflow-automation.png" className="w-full rounded-lg mb-4" />
                    <p className="text-gray-100 text-sm text-center">
                      Our platform automates ingestion, processing, routing, and quality checks. This reduces manual intervention and accelerates delivery timelines. Businesses benefit from streamlined and predictable operations.
                    </p>
                  </>
                )}

                {activeFeature === "languages" && (
                  <>
                    <img src="/images/languages-support.png" className="w-full rounded-lg mb-4" />
                    <p className="text-gray-100 text-sm text-center">
                      We support a wide range of global languages across regions and industries. Our network of native linguists ensures local relevance and accuracy. This enables seamless expansion into diverse markets.
                    </p>
                  </>
                )}

                {activeFeature === "quality" && (
                  <>
                    <img src="/images/enterprise-quality.png" className="w-full rounded-lg mb-4" />
                    <p className="text-gray-100 text-sm text-center">
                      Multi-layered QA processes ensure accuracy, consistency, and compliance. Terminology and style are governed centrally across all content. This guarantees reliable and high-quality outputs at scale.
                    </p>
                  </>
                )}

              </div>
            </div>
          )}

        </div>

        {/* RIGHT SIDE */}
        <div className="why-desktop-right grid md:grid-cols-2 gap-6">

          {[
            { title: "AI + Human Hybrid Model", desc: "Combines advanced AI systems with expert human linguists for speed and accuracy.", type: "hybrid" },
            { title: "Continuous Localization", desc: "Seamlessly integrates into CI/CD pipelines for real-time updates across all languages.", type: "continuous" },
            { title: "Workflow Automation", desc: "Handles high-volume multilingual content across products, platforms, and markets.", type: "workflow" },
            { title: "150+ Languages", desc: "We support a wide range of global langauges", type: "languages" },
            { title: "Enterprise-grade Quality", desc: "Maintains terminology, tone, and brand voice with built-in intelligence and validation.", type: "quality" },
          ].map((item, i) => (
            <div
  key={i}
  className="group relative bg-[#0F1726] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-[#22D3EE]/50 hover:-translate-y-1"
  style={{
    overflow: "visible",
  }}
  onMouseEnter={() => setActiveFeature(item.type)}
  onMouseLeave={() => setActiveFeature(null)}
>

  <div
    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"
    style={{
      boxShadow: "0 0 40px rgba(34,211,238,0.22)",
    }}
  />

  <div className="flex items-start justify-between gap-3 mb-2">
    <h3 className="text-[#22D3EE] font-semibold">
      {item.title}
    </h3>

    <ArrowUpRight
      size={18}
      className="text-[#22D3EE] shrink-0"
    />
  </div>

  <p className="text-gray-400 text-sm">
    {item.desc}
  </p>

</div>
          ))}

        </div>
      </div>

      {/* ================= MOBILE PORTRAIT ================= */}
      <div className="why-mobile grid md:hidden gap-4">

  <div className="bg-[#0F1726] border border-white/10 rounded-2xl p-5 mb-2">
    <h2 className="text-xl font-semibold mb-4 leading-snug">
      From fragmented workflows to intelligent, continuous localization
    </h2>

    <p className="text-gray-400 text-sm leading-relaxed mb-4">
      Traditional localization is manual, disconnected, and difficult to scale. PolyVerb AI transforms this with a unified platform that automates translation, adapts content contextually, and integrates directly into development workflows.
    </p>

    <p className="text-gray-400 text-sm leading-relaxed">
      By combining AI intelligence with continuous delivery, enterprises can move faster, maintain consistency, and expand globally without operational complexity.
    </p>
  </div>

        {[
          {
            title: "AI + Human Hybrid Model",
            desc: "Combines advanced AI systems with expert human linguists for speed and accuracy.",
            type: "hybrid",
            img: "/images/ai-human-hybrid-model-v2.png",
            full: "We combine advanced AI systems with expert human linguists to ensure both speed and accuracy. AI handles scale and automation, while humans ensure cultural and contextual precision. This balance delivers enterprise-grade outcomes."
          },
          {
            title: "Continuous Localization",
            desc: "Seamlessly integrates into CI/CD pipelines for real-time updates across all languages.",
            type: "continuous",
            img: "/images/continuous-localization.png",
            full: "Localization is integrated into your product lifecycle, not treated as a one-time activity. Updates flow automatically across languages and markets. This ensures your global presence stays consistent and up to date."
          },
          {
            title: "Workflow Automation",
            desc: "Handles high-volume multilingual content across products, platforms, and markets.",
            type: "workflow",
            img: "/images/workflow-automation.png",
            full: "Our platform automates ingestion, processing, routing, and quality checks. This reduces manual intervention and accelerates delivery timelines. Businesses benefit from streamlined and predictable operations."
          },
          {
            title: "150+ Languages",
            desc: "We support a wide range of global langauges",
            type: "languages",
            img: "/images/languages-support.png",
            full: "We support a wide range of global languages across regions and industries. Our network of native linguists ensures local relevance and accuracy. This enables seamless expansion into diverse markets."
          },
          {
            title: "Enterprise-grade Quality",
            desc: "Maintains terminology, tone, and brand voice with built-in intelligence and validation.",
            type: "quality",
            img: "/images/enterprise-quality.png",
            full: "Multi-layered QA processes ensure accuracy, consistency, and compliance. Terminology and style are governed centrally across all content. This guarantees reliable and high-quality outputs at scale."
          },
        ].map((item, i) => {
          const isActive = activeFeature === item.type;

          return (
            <div
              key={i}
              onClick={() => setActiveFeature(isActive ? null : item.type)}
              className="cursor-pointer bg-[#0F1726] border border-white/10 rounded-2xl p-5 h-auto overflow-visible transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
  <h3 className="text-[#22D3EE] font-semibold">
    {item.title}
  </h3>

  <ArrowUpRight
    size={18}
    className="text-[#22D3EE] shrink-0"
  />
</div>

              {!isActive && (
                <p className="text-gray-400 text-sm">{item.desc}</p>
              )}

              {isActive && (
                <div className="mt-4 space-y-4">
                  <img src={item.img} className="w-full rounded-xl" />
                  <p className="text-gray-400 text-sm leading-relaxed break-words whitespace-normal">
                    {item.full}
                  </p>
                </div>
              )}
            </div>
          );
        })}

      </div>

      {/* ================= MOBILE LANDSCAPE PHONE ================= */}
      <div className="why-landscape hidden">

        <div className="grid grid-cols-2 gap-6 items-start">

          {/* LEFT PANEL */}
          <div className="bg-[#0F1726] border border-white/10 rounded-2xl p-4">

            {!activeFeature && (
              <>
                <h2 className="text-xl font-semibold mb-4">
                  From fragmented workflows to intelligent, continuous localization
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Traditional localization is manual, disconnected, and difficult to scale. PolyVerb AI transforms this with a unified platform that automates translation, adapts content contextually, and integrates directly into development workflows.
                </p>
              </>
            )}

            {activeFeature === "hybrid" && (
              <>
                <img src="/images/ai-human-hybrid-model-v2.png" className="w-full rounded-xl mb-4" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  We combine advanced AI systems with expert human linguists to ensure both speed and accuracy. AI handles scale and automation, while humans ensure cultural and contextual precision. This balance delivers enterprise-grade outcomes.
                </p>
              </>
            )}

          </div>

          {/* RIGHT STACKED BOXES */}
          <div className="grid gap-3">

            {[
              { title: "AI + Human Hybrid Model", type: "hybrid" },
              { title: "Continuous Localization", type: "continuous" },
              { title: "Workflow Automation", type: "workflow" },
              { title: "150+ Languages", type: "languages" },
              { title: "Enterprise-grade Quality", type: "quality" },
            ].map((item, i) => (
              <div
                key={i}
                onClick={() => setActiveFeature(item.type)}
                className="cursor-pointer bg-[#0F1726] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#22D3EE]"
              >
                {item.title}
              </div>
            ))}

          </div>

        </div>
      </div>

    </div>
  </div>
</section>

{/* ================= STATS ================= */}
<section className="mt-8 md:mt-1 mb-24 md:mb-32">

  <div className="w-full">
    <div className="w-full bg-gradient-to-br from-[#08111F] to-[#0F1724] overflow-hidden rounded-2xl">

      {/* CLIENT LOGOS */}
      <div className="h-[220px] overflow-hidden flex items-center relative">

        <div className="w-full overflow-hidden">
          <div className="client-marquee flex whitespace-nowrap items-center">

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
  <div className="bg-[#08111F] text-white min-h-screen px-6 md:px-16 py-0 overflow-hidden">

    <div className="max-w-7xl mx-auto relative rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0F1726] to-[#08111F] px-8 md:px-12 pt-8 md:pt-12 pb-16 md:pb-28">

      <h1 className="text-4xl md:text-5xl font-bold mb-20 text-center bg-clip-text">
        What We Do
      </h1>

      {/* ================= DESKTOP / LAPTOP ================= */}
        <div className="hidden lg:block">

          {/* FLOW */}
          <div className="relative flex flex-col items-center">

            {/* VERTICAL LINE */}
            <div className="hidden md:block absolute top-0 bottom-0 w-[2px] bg-[#22D3EE]/60"></div>

            {/* ================= ITEM 1 ================= */}
            <div className="w-full flex items-center justify-between relative mb-24">

              <div className="w-5/12 flex justify-end">
                <div className="group relative bg-[#0F1726] border border-white/10 rounded-2xl p-6 w-[90%]
                transition-all duration-300 
                hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] 
                hover:border-[#22D3EE]/40 
                hover:-translate-y-1">

                  <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#22D3EE] rounded-full" />

                  <div className="flex items-start justify-between gap-3 mb-2">
  <h2 className="text-[#22D3EE] text-lg font-semibold leading-snug">
    Global-ready product design (i18n)
  </h2>

  <ArrowUpRight
    size={18}
    className="text-[#22D3EE] shrink-0"
  />
</div>

                  <p className="text-gray-400 text-sm">
                    We help businesses design systems that are ready for multiple languages, regions, and cultural formats from the development stage. This reduces rework and ensures seamless global scalability. Internationalization becomes a built-in capability, not an afterthought.
                  </p>

                  <div className="hidden md:block absolute left-[147%] top-1/2 -translate-y-1/2 z-[999]
                  opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">

                    <div className="bg-[#0F1726] border border-white/10 rounded-xl p-4 shadow-[0_25px_80px_rgba(0,0,0,0.7)] w-[420px]">
                      <img
                        src="/images/global-ready-product-design.png"
                        className="w-full rounded-lg"
                      />
                    </div>

                  </div>

                </div>
              </div>

              <div className="w-2/12 flex justify-center items-center relative">
  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-[2px] bg-[#22D3EE]/60"></div>
  <div className="w-3 h-3 bg-[#22D3EE] rounded-full z-10"></div>
</div>

              <div className="w-5/12"></div>
            </div>

            {/* ================= ITEM 2 ================= */}
            <div className="w-full flex items-center justify-between relative mb-24">

              <div className="w-5/12"></div>

              <div className="w-2/12 flex justify-center items-center relative">
  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[2px] bg-[#22D3EE]/60"></div>
  <div className="w-3 h-3 bg-[#22D3EE] rounded-full z-10"></div>
</div>

              <div className="w-5/12 flex justify-start">
                <div className="group relative bg-[#0F1726] border border-white/10 rounded-2xl p-6 w-[90%]
                transition-all duration-300 
                hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] 
                hover:border-[#22D3EE]/40 
                hover:-translate-y-1">

                  <span className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#22D3EE] rounded-full" />

                  <div className="flex items-start justify-between gap-3 mb-2">
  <h2 className="text-[#22D3EE] text-lg font-semibold leading-snug">
    Scalable localization (l10n)
  </h2>

  <ArrowUpRight
    size={18}
    className="text-[#22D3EE] shrink-0"
  />
</div>

                  <p className="text-gray-400 text-sm">
                    PolyVerb AI delivers localization that adapts content, software, and experiences for specific markets. It ensures linguistic accuracy, cultural relevance, and contextual precision. This enables brands to connect authentically with global audiences.
                  </p>

                  <div className="hidden md:block absolute right-[146%] top-1/2 -translate-y-1/2 z-[999]
                  opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">

                    <div className="bg-[#0F1726] border border-white/10 rounded-xl p-4 shadow-[0_25px_80px_rgba(0,0,0,0.7)] w-[420px]">
                      <img
                        src="/images/scalable-localization.png"
                        className="w-full rounded-lg"
                      />
                    </div>

                  </div>

                </div>
              </div>
            </div>

            {/* ================= ITEM 3 ================= */}
            <div className="w-full flex items-center justify-between relative">

              <div className="w-5/12 flex justify-end">
                <div className="group relative bg-[#0F1726] border border-white/10 rounded-2xl p-6 w-[90%]
                transition-all duration-300 
                hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] 
                hover:border-[#22D3EE]/40 
                hover:-translate-y-1">

                  <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#22D3EE] rounded-full" />

                  <div className="flex items-start justify-between gap-3 mb-2">
  <h2 className="text-[#22D3EE] text-lg font-semibold leading-snug">
    AI-driven multilingual workflows
  </h2>

  <ArrowUpRight
    size={18}
    className="text-[#22D3EE] shrink-0"
  />
</div>

                  <p className="text-gray-400 text-sm">
                    Our platform automates the entire language lifecycle—from content ingestion to delivery. AI handles repetitive tasks while human experts validate nuance and intent. This results in faster turnaround, consistency, and cost efficiency.
                  </p>

                  <div className="hidden md:block absolute left-[147%] top-1/2 -translate-y-1/2 z-[999]
                  opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">

                    <div className="bg-[#0F1726] border border-white/10 rounded-xl p-4 shadow-[0_25px_80px_rgba(0,0,0,0.7)] w-[420px]">
                      <img
                        src="/images/ai-workflows-infographic-v2.png"
                        className="w-full rounded-lg"
                      />
                    </div>

                  </div>

                </div>
              </div>

              <div className="w-2/12 flex justify-center items-center relative">
  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-[2px] bg-[#22D3EE]/60"></div>
  <div className="w-3 h-3 bg-[#22D3EE] rounded-full z-10"></div>
</div>

              <div className="w-5/12"></div>
            </div>

          </div>
        </div>

      {/* ================= MOBILE PORTRAIT + LANDSCAPE ================= */}
      <div className="grid lg:hidden gap-5">

        {[
          {
            id: "i18n",
            title: "Global-ready product design (i18n)",
            desc: "We help businesses design systems that are ready for multiple languages, regions, and cultural formats from the development stage.",
            full: "We help businesses design systems that are ready for multiple languages, regions, and cultural formats from the development stage. This reduces rework and ensures seamless global scalability. Internationalization becomes a built-in capability, not an afterthought.",
            img: "/images/global-ready-product-design.png"
          },
          {
            id: "l10n",
            title: "Scalable localization (l10n)",
            desc: "PolyVerb AI delivers localization that adapts content, software, and experiences for specific markets.",
            full: "PolyVerb AI delivers localization that adapts content, software, and experiences for specific markets. It ensures linguistic accuracy, cultural relevance, and contextual precision. This enables brands to connect authentically with global audiences.",
            img: "/images/scalable-localization.png"
          },
          {
            id: "workflow",
            title: "AI-driven multilingual workflows",
            desc: "Our platform automates the entire language lifecycle—from content ingestion to delivery.",
            full: "Our platform automates the entire language lifecycle—from content ingestion to delivery. AI handles repetitive tasks while human experts validate nuance and intent. This results in faster turnaround, consistency, and cost efficiency.",
            img: "/images/ai-workflows-infographic-v2.png"
          }
        ].map((item) => {
          const isOpen = activeWhatWeDo === item.id;

          return (
            <div
              key={item.id}
              onClick={() => setActiveWhatWeDo(isOpen ? null : item.id)}
              className="cursor-pointer bg-[#0F1726] border border-white/10 rounded-2xl p-4 sm:p-5 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
  <h2 className="text-[#22D3EE] text-base sm:text-lg font-semibold leading-snug">
    {item.title}
  </h2>

  <ArrowUpRight
    size={18}
    className="text-[#22D3EE] shrink-0"
  />
</div>

              {!isOpen && (
                <p className="text-gray-400 text-sm">
                  {item.desc}
                </p>
              )}

              {isOpen && (
                <div className="mt-4 space-y-4 animate-fadeIn">
                  <img src={item.img} className="w-full max-w-[340px] mx-auto rounded-xl" />

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.full}
                  </p>
                </div>
              )}
            </div>
          );
        })}

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