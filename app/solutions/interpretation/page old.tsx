import { Headphones, Users, Phone, Globe } from "lucide-react";

export default function Page() {
  return (
    <main className="bg-[#0B0F1A] text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center pt-24 mb-24 px-6">

        <div>
          <img 
            src="/images/interpretation.png"
            alt="Interpretation"
            className="w-full h-[350px] object-cover rounded-xl border border-white/10"
          />
        </div>

        <div>
          <p className="text-2xl uppercase tracking-wider mb-4 text-white">
            Solutions
          </p>

          <h1 className="text-4xl font-semibold tracking-tight mb-6 text-[#67E8F9]">
            Interpretation
          </h1>

          <p className="text-gray-400 leading-relaxed">
            Real-time communication is enabled across languages through interpretation services. 
            This ensures accurate and seamless interaction in multilingual environments. 
            It supports global collaboration without language barriers.
          </p>
        </div>

      </section>

      {/* CARDS */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-24">

        {/* CARD 1 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Headphones size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Simultaneous interpretation</h2>
          <p className="text-gray-400 leading-relaxed">
            Real-time interpretation is delivered during live events and conferences. 
            This ensures seamless communication without delays. 
            It is ideal for large-scale and multilingual environments.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Users size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Consecutive interpretation</h2>
          <p className="text-gray-400 leading-relaxed">
            Speakers pause to allow interpreters to deliver accurate translations. 
            This ensures clarity and precision. 
            It is commonly used in meetings and legal settings.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Phone size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Remote / on-demand</h2>
          <p className="text-gray-400 leading-relaxed">
            Interpretation services are available via phone or video platforms. 
            This enables instant access to language support. 
            It is ideal for urgent and distributed scenarios.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Globe size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Event support</h2>
          <p className="text-gray-400 leading-relaxed">
            Dedicated interpreters support events, business meetings, and travel requirements. 
            They also provide cultural guidance where needed. 
            This ensures smooth communication in all settings.
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