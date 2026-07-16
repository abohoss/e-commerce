import { categoryMeta, type Category } from "@/lib/products";
import { IconCattle, IconPoultry } from "./icons";

const styles: Record<Category, string> = {
  "large-animals": "bg-teal-100 text-teal-900",
  poultry: "bg-amber-100 text-amber-700",
};

const icons: Record<Category, typeof IconCattle> = {
  "large-animals": IconCattle,
  poultry: IconPoultry,
};

export function CategoryBadge({ category }: { category: Category }) {
  const Icon = icons[category];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${styles[category]}`}
    >
      <Icon className="h-3.5 w-3.5" />
      {categoryMeta[category].label}
    </span>
  );
}
