"use client";

import { motion } from "framer-motion";

export function Grid({ children }: any) {
  return (
    <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-10 px-6 mt-0 md:mt-0 mb-24 md:mb-35 overflow-visible">
      {children}
    </section>
  );
}

export function Card({
  icon,
  title,
  desc,
  full,
}: any) {
  return (
    <motion.div
      transition={{
  duration: 0.2,
}}
      style={{ overflow: "visible" }}
      className={full ? "md:col-span-2" : ""}
    >
      <div className="relative h-full p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#22D3EE]/50 transition-all duration-300">

        <div className="mb-4 text-[#22D3EE]">
          {icon}
        </div>

        <h3 className="text-xl font-semibold mb-4">
          {title}
        </h3>

        <p className="text-gray-400 leading-relaxed">
          {desc}
        </p>

      </div>
    </motion.div>
  );
}