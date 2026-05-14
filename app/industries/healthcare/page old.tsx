import { HeartPulse, ShieldCheck, FileText, Globe } from "lucide-react";

export default function Page() {
  return (
    <main className="bg-[#0B0F1A] text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center pt-24 mb-24 px-6">

        <div>
          <img 
            src="/images/healthcare.png"
            alt="Healthcare and Life Sciences"
            className="w-full h-[350px] object-cover rounded-xl border border-white/10"
          />
        </div>

        <div>
          <p className="text-2xl uppercase tracking-wider mb-4">
            Industries
          </p>

          <h1 className="text-4xl font-semibold tracking-tight mb-6 text-[#67E8F9]">
            Healthcare & Life Sciences
          </h1>

          <p className="text-gray-400 leading-relaxed">
            Medical and life sciences content is handled with domain expertise and precision. 
            This ensures compliance, clarity, and accuracy across clinical, pharmaceutical, 
            and healthcare communications globally.
          </p>
        </div>

      </section>

      {/* CAPABILITIES */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-24">

        {/* CARD 1 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <HeartPulse size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Clinical & Medical Documentation
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Clinical reports, patient records, and medical documentation are translated 
            with high accuracy to ensure clarity and reliability in critical information.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <ShieldCheck size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Regulatory & Compliance Content
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Healthcare content is localized to meet regional regulatory standards 
            and compliance requirements across global markets.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <FileText size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Pharmaceutical & Life Sciences
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Pharmaceutical documentation, research materials, and life sciences content 
            are translated with domain expertise to ensure precision and consistency.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Globe size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Patient Communication & Accessibility
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Healthcare information is localized for patients across languages, improving 
            accessibility, understanding, and engagement globally.
          </p>
        </div>

      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto text-center pb-24 px-6">

        <h2 className="text-2xl font-semibold mb-4">
          Build once, scale globally
        </h2>

        <p className="text-gray-400 mb-8">
          Deliver accurate, compliant, and accessible healthcare communication 
          across languages and regions.
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-md">
          Get Started
        </button>

      </section>

    </main>
  );
}