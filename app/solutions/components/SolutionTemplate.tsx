"use client";

type Props = {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
};

export default function SolutionTemplate({
  title,
  subtitle,
  description,
  points,
}: Props) {
  return (
    <main className="bg-[#05070D] text-white min-h-screen px-6 md:px-16 py-24">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-white to-[#22D3EE] text-transparent bg-clip-text">
            {title}
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="relative">
            <div className="absolute -top-10 left-0 w-[300px] h-[300px] bg-cyan-400/10 blur-[100px] rounded-full"></div>

            <p className="text-gray-400 leading-relaxed mb-6">
              {description}
            </p>

            <ul className="space-y-4 text-gray-300">
              {points.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-[#22D3EE]">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT VISUAL */}
          <div className="bg-[#0B0F1A] border border-white/10 rounded-2xl p-8 shadow-[0_0_40px_rgba(34,211,238,0.08)] text-center">
            <p className="text-gray-400">
              Visual / infographic placeholder
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}