"use client";

import { useMemo, useState, useRef } from "react";
import {
  Globe,
  Languages,
  Briefcase,
  Upload,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

type FormType = "individual" | "vendor";

export default function LanguagePartnersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formType, setFormType] =
  useState<FormType | null>(null);

  const [activeSection, setActiveSection] =
    useState<string | null>(null);

  const [activeLanguage, setActiveLanguage] =
    useState<string | null>(null);

    const [showSetWarning, setShowSetWarning] =
  useState(false);


    const [showLanguageSetWarning, setShowLanguageSetWarning] =
  useState(false);


  const formSectionRef =
  useRef<HTMLDivElement | null>(null);


  /* ---------------------------------- */
  /* PERSISTENT STATES                  */
  /* ---------------------------------- */

  const [selectedServices, setSelectedServices] =
    useState<string[]>([]);

  const [selectedDomains, setSelectedDomains] =
    useState<string[]>([]);

  const [selectedTools, setSelectedTools] =
    useState<string[]>([]);

  const [selectedIndianLanguages, setSelectedIndianLanguages] =
  useState<string[]>([]);

const [selectedAsianLanguages, setSelectedAsianLanguages] =
  useState<string[]>([]);

const [selectedEuropeanLanguages, setSelectedEuropeanLanguages] =
  useState<string[]>([]);

const [selectedMiddleEastLanguages, setSelectedMiddleEastLanguages] =
  useState<string[]>([]);

  const [selectedDtpTools, setSelectedDtpTools] =
    useState<string[]>([]);

  /* ---------------------------------- */
  /* DATA                               */
  /* ---------------------------------- */

  const expertiseAreas = useMemo(
    () => [
      "Translation",
      "Localization",
      "Interpretation",
      "Subtitling",
      "Transcription",
      "Linguistic QA",
      "Voice Over",
      "AI Language Training",
    ],
    []
  );

  const dtpTools = useMemo(
    () => [
      "Adobe InDesign",
      "Illustrator",
      "Photoshop",
      "FrameMaker",
      "QuarkXPress",
      "CorelDRAW",
      "Canva",
      "Figma",
      "MS Publisher",
    ],
    []
  );

  const domains = useMemo(
    () => [
      "Legal",
      "Medical",
      "IT & Software",
      "Marketing",
      "Finance",
      "Gaming",
      "E-commerce",
      "Education",
    ],
    []
  );

  const tools = useMemo(
    () => [
      "SDL Trados",
      "MemoQ",
      "Phrase",
      "Smartcat",
      "Wordfast",
      "Crowdin",
      "Memsource",
      "Other",
    ],
    []
  );

  const indianLanguages = useMemo(
    () => [
      "Hindi",
      "Tamil",
      "Telugu",
      "Kannada",
      "Malayalam",
      "Bengali",
      "Gujarati",
      "Marathi",
      "Punjabi",
      "Odia",
      "Urdu",
    ],
    []
  );

  const asianLanguages = useMemo(
    () => [
      "Chinese",
      "Japanese",
      "Korean",
      "Thai",
      "Vietnamese",
      "Indonesian",
    ],
    []
  );

  const europeanLanguages = useMemo(
    () => [
      "French",
      "German",
      "Spanish",
      "Italian",
      "Portuguese",
      "Dutch",
      "Russian",
    ],
    []
  );

  const middleEastAfricaLanguages = useMemo(
    () => [
      "Arabic",
      "Hebrew",
      "Turkish",
      "Swahili",
      "Persian",
    ],
    []
  );

  const availabilityOptions = useMemo(
    () => [
      "Full Time Freelancer",
      "Part Time Freelancer",
      "Weekends Only",
      "On Demand",
      "Immediate Availability",
    ],
    []
  );

  /* ---------------------------------- */
  /* HELPERS                            */
  /* ---------------------------------- */

  const toggleSelection = (
    value: string,
    selected: string[],
    setSelected: React.Dispatch<
      React.SetStateAction<string[]>
    >
  ) => {
    if (selected.includes(value)) {
      setSelected(
        selected.filter((item) => item !== value)
      );
    } else {
      setSelected([...selected, value]);
    }
  };

  /* ---------------------------------- */
/* REUSABLE SELECTOR                  */
/* ---------------------------------- */

