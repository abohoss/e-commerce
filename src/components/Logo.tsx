import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "" }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center rounded-md bg-white px-2 py-1.5 shadow-sm ${className}`}
      aria-label="Drugest Pharmaceuticals — home"
    >
      <Image
        src="/favicon.ico"
        alt="Drugest Pharmaceuticals"
        width={2854}
        height={1232}
        priority
        className="h-10 w-auto sm:h-12"
      />
    </Link>
  );
}