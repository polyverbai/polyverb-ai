import { Clock, CheckCircle, Activity, TrendingUp } from "lucide-react";

export default function Page() {
  return (
    <main className="bg-[#0B0F1A] text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center pt-24 mb-24 px-6">

        <div>
          <img 
            src="/images/outcomes-v2.png"
            alt="Outcomes"
            className="w-full h-[350px] object-cover rounded-xl border border-white/10"
          />
        </div>

        <div>
          <p className="text-2xl uppercase tracking-wider mb-4 text-white">
            Platform
          </p>

          <h1 className="text-4xl font-semibold tracking-tight mb-6 text-[#67E8F9]">
            Outcomes
          </h1>

          <p className="text-gray-400 leading-relaxed">
            The platform delivers measurable outcomes by improving speed, quality, and efficiency across localization workflows. It enables businesses to scale globally with consistency and reduced operational complexity.
          </p>
        </div>

      </section>

      {/* GRID */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-24">

        {/* FASTER TIME-TO-MARKET */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Clock size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Faster time-to-market
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Automation and integration reduce delays in localization. Products can be launched globally faster. This improves competitive advantage.
          </p>
        </div>

        {/* CONSISTENT QUALITY */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <CheckCircle size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Consistent quality
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Standardized processes and AI ensure uniform quality across languages. Terminology and style remain consistent. This strengthens brand integrity.
          </p>
        </div>

        {/* REDUCED MANUAL EFFORT */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Activity size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Reduced manual effort
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Automation eliminates repetitive tasks and manual coordination. Teams can focus on high-value activities. This improves efficiency and productivity.
          </p>
        </div>

        {/* SCALABLE OPERATIONS */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <TrendingUp size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Scalable operations
          </h2>
          <p className="text-gray-400 leading-relaxed">
            The platform supports growing volumes and markets without complexity. It adapts to business expansion seamlessly. This enables long-term scalability.
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