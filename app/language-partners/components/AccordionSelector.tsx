type Props = {
  title: string;
  items: string[];
  columns?: string;
  onPublishingChange?: (
    checked: boolean
  ) => void;
};

export default function AccordionSelector({
  title,
  items,
  columns = "md:grid-cols-3",
  onPublishingChange,
}: Props) {
  return (
    <details className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <summary className="cursor-pointer text-lg font-semibold text-cyan-400">
        {title}
      </summary>

      <div
        className={`grid sm:grid-cols-2 ${columns} gap-4 mt-6`}
      >
        {items.map((item, i) => (
          <label
            key={i}
            className="flex items-center gap-3 bg-black/20 border border-white/10 rounded-xl px-4 py-3 cursor-pointer"
          >
            <input
              type="checkbox"
              onChange={(e) => {
                if (
                  item === "Publishing" &&
                  onPublishingChange
                ) {
                  onPublishingChange(
                    e.target.checked
                  );
                }
              }}
            />

            <span className="text-sm text-gray-300">
              {item}
            </span>
          </label>
        ))}
      </div>
    </details>
  );
}