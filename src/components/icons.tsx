import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconVial(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 2h6" />
      <path d="M10 2v5.5L6.5 12A5 5 0 0 0 6 15v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-3a5 5 0 0 0-.5-3L14 7.5V2" />
      <path d="M7 15h10" />
    </svg>
  );
}

export function IconBottle(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M10 2h4" />
      <path d="M10 2v3.2c0 .5-.2 1-.6 1.4L8 8c-.6.6-1 1.5-1 2.4V19a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8.6c0-.9-.4-1.8-1-2.4l-1.4-1.4A2 2 0 0 1 14 5.2V2" />
      <path d="M7.5 13h9" />
    </svg>
  );
}

export function IconSachet(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 8.5 7 3h10l2 5.5" />
      <path d="M5 8.5h14V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8.5Z" />
      <path d="M9 13h6" />
      <path d="M9 16.5h6" />
    </svg>
  );
}

export function IconCattle(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 9c-1 0-1.6-1-1-2 .7-1 2-1 2.6 0" />
      <path d="M20 9c1 0-1.6-1-1-2-.7-1-2-1-2.6 0" />
      <path d="M6.5 8c-.8 1.6-1 2.7-1 4.2C5.5 16.5 8.4 20 12 20s6.5-3.5 6.5-7.8c0-1.5-.2-2.6-1-4.2" />
      <path d="M8.5 8.3C9 6.5 10.3 5.5 12 5.5s3 1 3.5 2.8" />
      <circle cx="9.5" cy="12.5" r=".6" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="12.5" r=".6" fill="currentColor" stroke="none" />
      <path d="M10.5 15.2c.5.4 1 .6 1.5.6s1-.2 1.5-.6" />
    </svg>
  );
}

export function IconPoultry(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 21V13.5A4.5 4.5 0 0 1 13.5 9c1 0 1.7.2 2.3.6" />
      <path d="M13.5 9a3.2 3.2 0 0 1 3.2-3.2c.5 0 .8.4.6.9-.3.6-.4 1.1-.1 1.6" />
      <path d="M16 6.2c.9-.4 1.6-1.2 1.9-2.2-1 0-2 .3-2.7 1" />
      <path d="M9 13.5c-1.4 0-2.7.5-3.6 1.5" />
      <path d="M6 21l1-4" />
      <path d="M12 21l.6-3" />
      <circle cx="15.2" cy="8.3" r=".5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 5 6v5.5c0 4.6 3 7.9 7 9 4-1.1 7-4.4 7-9V6l-7-2.5Z" />
      <path d="M9 12l2 2 4-4.5" />
    </svg>
  );
}

export function IconFlask(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 2h6" />
      <path d="M10 2v6.5L5.6 17a2.4 2.4 0 0 0 2.1 3.5h8.6a2.4 2.4 0 0 0 2.1-3.5L14 8.5V2" />
      <path d="M8 15h8" />
    </svg>
  );
}

export function IconMapPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 10.5c0 5-8 11-8 11s-8-6-8-11a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5L15 13l4 1.5V18a2 2 0 0 1-2 2C10.5 20 4 13.5 4 6a2 2 0 0 1 1-2Z" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

export function IconFax(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 8V4h9l3 3v1" />
      <rect x="4" y="8" width="16" height="10" rx="1.5" />
      <path d="M8 13h4" />
      <path d="M8 16h8" />
      <rect x="14" y="10.5" width="3" height="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}
