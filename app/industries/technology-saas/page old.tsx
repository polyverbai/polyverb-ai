import { Code, Globe, Layout, FileText } from "lucide-react";

export default function Page() {
  return (
    <main className="bg-[#0B0F1A] text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center pt-24 mb-24 px-6">

        <div>
          <img 
            src="/images/technology.png"
            alt="Technology and SaaS"
            className="w-full h-[350px] object-cover rounded-xl border border-white/10"
          />
        </div>

        <div>
          <p className="text-2xl uppercase tracking-wider mb-4">
            Industries
          </p>

          <h1 className="text-4xl font-semibold tracking-tight mb-6 text-[#67E8F9]">
            Technology & SaaS
          </h1>

          <p className="text-gray-400 leading-relaxed">
            We enable software and technology companies to scale globally through seamless localization 
            of applications, platforms, and digital experiences. This ensures performance, usability, 
            and consistency across languages and markets.
          </p>
        </div>

      </section>

      {/* CAPABILITIES */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-24">

        {/* CARD 1 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Code size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Application & Platform Localization
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Software applications, SaaS platforms, and dashboards are localized to deliver seamless 
            and intuitive global user experiences.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Globe size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Website & Web App Localization
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Websites and web applications are adapted to ensure accessibility, performance, 
            and engagement across regions.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Layout size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            UI/UX & Product Experience Localization
          </h2>
          <p className="text-gray-400 leading-relaxed">
            User interfaces, layouts, and workflows are optimized to align with cultural 
            and linguistic expectations across markets.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <FileText size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Technical & Developer Documentation
          </h2>
          <p className="text-gray-400 leading-relaxed">
            User manuals, API documentation, and developer resources are translated with 
            precision, clarity, and consistency.
          </p>
        </div>

      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto text-center pb-24 px-6">

        <h2 className="text-2xl font-semibold mb-4">
          Build once, scale globally
        </h2>

        <p className="text-gray-400 mb-8">
          Deliver consistent product experiences across languages and markets with 
          intelligent localization workflows.
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-md">
          Get Started
        </button>

      </section>

    </main>
  );
}