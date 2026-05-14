"use client";

import { motion } from "framer-motion";

export function SectionLeft({
  id,
  label,
  title,
  img,
  children,
}: any) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-20 max-w-6xl mx-auto px-6 pt-2 md:pt-0 mb-8 md:mb-24"
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0 }}
    >
      {/* MOBILE */}
      <div className="grid gap-6 md:hidden">
        <div className="max-w-xl">
          <p className="text-2xl uppercase tracking-wider mb-4">{label}</p>

          <h1 className="text-[28px] sm:text-[32px] md:text-4xl font-semibold tracking-tight mb-6 text-[#67E8F9] break-words">
            {title}
          </h1>

          <p className="text-gray-400 leading-relaxed">{children}</p>
        </div>

        <div className="mobile-image-box">
          <img
            src={img}
            alt={title}
            className="mobile-image"
          />
        </div>
      </div>

      {/* DESKTOP / TABLET / LANDSCAPE */}
      <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-20 items-center">
        <div className="w-full h-[240px] sm:h-[280px] md:h-[350px] flex items-center justify-center">
          <img
            src={img}
            alt={title}
            className="max-w-full max-h-full object-contain rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.38)]"
          />
        </div>

        <div className="w-full md:max-w-xl">
          <p className="text-2xl uppercase tracking-wider mb-4">{label}</p>

          <h1 className="text-4xl font-semibold tracking-tight mb-6 text-[#67E8F9]">
            {title}
          </h1>

          <p className="text-gray-400 leading-relaxed">{children}</p>
        </div>
      </div>
    </motion.section>
  );
}

export function SectionRight({
  id,
  label,
  title,
  img,
  children,
}: any) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-20 max-w-6xl mx-auto px-3 pt-2 md:pt-0 mb-8 md:mb-24"
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0 }}
    >
      <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center">

        {/* TEXT */}
        <div className="w-full md:max-w-xl md:ml-auto">
          <p className="text-2xl uppercase tracking-wider mb-4">
            {label}
          </p>

          <h1 className="text-[28px] sm:text-[32px] md:text-4xl font-semibold tracking-tight mb-6 text-[#67E8F9] break-words">
            {title}
          </h1>

          <p className="text-gray-400 leading-relaxed">
            {children}
          </p>
        </div>

        {/* IMAGE */}
        <div className="w-full h-[230px] sm:h-[260px] md:h-[350px] flex items-center justify-center">
          <img
            src={img}
            alt={title}
            className="max-w-full max-h-full object-contain rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.38)]"
          />
        </div>

      </div>
    </motion.section>
  );
}