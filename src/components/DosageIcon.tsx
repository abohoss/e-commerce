import type { DosageForm } from "@/lib/products";
import { IconBottle, IconSachet, IconVial } from "./icons";

const icons: Record<DosageForm, typeof IconVial> = {
  injection: IconVial,
  oral: IconBottle,
  powder: IconSachet,
};

export function DosageIcon({
  form,
  className = "",
}: {
  form: DosageForm;
  className?: string;
}) {
  const Icon = icons[form];
  return <Icon className={className} />;
}
