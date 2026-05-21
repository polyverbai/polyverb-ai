"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {

  const pathname = usePathname();

  const linkClass = (href: string) =>
  "text-gray-400 hover:text-white transition duration-200";

  return (
    <footer className="bg-[#05070D]/95 backdrop-blur-xl text-gray-300 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-4 pt-10 pb-16">

        {/* ================= MOBILE ================= */}
        <div className="block lg:hidden w-full">

          {/* TOP */}
          <div className="footer-top w-full flex flex-col items-center text-center">

            {/* LOGO */}
            <div className="w-full flex justify-center items-center">
              <img
                src="/logo.png"
                className="w-[320px] sm:w-[360px] object-contain pl-26"
                alt="PolyVerb AI"
              />
            </div>

            {/* TAGLINE */}
            <p className="footer-tagline text-[11px] leading-relaxed text-gray-400 mt-2 max-w-[320px]">
              AI-native global language platform enabling businesses to scale across languages and markets.
            </p>

          </div>

          {/* CONTACT */}
          <div className="footer-contact text-sm text-gray-400 space-y-3 mt-6 text-left w-full">

            <div className="flex items-start gap-2 justify-start">
              <MapPin size={16} className="text-[#67E8F9] mt-1 shrink-0" />
              <span>
                No 20, 13th Cross, Opp KHB Quarters, Sultanpalya, RT Nagar Post, Bangalore - 560032, Karnataka, India
              </span>
            </div>

            <div className="flex items-center gap-2 justify-start">
              <Phone size={16} className="text-[#67E8F9]" />
              <span>+91 8088178169</span>
            </div>

            <div className="flex items-center gap-2 justify-start">
              <Mail size={16} className="text-[#67E8F9]" />
              <span>info@polyverbai.com</span>
            </div>

          </div>

          {/* NAVIGATION */}
          <div className="footer-services grid grid-cols-2 gap-x-8 gap-y-8 mt-10 w-full max-w-[720px] mx-auto">

            {/* PLATFORM */}
            <div>
              <h3 className="text-[#67E8F9] mb-3 font-semibold">Platform</h3>
              <ul className="space-y-2 text-xs">
                <li><Link href="/platform/ai-language-engine" className={linkClass("/platform/ai-language-engine")}>AI Language Engine</Link></li>
                <li><Link href="/platform/workflow-automation" className={linkClass("/platform/workflow-automation")}>Workflow Automation</Link></li>
                <li><Link href="/platform/continuous-localization" className={linkClass("/platform/continuous-localization")}>Continuous Localization</Link></li>
                <li><Link href="/platform/outcomes" className={linkClass("/platform/outcomes")}>Outcomes</Link></li>
              </ul>
            </div>

            {/* SOLUTIONS */}
            <div>
              <h3 className="text-[#67E8F9] mb-3 font-semibold">Solutions</h3>
              <ul className="space-y-2 text-xs">
                <li><Link href="/solutions/global-content-translation" className={linkClass("/solutions/global-content-translation")}>Global Content & Translation</Link></li>
                <li><Link href="/solutions/software-localization" className={linkClass("/solutions/software-localization")}>Software Localization</Link></li>
                <li><Link href="/solutions/website-localization" className={linkClass("/solutions/website-localization")}>Website Localization</Link></li>
                <li><Link href="/solutions/multimedia-localization" className={linkClass("/solutions/multimedia-localization")}>Multimedia Localization</Link></li>
                <li><Link href="/solutions/interpretation" className={linkClass("/solutions/interpretation")}>Interpretation</Link></li>
                <li><Link href="/solutions/testing-qa" className={linkClass("/solutions/testing-qa")}>Testing & QA</Link></li>
              </ul>
            </div>

            {/* INDUSTRIES */}
            <div>
              <h3 className="text-[#67E8F9] mb-3 font-semibold">Industries</h3>
              <ul className="space-y-2 text-xs">
                <li><Link href="/industries/bfsi" className={linkClass("/industries/bfsi")}>BFSI</Link></li>
                <li><Link href="/industries/healthcare" className={linkClass("/industries/healthcare")}>Healthcare</Link></li>
                <li><Link href="/industries/legal" className={linkClass("/industries/legal")}>Legal</Link></li>
                <li><Link href="/industries/e-learning" className={linkClass("/industries/e-learning")}>E-learning</Link></li>
                <li><Link href="/industries/technology-saas" className={linkClass("/industries/technology-saas")}>Technology & SaaS</Link></li>
                <li><Link href="/industries/media-entertainment" className={linkClass("/industries/media-entertainment")}>Media & Entertainment</Link></li>
              </ul>
            </div>

            {/* LANGUAGES */}
            <div>
              <h3 className="text-[#67E8F9] mb-3 font-semibold">Languages</h3>
              <ul className="space-y-2 text-xs">
                <li><Link href="/languages/global-language-coverage" className={linkClass("/languages/global-language-coverage")}>Global Language Coverage</Link></li>
                <li><Link href="/languages/regional-language-coverage" className={linkClass("/languages/regional-language-coverage")}>Regional Language Coverage</Link></li>
                <li><Link href="/languages/linguist-network" className={linkClass("/languages/linguist-network")}>Linguist Network</Link></li>
                <li><Link href="/languages/domain-expertise" className={linkClass("/languages/domain-expertise")}>Domain Expertise</Link></li>
              </ul>
            </div>

            {/* APPROACH */}
            <div>
              <h3 className="text-[#67E8F9] mb-3 font-semibold">Approach</h3>
              <ul className="space-y-2 text-xs">
                <li><Link href="/approach/how-it-works" className={linkClass("/approach/how-it-works")}>How It Works</Link></li>
                <li><Link href="/approach/quality-framework" className={linkClass("/approach/quality-framework")}>Quality Framework</Link></li>
                <li><Link href="/approach/delivery-model" className={linkClass("/approach/delivery-model")}>Delivery Model</Link></li>
              </ul>
            </div>

            {/* ABOUT */}
            <div>
              <h3 className="text-[#67E8F9] mb-3 font-semibold">About</h3>
              <ul className="space-y-2 text-xs">
                <li><Link href="/about/company" className={linkClass("/about/company")}>Company</Link></li>
                <li><Link href="/careers" className={linkClass("/careers")}>Careers</Link></li>
                <li><Link href="/contact" className={linkClass("/contact")}>Contact Us</Link></li>
              </ul>
            </div>

          </div>

          {/* SOCIAL */}
<div className="footer-social flex justify-center mt-10">
  <div className="flex gap-6 text-gray-400">

    {/* LINKEDIN */}
    <a
      href="https://www.linkedin.com/company/polyverb-ai"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#67E8F9]"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5zM.22 8h4.56v14H.22V8zM8.34 8h4.37v1.91h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.48 3.04 5.48 6.99V22h-4.56v-6.73c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.74-2.57 3.55V22H8.34V8z"/>
      </svg>
    </a>

    {/* TWITTER / X */}
    <a
  href="https://x.com/PolyVerbAI"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-[#67E8F9]"
>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.46 6c-.77.35-1.5.58-2.3.69a4.15 4.15 0 001.8-2.27c-.8.47-1.7.8-2.6.98A4.1 4.1 0 0016.1 4c-2.27 0-4.1 1.84-4.1 4.1 0 .32.03.64.1.94C8.28 8.87 5.1 7.1 2.96 4.4c-.35.6-.55 1.3-.55 2.05 0 1.42.72 2.67 1.82 3.4-.67-.02-1.3-.2-1.85-.5v.05c0 1.98 1.4 3.63 3.25 4-.34.1-.7.15-1.07.15-.26 0-.52-.02-.77-.07.52 1.62 2.04 2.8 3.84 2.83A8.24 8.24 0 012 19.54 11.63 11.63 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68v-.53c.8-.58 1.5-1.3 2.05-2.12z"/>
      </svg>
    </a>

    {/* INSTAGRAM */}
    <a
      href="https://www.instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#67E8F9]"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5c3.18 0 5.75-2.57 5.75-5.75v-8.5C22 4.57 19.43 2 16.25 2h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm6.5-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 9a3 3 0 100 6 3 3 0 000-6z"/>
      </svg>
    </a>

  </div>
</div>
</div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:grid lg:grid-cols-10 gap-10">

          {/* LEFT SECTION */}
          <div className="lg:col-span-4 pr-4">

            <img
              src="/logo.png"
              className="h-32 md:h-36 w-auto object-contain mb-0"
              alt="PolyVerb AI"
            />

            <p className="text-sm text-gray-400 mb-1 leading-tight">
              AI-native global language platform enabling businesses to scale across languages and markets.
            </p>

            <div className="text-sm text-gray-400 space-y-2 mt-4">

              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-[#67E8F9] mt-1" />
                <span>
                  No 20, 13th Cross, Opp KHB Quarters, Sultanpalya, RT Nagar Post, Bangalore - 560032, Karnataka, India
                </span>
              </div>

              <div className="flex items-center gap-2 justify-start">
                <Phone size={16} className="text-[#67E8F9]" />
                <span>+91 8088178169</span>
              </div>

              <div className="flex items-center gap-2 justify-start">
                <Mail size={16} className="text-[#67E8F9]" />
                <span>info@polyverbai.com</span>
              </div>

            </div>

          </div>

          {/* PLATFORM */}
          <div>
            <h3 className="text-[#67E8F9] mb-2 font-semibold">Platform</h3>
            <ul className="space-y-1 text-[11px]">
              <li><Link href="/platform/ai-language-engine" className={linkClass("/platform/ai-language-engine")}>AI Language Engine</Link></li>
              <li><Link href="/platform/workflow-automation" className={linkClass("/platform/workflow-automation")}>Workflow Automation</Link></li>
              <li><Link href="/platform/continuous-localization" className={linkClass("/platform/continuous-localization")}>Continuous Localization</Link></li>
              <li><Link href="/platform/outcomes" className={linkClass("/platform/outcomes")}>Outcomes</Link></li>
            </ul>
          </div>

          {/* SOLUTIONS */}
          <div>
            <h3 className="text-[#67E8F9] mb-2 font-semibold">Solutions</h3>
            <ul className="space-y-1 text-[11px]">
              <li><Link href="/solutions/global-content-translation" className={linkClass("/solutions/global-content-translation")}>Global Content & Translation</Link></li>
              <li><Link href="/solutions/software-localization" className={linkClass("/solutions/software-localization")}>Software Localization</Link></li>
              <li><Link href="/solutions/website-localization" className={linkClass("/solutions/website-localization")}>Website Localization</Link></li>
              <li><Link href="/solutions/multimedia-localization" className={linkClass("/solutions/multimedia-localization")}>Multimedia Localization</Link></li>
              <li><Link href="/solutions/interpretation" className={linkClass("/solutions/interpretation")}>Interpretation</Link></li>
              <li><Link href="/solutions/testing-qa" className={linkClass("/solutions/testing-qa")}>Testing & QA</Link></li>
            </ul>
          </div>

          {/* INDUSTRIES */}
          <div>
            <h3 className="text-[#67E8F9] mb-2 font-semibold">Industries</h3>
            <ul className="space-y-1 text-[11px]">
              <li><Link href="/industries/bfsi" className={linkClass("/industries/bfsi")}>BFSI</Link></li>
              <li><Link href="/industries/healthcare" className={linkClass("/industries/healthcare")}>Healthcare</Link></li>
              <li><Link href="/industries/legal" className={linkClass("/industries/legal")}>Legal</Link></li>
              <li><Link href="/industries/e-learning" className={linkClass("/industries/e-learning")}>E-learning</Link></li>
              <li><Link href="/industries/technology-saas" className={linkClass("/industries/technology-saas")}>Technology & SaaS</Link></li>
              <li><Link href="/industries/media-entertainment" className={linkClass("/industries/media-entertainment")}>Media & Entertainment</Link></li>
            </ul>
          </div>

          {/* LANGUAGES */}
          <div>
            <h3 className="text-[#67E8F9] mb-2 font-semibold">Languages</h3>
            <ul className="space-y-1 text-[11px]">
              <li><Link href="/languages/global-language-coverage" className={linkClass("/languages/global-language-coverage")}>Global Language Coverage</Link></li>
              <li><Link href="/languages/regional-language-coverage" className={linkClass("/languages/regional-language-coverage")}>Regional Language Coverage</Link></li>
              <li><Link href="/languages/linguist-network" className={linkClass("/languages/linguist-network")}>Linguist Network</Link></li>
              <li><Link href="/languages/domain-expertise" className={linkClass("/languages/domain-expertise")}>Domain Expertise</Link></li>
            </ul>
          </div>

          {/* APPROACH */}
          <div>
            <h3 className="text-[#67E8F9] mb-2 font-semibold">Approach</h3>
            <ul className="space-y-1 text-[11px]">
              <li><Link href="/approach/how-it-works" className={linkClass("/approach/how-it-works")}>How It Works</Link></li>
              <li><Link href="/approach/quality-framework" className={linkClass("/approach/quality-framework")}>Quality Framework</Link></li>
              <li><Link href="/approach/delivery-model" className={linkClass("/approach/delivery-model")}>Delivery Model</Link></li>
            </ul>
          </div>

          {/* ABOUT */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="text-[#67E8F9] mb-2 font-semibold">About</h3>
              <ul className="space-y-1 text-[11px]">
                <li><Link href="/about/company" className={linkClass("/about/company")}>Company</Link></li>
                <li><Link href="/careers" className={linkClass("/careers")}>Careers</Link></li>
                <li><Link href="/contact" className={linkClass("/contact")}>Contact Us</Link></li>
              </ul>
            </div>

            {/* ICONS */}
            <div className="flex justify-end items-end pb-1">
              <div className="flex gap-4 text-gray-400">

                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#67E8F9]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5zM.22 8h4.56v14H.22V8zM8.34 8h4.37v1.91h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.48 3.04 5.48 6.99V22h-4.56v-6.73c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.74-2.57 3.55V22H8.34V8z"/>
                  </svg>
                </a>

                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#67E8F9]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.46 6c-.77.35-1.5.58-2.3.69a4.15 4.15 0 001.8-2.27c-.8.47-1.7.8-2.6.98A4.1 4.1 0 0016.1 4c-2.27 0-4.1 1.84-4.1 4.1 0 .32.03.64.1.94C8.28 8.87 5.1 7.1 2.96 4.4c-.35.6-.55 1.3-.55 2.05 0 1.42.72 2.67 1.82 3.4-.67-.02-1.3-.2-1.85-.5v.05c0 1.98 1.4 3.63 3.25 4-.34.1-.7.15-1.07.15-.26 0-.52-.02-.77-.07.52 1.62 2.04 2.8 3.84 2.83A8.24 8.24 0 012 19.54 11.63 11.63 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68v-.53c.8-.58 1.5-1.3 2.05-2.12z"/>
                  </svg>
                </a>

                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#67E8F9]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5c3.18 0 5.75-2.57 5.75-5.75v-8.5C22 4.57 19.43 2 16.25 2h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm6.5-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 9a3 3 0 100 6 3 3 0 000-6z"/>
                  </svg>
                </a>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
        © 2026 PolyVerb AI. All rights reserved.
      </div>

    </footer>
  );
}