import { BookOpen, Video, Globe, FileCheck, Presentation } from "lucide-react";

export default function Page() {
  return (
    <main className="bg-[#0B0F1A] text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center pt-24 mb-24 px-6">

        <div>
          <img 
            src="/images/elearning.png"
            alt="E-learning Localization"
            className="w-full h-[350px] object-cover rounded-xl border border-white/10"
          />
        </div>

        <div>
          <p className="text-2xl uppercase tracking-wider mb-4">
            Industries
          </p>

          <h1 className="text-4xl font-semibold tracking-tight mb-6 text-[#67E8F9]">
            E-learning
          </h1>

          <p className="text-gray-400 leading-relaxed">
            Educational content is localized to suit different learning environments. 
            This includes courses, training materials, and digital content, enhancing 
            accessibility, engagement, and learning outcomes across global audiences.
          </p>
        </div>

      </section>

      {/* CAPABILITIES */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-24">

        {/* CARD 1 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <BookOpen size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Course & Training Content Localization
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Online courses and training materials are localized to ensure accessibility 
            and engagement for global learners.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Video size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Multimedia & Interactive Content
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Videos, e-learning modules, and interactive content are adapted using 
            subtitles, voice-over, and localization techniques.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <Globe size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Educational Platforms & Apps
          </h2>
          <p className="text-gray-400 leading-relaxed">
            LMS platforms and educational applications are translated to deliver 
            seamless learning experiences across regions.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <FileCheck size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Assessments & Certification Content
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Quizzes, tests, and certification materials are localized while maintaining 
            accuracy and intended learning outcomes.
          </p>
        </div>

        {/* CARD 5 (full width for balance) */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 md:col-span-2">
          <Presentation size={36} color="#22D3EE" className="mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Instructor-led & Teaching Materials
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Presentations, courseware, and teaching aids are adapted to support 
            effective knowledge delivery across languages and regions.
          </p>
        </div>

      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto text-center pb-24 px-6">

        <h2 className="text-2xl font-semibold mb-4">
          Build once, scale globally
        </h2>

        <p className="text-gray-400 mb-8">
          Deliver engaging and accessible learning experiences across languages 
          with intelligent localization workflows.
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-md">
          Get Started
        </button>

      </section>

    </main>
  );
}