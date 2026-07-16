import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Large Animal Medicines",
  description:
    "Injectable antiparasitics, antibiotics and metabolic support formulations for cattle, buffalo, sheep, goats and horses.",
};

export default function Page() {
  return (
    <CategoryPage
      category="large-animals"
      blurb="Injectable and oral formulations for cattle, buffalo, sheep, goats and horses — antiparasitics, antibiotics, anti-inflammatories and metabolic support."
    />
  );
}
