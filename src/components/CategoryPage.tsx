import { Container } from "./Container";
import { PageHeader } from "./PageHeader";
import { ProductCard } from "./ProductCard";
import { categoryMeta, getProductsByCategory, type Category } from "@/lib/products";

export function CategoryPage({ category, blurb }: { category: Category; blurb: string }) {
  const meta = categoryMeta[category];
  const items = getProductsByCategory(category);

  return (
    <>
      <PageHeader
        eyebrow="Catalog"
        title={meta.label}
        description={blurb}
        tone={meta.color === "teal" ? "teal" : "amber"}
      />
      <Container className="py-14 sm:py-16">
        <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">
          {items.length} formulations
        </p>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </>
  );
}
