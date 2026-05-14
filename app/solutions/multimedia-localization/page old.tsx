import { Mic, Video, Subtitles, FileText } from "lucide-react";

export default function Page() {
  return (
    <main className="bg-[#0B0F1A] text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center pt-24 mb-24 px-6">

        <div>
          <img 
            src="/images/multimedia-localization.png"
            alt="Multimedia Localization"
            className="w-full h-[350px] object-cover rounded-xl border border-white/10"
          />
        </div>

        <div>
          <p className="text-2xl uppercase tracking-wider mb-4 text-white">
            Solutions
          </p>

          <h1 className="text-4xl font-semibold tracking-tight mb-6 text-[#67E8F9]">
            Multimedia Localization
          </h1>

          <p className="text-gray-400 leading-relaxed">
            Content is adapted for global audiences through multimedia localization. This includes subtitles, dubbing, and voice-over. It ensures cultural relevance and audience engagement.
          </p>
        </div>

      </section>

      {/* CARDS */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-24">

        {/* CARD 1 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Mic size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Voice-over</h2>
          <p className="text-gray-400 leading-relaxed">
            Professional voice artists deliver localized audio that matches tone, emotion, and intent. This enhances audience engagement across regions. It ensures consistency in messaging.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Video size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Dubbing (lip-sync / phrase sync)</h2>
          <p className="text-gray-400 leading-relaxed">
            Audio is synchronized with on-screen visuals for a natural viewing experience. This includes lip-sync and phrase-sync techniques. It ensures high-quality localized media content.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Subtitles size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Subtitling</h2>
          <p className="text-gray-400 leading-relaxed">
            Subtitles are created with precise timing, readability, and contextual accuracy. This improves accessibility and comprehension. It enables content to reach wider audiences.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <FileText size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Transcription</h2>
          <p className="text-gray-400 leading-relaxed">
            Audio and video content are converted into accurate text formats. This supports content reuse and localization workflows. It also enhances accessibility and compliance.
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