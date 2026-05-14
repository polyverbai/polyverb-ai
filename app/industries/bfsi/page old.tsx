import { Landmark, ShieldCheck, FileText, Globe } from "lucide-react";

export default function Page() {
  return (
    <main className="bg-[#0B0F1A] text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center pt-24 mb-24 px-6">

        <div>
          <img 
            src="/images/bfsi.png"
            alt="BFSI Localization"
            className="w-full h-[350px] object-cover rounded-xl border border-white/10"
          />
        </div>

        <div>
          <p className="text-2xl uppercase tracking-wider mb-4">
            Industries
          </p>

          <h1 className="text-4xl font-semibold tracking-tight mb-6 text-[#67E8F9]">
            BFSI (Banking, Financial Services & Insurance)
          </h1>

          <p className="text-gray-400 leading-relaxed">
            Financial and banking content is localized with precision, compliance, and accuracy. 
            PolyVerb AI enables global financial institutions to communicate effectively across markets 
            while maintaining regulatory standards and trust.
          </p>
        </div>

      </section>

      {/* KEY CAPABILITIES */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-24">

        {/* CARD 1 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <ShieldCheck size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Regulatory compliance</h2>
          <p className="text-gray-400 leading-relaxed">
            Financial content is adapted to meet regional regulatory requirements. 
            This ensures compliance across jurisdictions while reducing legal risks.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <FileText size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Financial documentation</h2>
          <p className="text-gray-400 leading-relaxed">
            Documents such as reports, policies, and disclosures are translated with high accuracy. 
            This ensures clarity, consistency, and precision in communication.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Landmark size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Customer communications</h2>
          <p className="text-gray-400 leading-relaxed">
            Banking and financial communications are localized for global audiences. 
            This improves customer trust, engagement, and experience.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Globe size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Fintech & Trading Platforms</h2>
          <p className="text-gray-400 leading-relaxed">
            Enable global accessibility of fintech products through precise UI and content localization.
          </p>
        </div>

      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto text-center pb-24 px-6">

        <h2 className="text-2xl font-semibold mb-4">
          Build once, scale globally
        </h2>

        <p className="text-gray-400 mb-8">
          PolyVerb AI enables financial institutions to deliver compliant, accurate, 
          and scalable multilingual experiences across global markets.
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-md">
          Get Started
        </button>

      </section>

    </main>
  );
}