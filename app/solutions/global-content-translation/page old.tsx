import { FileText, Target, Layout, Database } from "lucide-react";

export default function Page() {
  return (
    <main className="bg-[#0B0F1A] text-white">

      {/* HERO (WITH IMAGE) */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center pt-24 mb-24 px-6">

        {/* IMAGE */}
        <div>
          <img 
            src="/images/global-content-translation.png"
            alt="Global Content & Translation"
            className="w-full h-[350px] object-cover rounded-xl border border-white/10"
          />
        </div>

        {/* CONTENT */}
        <div>
          <p className="text-2xl md:text-2xl uppercase tracking-wider mb-4 text-white">
            Solutions
          </p>

          <h1 className="text-4xl md:text-4xl font-semibold tracking-tight mb-6 text-[#67E8F9]">
            Global Content & Translation
          </h1>

          <p className="text-gray-400 leading-relaxed">
            Translate enterprise content across formats with high accuracy and scalability.
Supports multi-format content while preserving original layouts and structure.
Delivers domain-specific translation tailored to industry terminology and context.
Handles high-volume workloads efficiently with AI-driven automation and human validation.
          </p>
        </div>

      </section>

      {/* 2-COLUMN TEXT GRID */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-24">

        {/* CARD 1 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <FileText size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Multi-format Support</h2>
          <p className="text-gray-400 leading-relaxed">
            The platform supports a wide range of file formats including documents, PDFs, and scanned files. This ensures flexibility across use cases. It eliminates the need for format-specific handling.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Target size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Domain-specific Translation</h2>
          <p className="text-gray-400 leading-relaxed">
            Content is matched with domain-trained AI models and expert linguists. This ensures accuracy in specialized fields. It improves quality for technical and regulated content.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Layout size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Layout Preservation</h2>
          <p className="text-gray-400 leading-relaxed">
            Translated content retains the original formatting and structure. This ensures consistency in presentation. It reduces post-processing effort.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Database size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">High-volume Processing</h2>
          <p className="text-gray-400 leading-relaxed">
            The system is designed to handle large volumes of content efficiently. Automation ensures speed without compromising quality. It supports enterprise-scale operations.
          </p>
        </div>

      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto text-center pb-24 px-6">
        <h2 className="text-2xl font-semibold mb-4">
          Build once, scale globally
        </h2>

        <p className="text-gray-400 mb-8">
          PolyVerb AI enables you to create once and deploy across multiple markets without friction. 
          It simplifies global expansion through automation and intelligence.
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-md">
          Get Started
        </button>
      </section>

    </main>
  );
}