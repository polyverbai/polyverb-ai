import { Upload, ScanText, Route, ShieldCheck, GitBranch } from "lucide-react";

export default function Page() {
  return (
    <main className="bg-[#0B0F1A] text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center pt-24 mb-24 px-6">

        <div>
          <img 
            src="/images/workflow-automation-v2.png"
            alt="Workflow Automation"
            className="w-full h-[350px] object-cover rounded-xl border border-white/10"
          />
        </div>

        <div>
          <p className="text-2xl uppercase tracking-wider mb-4 text-white">
            Platform
          </p>

          <h1 className="text-4xl font-semibold tracking-tight mb-6 text-[#67E8F9]">
            Workflow Automation
          </h1>

          <p className="text-gray-400 leading-relaxed">
            Workflow Automation enables seamless orchestration of multilingual content processes, from ingestion to delivery. It eliminates manual intervention, improves efficiency, and ensures consistent execution across all stages of localization workflows.
          </p>
        </div>

      </section>

      {/* GRID */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-24">

        {/* CONTENT INGESTION */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Upload size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Content ingestion (API, CMS, files)
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Content is automatically ingested from multiple sources including APIs, CMS platforms, and files. This eliminates manual uploads and reduces delays. It ensures seamless integration with existing systems.
          </p>
        </div>

        {/* OCR + PARSING */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <ScanText size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            OCR + parsing
          </h2>
          <p className="text-gray-400 leading-relaxed">
            The system extracts text from scanned documents, PDFs, and images using OCR. It then parses and structures the content for processing. This enables handling of complex formats efficiently.
          </p>
        </div>

        {/* AUTOMATED ROUTING */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Route size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Automated routing
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Content is routed to the right AI models and human experts based on language and domain. This ensures optimal processing paths. It reduces manual coordination and errors.
          </p>
        </div>

        {/* QA AUTOMATION */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <ShieldCheck size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            QA automation
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Automated checks validate formatting, numbers, terminology, and completeness. This ensures consistency before human review. It reduces quality issues and rework.
          </p>
        </div>

        {/* VERSION CONTROL */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 md:col-span-2">
          <GitBranch size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Version control
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-3xl">
            All content versions are tracked and managed centrally. Changes and updates are recorded systematically. This ensures traceability and consistency across projects.
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