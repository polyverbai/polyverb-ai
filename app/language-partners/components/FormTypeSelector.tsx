type Props = {
  value: "individual" | "vendor";
  onChange: (value: "individual" | "vendor") => void;
};

export default function FormTypeSelector({
  value,
  onChange,
}: Props) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
      <button
        type="button"
        onClick={() => onChange("individual")}
        className={`px-6 py-4 rounded-2xl border transition ${
          value === "individual"
            ? "bg-cyan-400 text-black border-cyan-400"
            : "bg-white/5 border-white/10 text-white hover:border-cyan-400"
        }`}
      >
        Individual Linguist
      </button>

      <button
        type="button"
        onClick={() => onChange("vendor")}
        className={`px-6 py-4 rounded-2xl border transition ${
          value === "vendor"
            ? "bg-cyan-400 text-black border-cyan-400"
            : "bg-white/5 border-white/10 text-white hover:border-cyan-400"
        }`}
      >
        Language Vendor / Company
      </button>
    </div>
  );
}