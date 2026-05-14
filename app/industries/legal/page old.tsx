import { Scale, FileText, ShieldCheck, Copyright } from "lucide-react";

export default function Page() {
  return (
    <main className="bg-[#0B0F1A] text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center pt-24 mb-24 px-6">

        <div>
          <img 
            src="/images/legal.png"
            alt="Legal Localization"
            className="w-full h-[350px] object-cover rounded-xl border border-white/10"
          />
        </div>

        <div>
          <p className="text-2xl uppercase tracking-wider mb-4">
            Industries
          </p>

          <h1 className="text-4xl font-semibold tracking-tight mb-6 text-[#67E8F9]">
            Legal
          </h1>

          <p className="text-gray-400 leading-relaxed">
            Legal documents are translated with high precision and domain expertise. 
            This ensures accuracy in terminology and context while minimizing risk 
            and ensuring compliance across jurisdictions.
          </p>
        </div>

      </section>

      {/* CAPABILITIES */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-24">

        {/* CARD 1 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <FileText size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Contracts & Corporate Legal
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Contracts, agreements, and corporate legal documents are translated with precision 
            to preserve intent, accuracy, and enforceability.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <ShieldCheck size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Litigation & Regulatory Compliance
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Court documents, legal proceedings, and compliance content are localized 
            to meet regional legal requirements and standards.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Copyright size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Intellectual Property
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Patents, trademarks, and copyrights are translated with domain expertise 
            to protect and manage global intellectual assets.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Scale size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Personal & Official Legal Documents
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Certificates, affidavits, and official documents are localized for accurate 
            and compliant use across jurisdictions.
          </p>
        </div>

      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto text-center pb-24 px-6">

        <h2 className="text-2xl font-semibold mb-4">
          Build once, scale globally
        </h2>

        <p className="text-gray-400 mb-8">
          Ensure legal accuracy, compliance, and consistency across languages 
          with domain-specific localization expertise.
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-md">
          Get Started
        </button>

      </section>

    </main>
  );
}