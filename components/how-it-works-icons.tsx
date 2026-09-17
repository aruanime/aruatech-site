import type { ReactNode } from "react";

function GoldIcon({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto size-12"
      aria-hidden="true"
    >
      <title>{label}</title>
      {children}
    </svg>
  );
}

const stroke = {
  stroke: "#C5A572",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PlanIcon() {
  return (
    <GoldIcon label="Plan">
      <rect x="20" y="14" width="24" height="36" rx="2.5" {...stroke} />
      <rect x="24" y="10" width="16" height="7" rx="1.5" {...stroke} />
      <path d="M26 28h12M26 34h12M26 40h8" {...stroke} />
    </GoldIcon>
  );
}

export function BuildIcon() {
  return (
    <GoldIcon label="Build">
      <rect x="16" y="14" width="32" height="38" rx="2" {...stroke} />
      <path d="M24 42V30h6v12M34 42V24h6v18" {...stroke} />
      <path d="M22 42h20" {...stroke} />
    </GoldIcon>
  );
}

export function PublishIcon() {
  return (
    <GoldIcon label="Publish">
      <circle cx="27" cy="32" r="11" {...stroke} />
      <circle cx="37" cy="32" r="11" {...stroke} />
    </GoldIcon>
  );
}

export function ReviewIcon() {
  return (
    <GoldIcon label="Review">
      <path d="M14 32l36-14-10 32-8-10-18-8z" {...stroke} />
      <path d="M22 34l8 8 6-20" {...stroke} />
    </GoldIcon>
  );
}

export function CaseStudyArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="1.5" y="1.5" width="87" height="107" stroke="#C5A572" strokeWidth="1.5" />
      <rect x="91.5" y="1.5" width="87" height="107" stroke="#C5A572" strokeWidth="1.5" />
      <path d="M91.5 108.5L178.5 1.5" stroke="#C5A572" strokeWidth="1.5" />
    </svg>
  );
}
