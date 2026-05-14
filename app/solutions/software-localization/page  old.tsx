import { MonitorSmartphone, Workflow, Code, Globe } from "lucide-react";

export default function Page() {
  return (
    <main className="bg-[#0B0F1A] text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center pt-24 mb-24 px-6">

        <div>
          <img 
            src="/images/software-localization.png"
            alt="Software & App Localization"
            className="w-full h-[350px] object-cover rounded-xl border border-white/10"
          />
        </div>

        <div>
          <p className="text-2xl uppercase tracking-wider mb-4 text-white">
            Solutions
          </p>

          <h1 className="text-4xl font-semibold tracking-tight mb-6 text-[#67E8F9]">
            Software & App Localization
          </h1>

          <p className="text-gray-400 leading-relaxed">
            Localization is seamlessly integrated into your development lifecycle. Applications are adapted across languages, regions, and cultural contexts while maintaining performance, usability, and consistency.
          </p>
        </div>

      </section>

      {/* CARDS */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-24">

        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <MonitorSmartphone size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">UI/UX Adaptation</h2>
          <p className="text-gray-400 leading-relaxed">
            Interfaces are adapted to suit different languages, scripts, and cultural expectations. This includes layout adjustments, text expansion handling, and usability alignment. The result is a seamless user experience across regions.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Workflow size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Continuous Delivery</h2>
          <p className="text-gray-400 leading-relaxed">
            Localization updates are automatically delivered alongside product updates. This ensures that all language versions remain in sync. It supports agile and fast-paced development cycles.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Code size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Code-level Integration</h2>
          <p className="text-gray-400 leading-relaxed">
            Localization is integrated directly into the development environment and code repositories. This ensures that language support is built alongside product features. It reduces delays and eliminates post-development localization efforts.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Globe size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Multi-language Builds</h2>
          <p className="text-gray-400 leading-relaxed">
            The system supports generation of multiple language versions simultaneously. This ensures consistent releases across markets. It enables efficient global product deployment.
          </p>
        </div>

      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto text-center pb-24 px-6">
        <h2 className="text-2xl font-semibold mb-4">
          Build once, deploy globally
        </h2>

        <p className="text-gray-400 mb-8">
          Deliver applications that scale across languages and markets without complexity.
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-md">
          Get Started
        </button>
      </section>

    </main>
  );
}