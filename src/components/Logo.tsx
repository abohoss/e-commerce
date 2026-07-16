import Image from "next/image";
import Link from "next/link"; 

export function Logo({ className = "" }) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="Drugest Pharmaceuticals — home"
    >
      {/* Kept your teal background wrapper. Added overflow-hidden in case the image touches the rounded edges */}
      <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-md text-paper transition-colors bg-paper/90">
        <Image
          src="/favicon.ico"
          alt="Drugest Pharmaceuticals Logo"
          width={20}
          height={20}
          className="h-11 w-11 object-contain"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-semibold tracking-tight text-ink">
          Drugest
        </span>
        <span className="text-[0.6rem] font-medium uppercase tracking-[0.16em] text-ink-soft">
          Pharmaceuticals
        </span>
      </span>
    </Link>
  );
}