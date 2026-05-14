import { GitBranch, Code, Upload, FlaskConical, RefreshCw } from "lucide-react";

export default function Page() {
  return (
    <main className="bg-[#0B0F1A] text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center pt-24 mb-24 px-6">

        <div>
          <img 
            src="/images/continuous-localization-v2.png"
            alt="Continuous Localization"
            className="w-full h-[350px] object-cover rounded-xl border border-white/10"
          />
        </div>

        <div>
          <p className="text-2xl uppercase tracking-wider mb-4 text-white">
            Platform
          </p>

          <h1 className="text-4xl font-semibold tracking-tight mb-6 text-[#67E8F9]">
            Continuous Localization
          </h1>

          <p className="text-gray-400 leading-relaxed">
              Continuous localization ensures that content is updated, translated, and deployed in real time as products evolve. It integrates localization into the development lifecycle, enabling faster releases and consistent global experiences.
          </p>
        </div>

      </section>

      {/* GRID */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-24">

        {/* CI/CD INTEGRATION */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <GitBranch size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            CI/CD integration
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Localization workflows integrate directly with development pipelines. This enables real-time updates across languages. It ensures faster and synchronized releases.
          </p>
        </div>

        {/* STRING EXTRACTION */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Code size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            String extraction
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Translatable content is automatically extracted from code and systems. This removes manual effort and errors. It ensures all elements are captured accurately.
          </p>
        </div>

        {/* AUTO REINTEGRATION */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Upload size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Auto reintegration
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Translated content is automatically pushed back into the system. This reduces engineering effort and delays. It ensures seamless deployment.
          </p>
        </div>

        {/* PSEUDO-LOCALIZATION */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <FlaskConical size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Pseudo-localization
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Simulated translations help identify UI and layout issues early. This improves product readiness for global markets. It reduces post-release issues.
          </p>
        </div>

        {/* RELEASE SYNCHRONIZATION */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 md:col-span-2">
          <RefreshCw size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Release synchronization
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-3xl">
            All language versions are aligned with product releases. This ensures consistency across regions. It enables simultaneous global launches.
          </p>
        </div>

      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto text-center pb-24 px-6">
        <h2 className="text-2xl font-semibold mb-4">
          Build once, scale globally
        </h2>

        <p className="text-gray-400 mb-8">
          PolyVerb AI enables you to create once and deploy across multiple markets without friction. It simplifies global expansion through automation and intelligence. This reduces time, cost, and complexity.
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-md">
          Get Started
        </button>
      </section>

    </main>
  );
}