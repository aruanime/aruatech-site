import Link from "next/link";

import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <path
        d="M46 12.5C28.5 12.5 14.5 24.8 14.5 36C14.5 47.2 28.5 59.5 46 59.5"
        stroke="#1A2744"
        strokeWidth="9.5"
        strokeLinecap="round"
      />
      <path
        d="M26 12.5C43.5 12.5 57.5 24.8 57.5 36C57.5 47.2 43.5 59.5 26 59.5"
        stroke="#C5A572"
        strokeWidth="9.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  href = "/",
  compact = false,
}: {
  href?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2"
      aria-label={`${SITE.legalName} home`}
    >
      <LogoMark className="size-11 sm:size-12" />
      <span className="flex flex-col justify-center leading-none">
        <span className="font-heading text-[1.35rem] font-semibold tracking-[0.12em] text-navy sm:text-[1.5rem]">
          {SITE.shortName}
        </span>
        {!compact ? (
          <span className="mt-1 text-[0.58rem] font-medium tracking-[0.22em] text-navy/70 uppercase">
            {SITE.tagline}
          </span>
        ) : null}
      </span>
    </Link>
  );
}
