"use client";

export default function ClientMarquee() {
  const clients = [
    "/images/client1.png",
    "/images/client2.png",
    "/images/client3.png",
    "/images/client4.png",
    "/images/client5.png",
  ];

  return (
    <div className="overflow-hidden py-12 bg-[#05070D]">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...clients, ...clients].map((src, i) => (
          <img
            key={i}
            src={src}
            className="h-10 mx-10 opacity-60 hover:opacity-100 transition"
            alt="client"
          />
        ))}
      </div>
    </div>
  );
}