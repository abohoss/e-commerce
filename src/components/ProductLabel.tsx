import type { Product } from "@/lib/products";
import { CategoryBadge } from "./CategoryBadge";
import { DosageIcon } from "./DosageIcon";

function Field({
  label,
  value,
  emphasis = false,
}: {
  label: string;
  value?: string;
  emphasis?: boolean;
}) {
  if (!value) return null;
  return (
    <div className="border-t border-border py-5 first:border-t-0 first:pt-0">
      <h3 className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] text-teal-700">
        {label}
      </h3>
      <div
        className={`mt-2 space-y-1.5 text-[0.95rem] leading-relaxed ${
          emphasis ? "font-mono text-ink" : "text-ink-soft"
        }`}
      >
        {value.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export function ProductLabel({ product }: { product: Product }) {
  const accentBg = product.category === "large-animals" ? "bg-teal-700" : "bg-amber-500";

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm shadow-ink/5">
      <div className={`flex items-center gap-3 px-6 py-3 sm:px-8 ${accentBg}`}>
        <DosageIcon form={product.form} className="h-4 w-4 text-white/90" />
        <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-white/90">
          {product.subtitle}
        </span>
        {product.regNo && (
          <span className="ml-auto font-mono text-xs text-white/80">{product.regNo}</span>
        )}
      </div>

      <div className="px-6 py-7 sm:px-8 sm:py-9">
        <CategoryBadge category={product.category} />
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {product.name}
        </h1>
        <p className="mt-2 font-mono text-sm text-ink-soft">{product.activeIngredient}</p>

        <div className="mt-8">
          <Field label="Composition" value={product.composition} emphasis />
          <Field label="Properties" value={product.properties} />
          <Field label="Indications" value={product.indications} />
          <Field label="Dosage & Administration" value={product.dosage} />
          <Field label="Warnings & Precautions" value={product.warnings} />
          <Field label="Contraindications" value={product.contraindications} />
          <Field label="Side Effects" value={product.sideEffects} />
          <Field label="Withdrawal Time" value={product.withdrawal} emphasis />
          <Field label="Storage" value={product.storage} />
          <Field label="Package" value={product.packaging} />
        </div>

        <div className="mt-6 rounded-lg bg-paper px-4 py-3 text-xs text-ink-soft">
          Manufactured by <span className="font-medium text-ink">{product.manufacturer}</span>.
          For veterinary use only.
        </div>
      </div>
    </div>
  );
}
