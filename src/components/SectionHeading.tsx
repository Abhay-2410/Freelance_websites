type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-800">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-walnut sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-stone-600">
          {description}
        </p>
      )}
    </div>
  );
}
