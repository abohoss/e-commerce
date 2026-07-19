import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

const BASE_URL = "https://drugest.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/about/ar",
    "/products",
    "/products/large-animals",
    "/products/poultry",
    "/drugest-egypt",
    "/news",
    "/contact",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((product) => ({
    url: `${BASE_URL}/products/${product.category}/${product.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...productRoutes];
}
