import Link from "next/link";
import { Container } from "./Container";
import { ProductLabel } from "./ProductLabel";
import { ProductCard } from "./ProductCard";
import { categoryMeta, getProductsByCategory, type Product } from "@/lib/products";

export function ProductDetail({ product }: { product: Product }) {
  const related = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);
  const meta = categoryMeta[product.category];

  return (
    <div className="bg-paper py-10 sm:py-14">
      <Container>
        <nav className="flex flex-wrap items-center gap-1.5 text-sm text-ink-soft">
          <Link href="/products" className="hover:text-ink">
            Products
          </Link>
          <span>/</span>
          <Link href={`/products/${product.category}`} className="hover:text-ink">
            {meta.label}
          </Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="mt-6 max-w-3xl">
          <ProductLabel product={product} />
        </div>

        {related.length > 0 && (
          <div className="mt-16 max-w-3xl">
            <h2 className="font-display text-xl font-semibold text-ink">
              Other {meta.label.toLowerCase()} formulations
            </h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