const SelectorGroup = ({
  items,
  selected,
  setSelected,
  onClose,
}: {
  items: string[];
  selected: string[];
  setSelected: React.Dispatch<
    React.SetStateAction<string[]>
  >;
  onClose: () => void;
}) => (
  <div className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 mb-6">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-2">

      {items.map((item, i) => {

        const isSelected =
          selected.includes(item);

        return (
          <label
            key={i}
            className={`flex items-center justify-between py-2 cursor-pointer transition ${
              isSelected
                ? "text-cyan-400"
                : "text-gray-300"
            }`}
          >

            <span className="text-sm font-medium">
              {item}
            </span>

            <input
              type="checkbox"
              checked={isSelected}
              onChange={() =>
                toggleSelection(
                  item,
                  selected,
                  setSelected
                )
              }
              className="h-4 w-4 accent-cyan-400 shrink-0"
            />

          </label>
        );
      })}

    </div>

    {/* ACTION BUTTONS */}
    <div className="flex items-center justify-between mt-6 gap-4 flex-wrap">

     
      {/* RIGHT SIDE BUTTONS */}
<div className="flex items-center gap-4 ml-auto">

  {(showSetWarning || showLanguageSetWarning) && (
    <p className="text-xs text-red-400">
      Please click Set button to proceed further.
    </p>
  )}

        {/* SELECT ALL */}
        <button
          type="button"
          onClick={() => {

            const allSelected =
              items.every((item) =>
                selected.includes(item)
              );

            if (allSelected) {
              setSelected([]);
            } else {
              setSelected(items);
            }
          }}
          className="border border-cyan-400 text-cyan-400 px-5 py-2 rounded-full text-sm font-medium hover:bg-cyan-400 hover:text-black transition"
        >
          Select All
        </button>

        {/* SET BUTTON */}
        <button
          type="button"
          disabled={selected.length === 0}
          onClick={() => {

            if (selected.length === 0) {
              return;
            }

            setShowSetWarning(false);
            setShowLanguageSetWarning(false);

            onClose();
          }}
          className={`px-5 py-2 rounded-full text-sm font-medium transition ${
            selected.length === 0
              ? "bg-gray-600 text-gray-300 cursor-not-allowed"
              : "bg-cyan-400 text-black hover:bg-cyan-300"
          }`}
        >
          Set
        </button>

      </div>

    </div>

  </div>
);

  /* ---------------------------------- */
  /* SUBMIT                             */
  /* ---------------------------------- */

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {

      setLoading(true);

      const form = e.currentTarget;

      const formData = new FormData(form);

      formData.append(
  "formType",
  formType || ""
);

      formData.append(
        "services",
        JSON.stringify(selectedServices)
      );

      formData.append(
        "domains",
        JSON.stringify(selectedDomains)
      );

      formData.append(
        "catTools",
        JSON.stringify(selectedTools)
      );

      formData.append(
  "indianLanguages",
  JSON.stringify(selectedIndianLanguages)
);

formData.append(
  "asianLanguages",
  JSON.stringify(selectedAsianLanguages)
);

formData.append(
  "europeanLanguages",
  JSON.stringify(selectedEuropeanLanguages)
);

formData.append(
  "middleEastLanguages",
  JSON.stringify(selectedMiddleEastLanguages)
);

      formData.append(
        "dtpTools",
        JSON.stringify(selectedDtpTools)
      );

      const response = await fetch(
        "/api/language-partners",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {

  window.setTimeout(() => {

  setSubmitted(false);
  setFormType(null);

}, 2000);

      // KEEP SUCCESS MESSAGE BELOW NAVBAR
      // WITHOUT VISIBLE SCROLL ANIMATION

      setSubmitted(true);

      requestAnimationFrame(() => {
        const element = formSectionRef.current;

        if (element) {
          const y =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            120;

          window.scrollTo({
            top: y,
            behavior: "auto",
          });
        }
      });

      setActiveSection(null);
      setActiveLanguage(null);

      setShowSetWarning(false);
      setShowLanguageSetWarning(false);

      form.reset();

        setSelectedServices([]);
        setSelectedDomains([]);
        setSelectedTools([]);
        setSelectedIndianLanguages([]);
setSelectedAsianLanguages([]);
setSelectedEuropeanLanguages([]);
setSelectedMiddleEastLanguages([]);
        setSelectedDtpTools([]);

      } else {

        alert("Something went wrong.");
      }

    } catch (error) {

      console.error(error);

      alert("Failed to submit form.");

    } finally {

      setLoading(false);
    }
  };

  return (
    <main className="bg-transparent text-white overflow-hidden">

      {/* HERO */}
      <section className="px-6 md:px-16 py-16">

        <div className="max-w-7xl mx-auto rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0B0F1A] to-[#05070D] px-8 md:px-14 py-16 md:py-20 text-center">

          <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm mb-4">
            Global Linguist Network
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Become a{" "}
            <span className="text-cyan-400">
              Language Partner
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Join our growing global network of freelance translators,
            localization specialists, interpreters, subtitlers and multilingual
            professionals supporting enterprise communication worldwide.
          </p>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="px-6 md:px-16 pb-20">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">

          {[
            [
              "Global Projects",
              "Work with international clients across industries.",
              Globe,
            ],
            [
              "Long-Term Collaboration",
              "Build sustainable partnerships with PolyVerb AI.",
              Briefcase,
            ],
            [
              "Multilingual Innovation",
              "Contribute to AI-powered language solutions.",
              Languages,
            ],
          ].map(([title, desc, Icon]: any, i) => (

            <div
              key={i}
              className="bg-[#0B0F1A] rounded-3xl border border-white/10 p-8"
            >
              <Icon className="text-cyan-400 mb-4" />

              <h3 className="font-semibold text-xl mb-3">
                {title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* FORM */}
      <section className="px-6 md:px-16 pb-28">

        <div
  ref={formSectionRef}
  className="max-w-5xl mx-auto rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0B0F1A] to-[#05070D] p-8 md:p-12"
>

          {/* HEADER */}
          <div className="text-center mb-12">

            <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm mb-4">
              Registration Form
            </p>

            <h2 className="text-3xl md:text-5xl font-semibold mb-5">
              Partner Registration
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Register as an individual linguist or language vendor.
            </p>

          </div>

          {/* FORM TYPE */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">

            <button
              type="button"
              onClick={() => {
  setSubmitted(false);

  setFormType(
    formType === "individual"
      ? null
      : "individual"
  );
}}
              className={`px-6 py-4 rounded-2xl border transition ${
  formType === "individual"
    ? "bg-cyan-400 text-black border-cyan-400"
    : "bg-white/5 border-white/10 text-white hover:border-cyan-400"
}`}
            >
              Individual Linguist
            </button>

            <button
              type="button"
              onClick={() => {
  setSubmitted(false);

  setFormType(
    formType === "vendor"
      ? null
      : "vendor"
  );
}}
              className={`px-6 py-4 rounded-2xl border transition ${
  formType === "vendor"
    ? "bg-cyan-400 text-black border-cyan-400"
    : "bg-white/5 border-white/10 text-white hover:border-cyan-400"
}`}
            >
              Language Vendor / Company
            </button>

          </div>

          {formType === null ? (

  <div className="text-center py-16 border border-dashed border-white/10 rounded-3xl">

    <p className="text-gray-400 text-lg">
      Please select Individual Linguist or Language Vendor / Company to continue.
    </p>

  </div>

) : submitted ? (

            <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-3xl p-10 text-center">

              <CheckCircle
                size={50}
                className="text-cyan-400 mx-auto mb-5"
              />

              <h3 className="text-2xl font-semibold mb-3">
                Registration Submitted
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Thank you for registering with PolyVerb AI.
              </p>

            </div>

          ) : (

            <form
              onSubmit={handleSubmit}
              className="space-y-10"
            >

              {/* BASIC INFO */}
              <div>

<div className="w-full h-px bg-white/10 mb-8" />

                <h3 className="text-xl font-semibold mb-6">
                  Basic Information
                </h3>

                <div className="grid md:grid-cols-2 gap-6">

                  {formType === "individual" ? (
                    <>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        className="bg-white/5 border border-white/10 rounded-xl px-5 py-4"
                      />

                      <input
                        type="email"
                        name="email"
                        placeholder="Business Email"
                        required
                        className="bg-white/5 border border-white/10 rounded-xl px-5 py-4"
                      />

                      <input
  type="number"
  name="experience"
  placeholder="Years of Experience"
  min="0"
  onInput={(e) => {
    e.currentTarget.value =
      e.currentTarget.value.replace(/[^0-9]/g, "");
  }}
  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4"
  />

                      <select
                        name="availability"
                        className="bg-[#0B0F1A] border border-white/10 rounded-xl px-5 py-4 text-gray-300"
                      >
                        <option value="">
                          Availability
                        </option>

                        {availabilityOptions.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </>
                  ) : (
                    <>
                      <input
                        type="text"
                        name="name"
                        placeholder="Business Name"
                        required
                        className="bg-white/5 border border-white/10 rounded-xl px-5 py-4"
                      />

                      <input
                        type="email"
                        name="email"
                        placeholder="Business Email"
                        required
                        className="bg-white/5 border border-white/10 rounded-xl px-5 py-4"
                      />

                      <select
                        name="availability"
                        className="bg-[#0B0F1A] border border-white/10 rounded-xl px-5 py-4 text-gray-300"
                      >
                        <option value="">
                          Availability
                        </option>

                        {availabilityOptions.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </>
                  )}

                  <input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  required
  maxLength={10}
  pattern="[0-9]{10}"
  inputMode="numeric"
  title="Phone number must be exactly 10 digits"
  onInput={(e) => {
    e.currentTarget.value =
      e.currentTarget.value
        .replace(/[^0-9]/g, "")
        .slice(0, 10);
  }}
  onInvalid={(e) => {
    e.currentTarget.setCustomValidity(
      "Please enter a valid 10-digit phone number"
    );
  }}
  onChange={(e) => {
    e.currentTarget.setCustomValidity("");
  }}
  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4"
/>

                  <input
                    type="text"
                    name="location"
                    placeholder="Country / Location"
                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4"
                  />

                  {formType === "vendor" && (
                    <>
                      <input
  type="number"
  name="establishment"
  placeholder="Year of Establishment"
  min="0"
  onInput={(e) => {
    e.currentTarget.value =
      e.currentTarget.value.replace(/[^0-9]/g, "");
  }}
  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4"
/>

                      <input
                        type="text"
                        name="website"
                        placeholder="Company Website"
                        className="bg-white/5 border border-white/10 rounded-xl px-5 py-4"
                      />
                    </>
                  )}

                </div>

              </div>

              {/* COMPANY DOCS */}
              {formType === "vendor" && (

                <div>

<div className="w-full h-px bg-white/10 mb-8" />

                  <h3 className="text-xl font-semibold mb-6">
                    Company Documents
                  </h3>

                  <div className="grid md:grid-cols-3 gap-6">

                    {[
                      {
                        label:
                          "Company Registration Certificate",
                        name:
                          "companyRegistration",
                      },
                      {
                        label:
                          "GST Registration Certificate",
                        name:
                          "gstCertificate",
                      },
                      {
                        label:
                          "MSME Registration Certificate",
                        name:
                          "msmeCertificate",
                      },
                      
                    ].map((item, i) => (

                      <label
                        key={i}
                        className="relative flex flex-col items-center justify-center border border-dashed border-white/20 rounded-3xl p-8 cursor-pointer hover:border-cyan-400 transition"
                      >
                        <Upload
                          className="text-cyan-400 mb-4"
                          size={36}
                        />

                        <p className="text-center text-gray-300">
                          {item.label}
                        </p>

                        <p className="text-[11px] text-gray-500 mt-2 text-center">
  PDF, DOC, DOCX supported
</p>



                        <input
  type="file"
  name={item.name}
  accept=".pdf,.doc,.docx"
  className="hidden"
  onChange={(e) => {

    const file =
      e.target.files?.[0];

    const status =
      document.getElementById(
        `${item.name}-status`
      );

    if (!file || !status) return;

    const allowedExtensions =
      ["pdf", "doc", "docx"];

    const extension =
      file.name
        .split(".")
        .pop()
        ?.toLowerCase();

    // WRONG DOCUMENT TYPE
    if (
      !extension ||
      !allowedExtensions.includes(extension)
    ) {

      status.innerHTML = `
        <div class="mt-3 text-red-400 text-[11px] text-center font-medium">
          Document type is wrong
        </div>
      `;

      e.currentTarget.value = "";

      return;
    }

    // SUCCESS TICK MARK
    status.innerHTML = `
  <div class="mt-3 flex flex-col items-center justify-center gap-2">

    <p class="text-[11px] text-cyan-400 text-center break-all">
      ${file.name}
    </p>

    <div class="flex items-center gap-2 text-cyan-400 text-[11px] font-medium">
      <div class="w-5 h-5 rounded-full bg-cyan-400 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      File uploaded
    </div>

  </div>
`;

  }}
/>

<div
  id={`${item.name}-status`}
></div>


                      </label>

                    ))}

                  </div>

                </div>

              )}

              {/* SERVICES / DOMAINS / TOOLS / PUBLISHING */}
<div>

<div className="w-full h-px bg-white/10 mb-8" />

  <h3 className="text-xl font-semibold mb-6">
    Professional Expertise
  </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 items-stretch">

                  {[
                    "Services",
                    "Domains",
                    "Tools",
                    "Publishing",
                  ].map((item) => (

                    <button
                      key={item}
                      type="button"
                      onClick={() => {

  if (activeSection === item) {
    setActiveSection(null);
    setShowSetWarning(false);
    return;
  }

  if (
    activeSection !== null &&
    activeSection !== item
  ) {
    setShowSetWarning(true);
    return;
  }

  setShowSetWarning(false);

  setActiveLanguage(null);

  setActiveSection(item);

}}
                      className={`px-3 md:px-4 py-3 rounded-2xl border transition text-xs sm:text-sm text-center leading-tight flex items-center justify-center min-h-[58px] ${
                        activeSection === item
                          ? "bg-cyan-400 text-black border-cyan-400"
                          : "bg-white/5 border-white/10 text-white hover:border-cyan-400"
                      }`}
                    >

  <div className="flex items-center justify-between w-full gap-2">

  <span>
    {item === "Services"
      ? "Services & Expertise"
      : item === "Domains"
      ? "Domain Expertise"
      : item === "Tools"
      ? "CAT Tools & Platforms"
      : "Publishing"}
  </span>

  <span className="shrink-0">
  {activeSection === item ? (
    <ChevronUp size={16} />
  ) : (
    <ChevronDown size={16} />
  )}
</span>

</div>

</button>

                  ))}

                </div>

                {/* SERVICES */}
                {activeSection === "Services" && (
                  <SelectorGroup
                    items={expertiseAreas}
                    selected={selectedServices}
                    setSelected={setSelectedServices}
                    onClose={() =>
                      setActiveSection(null)
                    }
                  />
                )}

                {/* DOMAINS */}
                {activeSection === "Domains" && (
                  <SelectorGroup
                    items={domains}
                    selected={selectedDomains}
                    setSelected={setSelectedDomains}
                    onClose={() =>
                      setActiveSection(null)
                    }
                  />
                )}

                {/* TOOLS */}
                {activeSection === "Tools" && (
                  <SelectorGroup
                    items={tools}
                    selected={selectedTools}
                    setSelected={setSelectedTools}
                    onClose={() =>
                      setActiveSection(null)
                    }
                  />
                )}

                {/* PUBLISHING */}
                {activeSection === "Publishing" && (
                  <SelectorGroup
                    items={dtpTools}
                    selected={selectedDtpTools}
                    setSelected={setSelectedDtpTools}
                    onClose={() =>
                      setActiveSection(null)
                    }
                  />
                )}

              </div>
    
    {/* LANGUAGE EXPERTISE */}
<div>

  <div className="w-full h-px bg-white/10 mb-8" />

  <h3 className="text-xl font-semibold mb-6">
    Language Expertise
  </h3>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 items-stretch">

    {[
      "Indian",
      "Asian",
      "European",
      "Middle East",
    ].map((item) => (

      <button
        key={item}
        type="button"
        onClick={() => {

  if (activeLanguage === item) {
    setActiveLanguage(null);
    setShowLanguageSetWarning(false);
    return;
  }

  if (
    activeLanguage !== null &&
    activeLanguage !== item
  ) {
    setShowLanguageSetWarning(true);
    return;
  }

  setShowLanguageSetWarning(false);

  setActiveLanguage(item);

}}
        className={`px-3 md:px-4 py-3 rounded-2xl border transition text-xs sm:text-sm text-center leading-tight flex items-center justify-center min-h-[58px] ${
          activeLanguage === item
            ? "bg-cyan-400 text-black border-cyan-400"
            : "bg-white/5 border-white/10 text-white hover:border-cyan-400"
        }`}
      >

        <div className="flex items-center justify-between w-full gap-2">

          <span>
            {item} Languages
          </span>

          <span className="shrink-0">
            {activeLanguage === item ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </span>

        </div>

      </button>

    ))}

  </div>

  {activeLanguage === "Indian" && (
    <SelectorGroup
      items={indianLanguages}
      selected={selectedIndianLanguages}
      setSelected={setSelectedIndianLanguages}
      onClose={() =>
        setActiveLanguage(null)
      }
    />
  )}

  {activeLanguage === "Asian" && (
    <SelectorGroup
      items={asianLanguages}
      selected={selectedAsianLanguages}
      setSelected={setSelectedAsianLanguages}
      onClose={() =>
        setActiveLanguage(null)
      }
    />
  )}

  {activeLanguage === "European" && (
    <SelectorGroup
      items={europeanLanguages}
      selected={selectedEuropeanLanguages}
      setSelected={setSelectedEuropeanLanguages}
      onClose={() =>
        setActiveLanguage(null)
      }
    />
  )}

  {activeLanguage === "Middle East" && (
    <SelectorGroup
      items={middleEastAfricaLanguages}
      selected={selectedMiddleEastLanguages}
      setSelected={setSelectedMiddleEastLanguages}
      onClose={() =>
        setActiveLanguage(null)
      }
    />
  )}

</div>

              {/* FILE */}
              <div>

<div className="w-full h-px bg-white/10 mb-8" />

                <h3 className="text-xl font-semibold mb-6">
                  {formType === "individual"
                    ? "Resume / Portfolio"
                    : "Company Profile"}
                </h3>

                <label className="flex flex-col items-center justify-center border border-dashed border-white/20 rounded-3xl p-10 cursor-pointer hover:border-cyan-400 transition">

                  <Upload
                    className="text-cyan-400 mb-4"
                    size={40}
                  />

                  <p className="text-gray-300 font-medium">
                    Upload File
                  </p>

                  <p className="text-sm text-gray-500 mt-2">
                    PDF, DOC, DOCX supported
                  </p>

                  <input
  type="file"
  name={
  formType === "individual"
    ? "resume"
    : "companyProfile"
}
  accept=".pdf,.doc,.docx"
  className="hidden"
  onChange={(e) => {

    const file =
      e.target.files?.[0];

    const status =
      document.getElementById(
        "resume-upload-status"
      );

    if (!file || !status) return;

    status.innerHTML = `
      <div class="flex items-center justify-center gap-2 mt-4 text-yellow-400 text-sm font-medium">
        <div class="w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        Checking file...
      </div>
    `;

    const allowedExtensions =
      ["pdf", "doc", "docx"];

    const extension =
      file.name
        .split(".")
        .pop()
        ?.toLowerCase();

    setTimeout(() => {

      if (
        !extension ||
        !allowedExtensions.includes(extension)
      ) {

        status.innerHTML = `
          <div class="flex items-center justify-center gap-2 mt-4 text-red-400 text-sm font-medium text-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Uploaded file is not a PDF, DOC, or DOCX file
          </div>
        `;

        e.currentTarget.value = "";

        return;
      }

      status.innerHTML = `
        <div class="flex items-center justify-center gap-2 mt-4 text-cyan-400 text-sm font-medium text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          ${file.name} uploaded successfully
        </div>
      `;

    }, 1200);

  }}
/>

<div id="resume-upload-status"></div>

                </label>

              </div>

              {/* NOTES */}
              <div>

                <h3 className="text-xl font-semibold mb-6">
                  Additional Information
                </h3>

                <textarea
                  rows={5}
                  name="message"
                  placeholder="Share additional details about your expertise, certifications, industry experience, or portfolio links."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 resize-none"
                />

              </div>

              {/* SUBMIT */}
              <div className="text-center pt-4">

                <button
                  type="submit"
                  className="bg-cyan-400 text-black px-10 py-4 rounded-xl font-medium hover:bg-cyan-300 transition"
                >
                  {loading
                    ? "Submitting..."
                    : formType === "individual"
                    ? "Submit Registration"
                    : "Submit Vendor Application"}
                </button>

              </div>

            </form>

          )}

        </div>

      </section>

    </main>
  );
}