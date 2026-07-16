import { Container } from "./Container";

export function PageHeader({
  eyebrow,
  title,
  description,
  tone = "teal",
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "teal" | "amber";
  children?: React.ReactNode;
}) {
  const toneClasses = tone === "teal" ? "bg-teal-900 text-teal-100" : "bg-amber-900 text-amber-100";

  return (
    <div className={`relative overflow-hidden ${toneClasses}`}>
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
        aria-hidden="true"
      >
        <pattern id="grid" width="34" height="34" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <Container className="relative py-14 sm:py-16">
        {eyebrow && (
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-white/70">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-white/80">
            {description}
          </p>
        )}
        {children}
      </Container>
    </div>
  );
}
