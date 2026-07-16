import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="Drugest Pharmaceuticals — home"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-teal-700 text-paper transition-colors group-hover:bg-teal-900">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M9 3h6M10 3v4.8L6 13.5A4 4 0 0 0 5.2 16v2A2.5 2.5 0 0 0 7.7 20.5h8.6A2.5 2.5 0 0 0 18.8 18v-2a4 4 0 0 0-.8-2.5L14 7.8V3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M7.3 14.5h9.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
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
