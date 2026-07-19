import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ProductCard } from "@/components/ProductCard";
import { IconArrowRight } from "@/components/icons";
import { categoryMeta, getProductsByCategory } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Drugest's full catalog of registered veterinary formulations for large animals and poultry.",
};

export default function ProductsPage() {
  const largeAnimals = getProductsByCategory("large-animals");
  const poultry = getProductsByCategory("poultry");

  return (
    <>
      <PageHeader
        eyebrow="Catalog"
        title="Every registered formulation, in one place."
        description="19 formulations across two categories — each page carries full composition, dosage, withdrawal-time and storage detail."
      />

      <Container className="py-14 sm:py-16">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-semibold text-ink">
            {categoryMeta["large-animals"].label}
          </h2>
          <Link
            href="/products/large-animals"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-900"
          >
            Category page
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {largeAnimals.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-16 flex items-center justify-between">
          <h2 className="font-display text-xl font-semibold text-ink">
            {categoryMeta.poultry.label}
          </h2>
          <Link
            href="/products/poultry"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 hover:text-amber-900"
          >
            Category page
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {poultry.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </>
  );
}
