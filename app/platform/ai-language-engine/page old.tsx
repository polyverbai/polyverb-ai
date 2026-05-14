import { Globe, Layers, BookOpen, Database, Brain } from "lucide-react";

export default function Page() {
  return (
    <main className="bg-[#0B0F1A] text-white">

      {/* HERO (WITH IMAGE) */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center pt-24 mb-24 px-6">

        {/* IMAGE */}
        <div>
          <img 
            src="/images/ai-language-engine.png"
            alt="AI Language Engine"
            className="w-full h-[350px] object-cover rounded-xl border border-white/10"
          />
        </div>

        {/* CONTENT */}
        <div>
          <p className="text-2xl md:text-2xl uppercase tracking-wider mb-4 text-white">
  Platform
</p>

          <h1 className="text-4xl md:text-4xl font-semibold tracking-tight mb-6 text-[#67E8F9]">
            AI Language Engine
          </h1>

          <p className="text-gray-400 leading-relaxed">
            The AI Language Engine is the core of the PolyVerb AI platform, enabling intelligent multilingual 
            understanding, processing, and transformation of content across formats and domains.
          </p>
        </div>

      </section>

      {/* 2-COLUMN TEXT GRID */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-24">

        {/* CARD 1 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Globe size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Language Detection</h2>
          <p className="text-gray-400 leading-relaxed">
            The platform automatically identifies the source language of incoming content. 
            This ensures accurate processing without manual input. 
            It supports multiple formats and content types seamlessly. 
            This capability eliminates manual tagging and reduces operational complexity.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Layers size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Domain Classification</h2>
          <p className="text-gray-400 leading-relaxed">
            Content is categorized into domains such as legal, medical, technical, or marketing. 
            This enables the system to apply the right terminology and contextual intelligence. 
            It ensures higher accuracy and relevance aligned with industry expectations.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <BookOpen size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Terminology Alignment</h2>
          <p className="text-gray-400 leading-relaxed">
            Glossaries and terminology databases are applied automatically during processing. 
            This ensures consistent usage of key terms across all content and languages. 
            It preserves brand voice and technical accuracy at scale.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Database size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Translation Memory</h2>
          <p className="text-gray-400 leading-relaxed">
            Previously translated content is stored and reused intelligently. 
            This reduces duplication, improves consistency, and lowers cost. 
            It also accelerates turnaround time across projects.
          </p>
        </div>

        {/* CARD 5 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 md:col-span-2">
          <Brain size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Adaptive AI Models</h2>
          <p className="text-gray-400 leading-relaxed max-w-3xl">
            AI models continuously learn from feedback, corrections, and usage patterns. 
            This improves output quality over time and adapts to business-specific requirements. 
            The system evolves continuously, becoming smarter with every interaction.
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