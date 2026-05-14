import { Globe, Layout, Languages, Search } from "lucide-react";

export default function Page() {
  return (
    <main className="bg-[#0B0F1A] text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center pt-24 mb-24 px-6">

        <div>
          <img 
            src="/images/website-localization.png"
            alt="Website Localization"
            className="w-full h-[350px] object-cover rounded-xl border border-white/10"
          />
        </div>

        <div>
          <p className="text-2xl uppercase tracking-wider mb-4 text-white">
            Solutions
          </p>

          <h1 className="text-4xl font-semibold tracking-tight mb-6 text-[#67E8F9]">
            Website Localization
          </h1>

          <p className="text-gray-400 leading-relaxed">
            Websites are adapted to reflect local language, culture, and user expectations. This ensures a consistent and engaging experience across global markets.
          </p>
        </div>

      </section>

      {/* CARDS */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-24">

        {/* CARD 1 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Search size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">SEO localization</h2>
          <p className="text-gray-400 leading-relaxed">
            Content is optimized for local search engines and regional keywords. This improves visibility and discoverability in target markets. It ensures that your website performs effectively across geographies.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Layout size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">CMS integration</h2>
          <p className="text-gray-400 leading-relaxed">
            The platform integrates with content management systems for automated content updates. This reduces manual effort and ensures consistency. It enables dynamic content localization at scale.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Languages size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Dynamic content handling</h2>
          <p className="text-gray-400 leading-relaxed">
            Both static and dynamic website elements are localized efficiently. This includes metadata, UI strings, and user-generated content. It ensures a complete localized experience.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Globe size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Cultural adaptation</h2>
          <p className="text-gray-400 leading-relaxed">
            Content is adapted to reflect local culture, tone, and preferences. This enhances user engagement and trust. It ensures your brand resonates with local audiences.
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