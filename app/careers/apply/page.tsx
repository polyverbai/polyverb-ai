"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

function ApplyForm() {

  const params = useSearchParams();

  const role =
    params.get("role") || "Selected Position";

  const [submitted, setSubmitted] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [errors, setErrors] =
    useState<Record<string, string>>({});

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    experience: "",
    message: "",
    resume: null as File | null,
  });

  const allowedTypes = [
    "application/pdf",

    "application/msword",

    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  const maxFileSize =
    5 * 1024 * 1024;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {

    const target =
      e.target as HTMLInputElement;

    const { name, value } = target;

    if (name === "resume") {

      const file =
        target.files?.[0] || null;

      if (!file) {

        setForm((prev) => ({
          ...prev,
          resume: null,
        }));

        return;
      }

      if (
        !allowedTypes.includes(
          file.type
        )
      ) {

        setErrors((prev) => ({
          ...prev,
          resume:
            "Only PDF, DOC, DOCX allowed",
        }));

        return;
      }

      if (file.size > maxFileSize) {

        setErrors((prev) => ({
          ...prev,
          resume:
            "File must be below 5MB",
        }));

        return;
      }

      setForm((prev) => ({
        ...prev,
        resume: file,
      }));

    } else if (name === "phone") {

      const onlyNumbers = value
        .replace(/\D/g, "")
        .slice(0, 10);

      setForm((prev) => ({
        ...prev,
        phone: onlyNumbers,
      }));

    } else {

      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {

    const newErrors:
      Record<string, string> = {};

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim())
      newErrors.name = "Required";

    if (!form.email.trim()) {

      newErrors.email = "Required";

    } else if (
      !emailRegex.test(form.email)
    ) {

      newErrors.email =
        "Invalid Email Address";
    }

    if (!form.phone.trim()) {

      newErrors.phone = "Required";

    } else if (
      form.phone.length !== 10
    ) {

      newErrors.phone =
        "Enter 10 digit number";
    }

    if (!form.company.trim())
      newErrors.company = "Required";

    if (!form.experience.trim())
      newErrors.experience = "Required";

    if (!form.message.trim())
      newErrors.message = "Required";

    if (!form.resume)
      newErrors.resume =
        "Upload Resume";

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {

      const formData =
        new FormData();

      formData.append(
        "role",
        role
      );

      formData.append(
        "name",
        form.name
      );

      formData.append(
        "email",
        form.email
      );

      formData.append(
        "phone",
        form.phone
      );

      formData.append(
        "company",
        form.company
      );

      formData.append(
        "experience",
        form.experience
      );

      formData.append(
        "message",
        form.message
      );

      if (form.resume) {

        formData.append(
          "resume",
          form.resume
        );
      }

      const response =
        await fetch(
          "/api/careers",
          {
            method: "POST",
            body: formData,
          }
        );

      const data =
        await response.json();

      if (data.success) {

        setSubmitted(true);

      } else {

        alert(
          "Something went wrong. Please try again."
        );
      }

    } catch (error) {

      console.error(
        "CAREERS FORM ERROR:",
        error
      );

      alert(
        "Unable to submit application."
      );

    } finally {

      setLoading(false);
    }
  };

  const inputClass = (
    field: string
  ) =>
    `w-full bg-[#05070D] rounded-xl px-4 py-3 border outline-none ${
      errors[field]
        ? "border-red-500"
        : "border-white/10"
    }`;

  const isFormValid =
    form.name.trim() &&
    form.email.trim() &&
    form.phone.length === 10 &&
    form.company.trim() &&
    form.experience.trim() &&
    form.message.trim() &&
    form.resume;

  return (
    <main className="min-h-screen text-white px-6 md:px-16 pt-5 pb-20">

      <div className="max-w-2xl mx-auto bg-[#0B0F1A] rounded-3xl border border-white/10 p-8 md:p-8">

        {submitted ? (

          <div className="text-center py-12">

            <CheckCircle
              size={70}
              className="text-cyan-400 mx-auto mb-5"
            />

            <h2 className="text-2xl font-semibold mb-3">
              Application Submitted Successfully
            </h2>

            <Link
              href="/careers/openings#current-opportunities"
              className="inline-block mt-4 bg-cyan-400 text-black px-6 py-3 rounded-xl font-medium hover:bg-cyan-300 transition"
            >
              Back to Careers
            </Link>

          </div>

        ) : (

          <>

            <p className="text-cyan-400 uppercase text-center tracking-widest mb-1">
              Careers
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold text-center mb-3">
              Apply for {role}
            </h1>

            <p className="text-gray-400 text-center mb-2">
              Complete the form below to submit your application.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <div className="grid md:grid-cols-2 gap-3 pt-2">

                <div>
                  <input
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass("name")}
                  />

                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => {

                      handleChange(e);

                      const emailRegex =
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                      if (
                        e.target.value &&
                        !emailRegex.test(e.target.value)
                      ) {

                        setErrors((prev) => ({
                          ...prev,
                          email:
                            "Invalid Email Address",
                        }));

                      } else {

                        setErrors((prev) => ({
                          ...prev,
                          email: "",
                        }));
                      }
                    }}
                    className={inputClass("email")}
                  />

                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    name="phone"
                    placeholder="Contact Number"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass("phone")}
                  />

                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    name="company"
                    placeholder="Current Company"
                    value={form.company}
                    onChange={handleChange}
                    className={inputClass("company")}
                  />

                  {errors.company && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.company}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    name="experience"
                    type="text"
                    inputMode="numeric"
                    placeholder="Years of Experience"
                    value={form.experience}
                    onChange={(e) => {

                      const onlyNumbers =
                        e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 2);

                      setForm((prev) => ({
                        ...prev,
                        experience:
                          onlyNumbers,
                      }));

                      setErrors((prev) => ({
                        ...prev,
                        experience: "",
                      }));
                    }}
                    className={inputClass("experience")}
                  />

                  {errors.experience && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.experience}
                    </p>
                  )}
                </div>

                <div>

                  <label className="block w-full cursor-pointer bg-[#05070D] rounded-xl px-2 py-3 border border-white/10 text-[9px] md:text-[11px] text-gray-400 whitespace-nowrap">
                    {form.resume
                      ? form.resume.name
                      : "Upload Resume (PDF/DOC/DOCX • Max 5MB)"}

                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleChange}
                      className="hidden"
                    />

                  </label>

                  {errors.resume && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.resume}
                    </p>
                  )}

                </div>

              </div>

              <div>

                <textarea
                  rows={5}
                  name="message"
                  placeholder="Why are you a fit for this role?"
                  value={form.message}
                  onChange={handleChange}
                  className={inputClass("message")}
                />

                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.message}
                  </p>
                )}

              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">

                <button
                  type="submit"
                  disabled={
                    !isFormValid ||
                    loading
                  }
                  className={`px-6 py-3 rounded-xl font-medium transition flex items-center justify-center gap-2 ${
                    isFormValid
                      ? "bg-cyan-400 text-black hover:bg-cyan-300"
                      : "bg-gray-600 text-gray-300 cursor-not-allowed"
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
                    "Submit Application"
                  )}

                </button>

                <Link
                  href="/careers/openings"
                  className="px-6 py-3 rounded-xl border border-white/10 text-white hover:border-cyan-400 hover:text-cyan-400 transition text-center"
                >
                  Back to Careers
                </Link>

              </div>

            </form>

          </>

        )}

      </div>

    </main>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="text-white p-10 text-center">
          Loading...
        </div>
      }
    >
      <ApplyForm />
    </Suspense>
  );
}