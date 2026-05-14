import { CheckCircle, Languages, Settings, FileCheck } from "lucide-react";

export default function Page() {
  return (
    <main className="bg-[#0B0F1A] text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center pt-24 mb-24 px-6">

        <div>
          <img 
            src="/images/testing-qa.png"
            alt="Testing and QA"
            className="w-full h-[350px] object-cover rounded-xl border border-white/10"
          />
        </div>

        <div>
          <p className="text-2xl uppercase tracking-wider mb-4 text-white">
            Solutions
          </p>

          <h1 className="text-4xl font-semibold tracking-tight mb-6 text-[#67E8F9]">
            Testing & QA
          </h1>

          <p className="text-gray-400 leading-relaxed">
            Quality and performance are ensured across languages through structured testing and QA processes. 
            This validates linguistic accuracy, functionality, and user experience. 
            It ensures global-ready products meet high standards across markets.
          </p>
        </div>

      </section>

      {/* CARDS */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-24">

        {/* CARD 1 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Languages size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">i18n testing</h2>
          <p className="text-gray-400 leading-relaxed">
            Products are tested to ensure they support multiple languages and regional formats. 
            This includes validation of encoding, formats, and adaptability. 
            It ensures readiness for localization.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <CheckCircle size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Localization testing</h2>
          <p className="text-gray-400 leading-relaxed">
            Localized content is tested for linguistic accuracy and contextual relevance. 
            This ensures the content aligns with target audience expectations. 
            It improves overall quality.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Settings size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Functional testing</h2>
          <p className="text-gray-400 leading-relaxed">
            All localized versions are tested for functionality and usability. 
            This ensures there are no defects or broken elements. 
            It guarantees a consistent user experience.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <FileCheck size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Linguistic QA</h2>
          <p className="text-gray-400 leading-relaxed">
            Content is reviewed for grammar, tone, and consistency. 
            Native linguists ensure cultural and contextual accuracy. 
            This enhances the final output quality.
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
          This reduces time, cost, and complexity.
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-md">
          Get Started
        </button>
      </section>

    </main>
  );
}