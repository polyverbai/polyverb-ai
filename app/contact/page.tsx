"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

export default function ContactPage() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    const { name, value } = e.target;

    if (name === "phone") {

      const numericValue = value
        .replace(/\D/g, "")
        .slice(0, 10);

      setForm({
        ...form,
        [name]: numericValue,
      });

      return;
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const isFormValid =
    form.name.trim() !== "" &&
    form.email.trim() !== "" &&
    form.phone.trim().length === 10 &&
    form.company.trim() !== "" &&
    form.message.trim() !== "";

  const handleSubmit = async (e: React.FormEvent) => {

  e.preventDefault();

  if (!isFormValid) return;

  setLoading(true);

  try {

    const response = await fetch("/api/contact", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (data.success) {

      setSubmitted(true);

      setTimeout(() => {

        setSubmitted(false);

        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });

      }, 4000);

    } else {

      console.error(data.error);

    }

  } catch (error) {

    console.error(error);

  } finally {

    setLoading(false);

  }
};

  return (
    <main className="bg-gradient-to-br from-[#0B0F1A] via-[#07111F] to-[#05070D] text-white min-h-screen px-6 md:px-16 py-10">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT SIDE ================= */}
        <div className="relative">

          {/* Mild Gradient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.08),transparent_40%)] pointer-events-none"></div>

          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Let’s build your{" "}
            <span className="text-[#22D3EE]">
              global content strategy
            </span>
          </h1>

          <p className="text-gray-400 mb-8 leading-relaxed">
            Whether you're expanding into new markets or scaling multilingual
            content, PolyVerb AI helps you move faster with intelligent
            localization.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-6">

            {[
              "AI + Human hybrid workflows",
              "150+ languages supported",
              "Enterprise-grade quality",
              "Continuous localization",
            ].map((item, i) => (

              <div
                key={i}
                className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10"
              >

                <span className="text-[#22D3EE] mt-0.5">
                  ✔
                </span>

                <span className="text-sm text-gray-300">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* ================= RIGHT SIDE (FORM) ================= */}
        <div className="relative">

          <div className="bg-[#0B0F1A] border border-white/10 rounded-2xl p-8 shadow-[0_0_40px_rgba(34,211,238,0.08)] h-[540px] flex flex-col">

            {!submitted && (
  <h2 className="text-xl font-semibold mb-6 text-center text-[#22D3EE]">
    Get in touch
  </h2>
)}

            {submitted ? (

              <div className="flex flex-col items-center justify-center text-center h-full flex-1">

                <CheckCircle
                  size={70}
                  className="text-[#22D3EE] mb-6"
                />

                <h3 className="text-2xl font-semibold mb-4">
                  Form Submitted Successfully
                </h3>

                <p className="text-gray-400 leading-relaxed max-w-md">
                  One of our representatives will get in touch with you
                  as soon as possible.
                </p>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-all duration-300 ${
                    form.name.trim() !== ""
                      ? "bg-[#0E1A24] border border-[#22D3EE]/40"
                      : "bg-[#05070D] border border-white/10"
                  } focus:border-[#22D3EE]`}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Work Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-all duration-300 ${
                    form.email.trim() !== ""
                      ? "bg-[#0E1A24] border border-[#22D3EE]/40"
                      : "bg-[#05070D] border border-white/10"
                  } focus:border-[#22D3EE]`}
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Contact Number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  maxLength={10}
                  className={`w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-all duration-300 ${
                    form.phone.length === 10
                      ? "bg-[#0E1A24] border border-[#22D3EE]/40"
                      : "bg-[#05070D] border border-white/10"
                  } focus:border-[#22D3EE]`}
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-all duration-300 ${
                    form.company.trim() !== ""
                      ? "bg-[#0E1A24] border border-[#22D3EE]/40"
                      : "bg-[#05070D] border border-white/10"
                  } focus:border-[#22D3EE]`}
                />

                <textarea
                  name="message"
                  placeholder="Tell us about your requirements"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-all duration-300 ${
                    form.message.trim() !== ""
                      ? "bg-[#0E1A24] border border-[#22D3EE]/40"
                      : "bg-[#05070D] border border-white/10"
                  } focus:border-[#22D3EE]`}
                />

                <div className="flex justify-center">

                  <button
                    type="submit"
                    disabled={!isFormValid || loading}
                    className={`w-auto px-8 py-2 rounded-lg font-medium text-sm transition flex items-center gap-2 ${
                      isFormValid
                        ? "bg-[#22D3EE] text-black hover:bg-cyan-300"
                        : "bg-white/10 text-gray-500 cursor-not-allowed"
                    }`}
                  >

                    {loading ? (
                      <>
                        <Loader2
                          size={18}
                          className="animate-spin"
                        />
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}

                  </button>

                </div>

              </form>

            )}

          </div>

        </div>

      </div>
       </main>
  );
}