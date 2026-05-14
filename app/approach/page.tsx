"use client";

import Link from "next/link";
import {
  Workflow,
  ShieldCheck,
  Briefcase,
  CheckCircle,
  Cpu,
  BarChart3,
  Eye,
  Zap,
  ArrowUpRight,
} from "lucide-react";

export default function Page() {
  const approachItems = [
    {
      title: "How It Works",
      desc: "AI-driven workflows combining automation and human expertise for scalable multilingual delivery.",
      href: "/approach/how-it-works",
      icon: <Workflow size={22} />,
    },
    {
      title: "Quality Framework",
      desc: "Structured validation systems ensuring consistency, accuracy, and enterprise-grade quality.",
      href: "/approach/quality-framework",
      icon: <ShieldCheck size={22} />,
    },
    {
      title: "Delivery Model",
      desc: "Dedicated management, scalable execution, real-time tracking, and cost efficiency.",
      href: "/approach/delivery-model",
      icon: <Briefcase size={22} />,
    },
  ];

  const benefits = [
    "AI + human workflow model",
    "Enterprise-grade quality controls",
    "Transparent project execution",
    "Scalable global delivery",
    "Real-time visibility",
    "Optimized turnaround speed",
  ];

  return (
    <main className="bg-transparent text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-7xl mx-auto text-center rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0B0F1A] to-[#05070D] px-8 md:px-14 py-16 md:py-20 shadow-[0_0_60px_rgba(34,211,238,0.08)]">

          <p className="text-[#67E8F9] uppercase tracking-[0.25em] text-sm mb-4">
            Approach
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Smart Delivery Frameworks <br />
            <span className="text-[#22D3EE]">Built for Enterprise Scale</span>
          </h1>

          <div className="flex justify-center mb-12">
            <p className="text-gray-400 text-base md:text-lg leading-relaxed text-center max-w-4xl">
              PolyVerb AI combines technology, quality systems, and delivery
              excellence to help enterprises scale multilingual operations with
              speed, control, and confidence.
            </p>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-[#22D3EE] text-black px-6 py-3 rounded-xl font-medium hover:bg-cyan-300 transition"
            >
              Talk to Us
            </Link>

            <Link
              href="#capabilities"
              className="border border-white/10 px-6 py-3 rounded-xl hover:bg-white/5 transition"
            >
              Explore Approach
            </Link>
          </div>

        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section id="capabilities" className="px-6 md:px-16 pb-24">
        <div className="max-w-7xl mx-auto rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0B0F1A] to-[#05070D] px-8 md:px-14 py-14 md:py-16 shadow-[0_0_60px_rgba(34,211,238,0.06)]">

          <div className="mb-14 text-center">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              Core Delivery Pillars
            </h2>

            <div className="flex justify-center">
              <p className="text-gray-400 text-center leading-relaxed max-w-3xl">
                Explore the systems, workflows, and quality frameworks that power
                PolyVerb AI’s enterprise localization delivery model.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

  {approachItems.map((item, i) => (

    <Link
      key={i}
      href={item.href}
      className="group relative bg-[#0B0F1A] border border-white/10 rounded-2xl p-8 hover:border-[#22D3EE]/50 transition-all duration-300"
      style={{
        overflow: "visible",
      }}
    >

      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"
        style={{
          boxShadow: "0 0 40px rgba(34,211,238,0.22)",
        }}
      />

      <div
        className="relative transition-transform duration-300 group-hover:-translate-y-1"
      >

        <div className="flex items-start justify-between mb-4 gap-3">

          <div className="text-[#22D3EE]">
            {item.icon}
          </div>

          <ArrowUpRight
            size={18}
            className="text-[#22D3EE] shrink-0"
          />

        </div>

        <h3 className="text-xl font-semibold mb-3 group-hover:text-[#22D3EE] transition">
          {item.title}
        </h3>

        <p className="text-gray-400 leading-relaxed">
          {item.desc}
        </p>

      </div>

    </Link>

  ))}

</div>

        </div>
      </section>

      {/* ================= WHY APPROACH ================= */}
      <section className="px-6 md:px-16 pb-24">
        <div className="max-w-7xl mx-auto rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0B0F1A] to-[#05070D] p-8 md:p-14">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div>
              <p className="text-[#67E8F9] uppercase text-sm tracking-widest mb-4">
                Why PolyVerb Approach
              </p>

              <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
                Operational Excellence Built In
              </h2>

              <p className="text-gray-400 leading-relaxed mb-16">
                Our approach combines automation, governance, expert oversight,
                and scalable execution to deliver faster multilingual outcomes
                without compromising quality.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {benefits.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white/5 rounded-xl p-4"
                  >
                    <CheckCircle
                      size={18}
                      className="text-[#22D3EE] mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/10 blur-3xl rounded-full" />

              <div className="relative bg-[#0B0F1A] border border-white/10 rounded-3xl p-10 space-y-8">

                <div className="flex items-start gap-4">
                  <Cpu className="text-[#22D3EE]" />
                  <div>
                    <h4 className="font-semibold mb-1">AI Automation</h4>
                    <p className="text-sm text-gray-400">
                      Intelligent workflows that accelerate delivery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <ShieldCheck className="text-[#22D3EE]" />
                  <div>
                    <h4 className="font-semibold mb-1">Trusted Quality</h4>
                    <p className="text-sm text-gray-400">
                      Multi-level controls for consistency and precision.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Eye className="text-[#22D3EE]" />
                  <div>
                    <h4 className="font-semibold mb-1">Full Visibility</h4>
                    <p className="text-sm text-gray-400">
                      Real-time tracking across projects and workflows.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Zap className="text-[#22D3EE]" />
                  <div>
                    <h4 className="font-semibold mb-1">Faster Outcomes</h4>
                    <p className="text-sm text-gray-400">
                      Speed, scale, and operational efficiency combined.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 md:px-16 pb-28">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to Scale Smarter?
          </h2>

          <p className="text-gray-400 mb-16">
            Discover how PolyVerb AI delivers multilingual growth with quality, speed, and control.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 mt-10 bg-[#22D3EE] text-black px-8 py-3 rounded-xl font-medium hover:bg-cyan-300 transition"
          >
            Request a Demo
          </Link>

        </div>
      </section>

    </main>
  );
}