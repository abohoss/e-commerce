import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/ProductDetail";
import { getProductBySlug, getProductsByCategory } from "@/lib/products";

export function generateStaticParams() {
  return getProductsByCategory("large-animals").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug("large-animals", slug);
  if (!product) return {};
  return {
    title: product.name,
    description: `${product.name} — ${product.activeIngredient}. ${product.subtitle}.`,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug("large-animals", slug);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
