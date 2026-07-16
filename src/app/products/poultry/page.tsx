import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Poultry Medicines",
  description:
    "Water-soluble antibiotics and anticoccidials for broilers, layers and turkeys, dosed through drinking water or feed.",
};

export default function Page() {
  return (
    <CategoryPage
      category="poultry"
      blurb="Water-soluble powders and oral solutions for broilers, layers and turkeys — antibiotics, anticoccidials and combination therapies dosed through drinking water or feed."
    />
  );
}
