import Link from "next/link";
import type { Product } from "@/lib/products";
import { DosageIcon } from "./DosageIcon";
import { IconArrowRight } from "./icons";

const accent: Record<Product["category"], string> = {
  "large-animals": "group-hover:border-teal-500 group-hover:bg-teal-100",
  poultry: "group-hover:border-amber-500 group-hover:bg-amber-100",
};

const iconAccent: Record<Product["category"], string> = {
  "large-animals": "bg-teal-100 text-teal-700",
  poultry: "bg-amber-100 text-amber-700",
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.category}/${product.slug}`}
      className={`group flex flex-col gap-4 rounded-xl border border-border bg-surface p-5 transition-colors ${accent[product.category]}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${iconAccent[product.category]}`}>
          <DosageIcon form={product.form} className="h-5 w-5" />
        </span>
        <IconArrowRight className="mt-2 h-4 w-4 shrink-0 text-ink-soft/50 transition-transform group-hover:translate-x-1 group-hover:text-ink" />
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold text-ink">{product.name}</h3>
        <p className="mt-1 text-sm text-ink-soft">{product.subtitle}</p>
      </div>
      <p className="mt-auto font-mono text-xs uppercase tracking-wide text-ink-soft/80">
        {product.activeIngredient}
      </p>
    </Link>
  );
}
