"use client";

export default function StatsWithClients() {
  const clients = [
    "/images/client1.png",
    "/images/client2.png",
    "/images/client3.png",
    "/images/client4.png",
    "/images/client5.png",
  ];

  const stats = [
    { value: "150+", label: "Languages Supported" },
    { value: "10M+", label: "Words Processed" },
    { value: "99%", label: "Accuracy Rate" },
    { value: "3x", label: "Faster Delivery" },
  ];

  return (
    <section className="py-20 bg-[#05070D] relative overflow-hidden">

      {/* 🔵 Glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#05070D] via-[#0B0F1A] to-[#05070D]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-400/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ===== CLIENT MARQUEE ===== */}
        <div className="relative overflow-hidden mb-10 max-w-6xl mx-auto px-6">
  <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#05070D] to-transparent z-10" />
<div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#05070D] to-transparent z-10" />
          <div className="flex animate-marquee whitespace-nowrap w-max">
            {[...clients, ...clients].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="client"
                className="h-10 mx-10 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            ))}
          </div>
        </div>

        {/* ===== STATS ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#0B0F1A] border border-white/10 rounded-2xl p-6 
              hover:border-[#22D3EE]/40 transition-all duration-300
              hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-[#22D3EE] mb-2">
                {stat.value}
              </h2>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}