interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  align?: "left" | "center";
  invert?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  align = "center",
  invert = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`mb-10 ${alignClass}`}>
      {eyebrow && (
        <div
          className={`text-xs font-semibold uppercase tracking-widest mb-2 ${
            invert ? "text-brand-100" : "text-brand-light"
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-3xl md:text-4xl font-extrabold ${
          invert ? "text-white" : "text-ink"
        }`}
      >
        {title}
        {titleAccent && <span className="text-brand"> {titleAccent}</span>}
      </h2>
      <div
        className={`w-16 h-1 mt-3 rounded ${
          invert ? "bg-brand-200" : "bg-brand"
        } ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}
