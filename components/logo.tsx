import Image from "next/image";
import Link from "next/link";

import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/logo-mark.png"
      alt=""
      width={277}
      height={277}
      unoptimized
      loading="eager"
      className={cn("block shrink-0 object-contain", className)}
      aria-hidden="true"
    />
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
      <LogoMark className="size-9 sm:size-12" />
      <span className="flex min-w-0 flex-col justify-center leading-none">
        <span className="font-heading text-[1.15rem] font-semibold tracking-[0.08em] text-navy sm:text-[1.5rem] sm:tracking-[0.12em]">
          {SITE.shortName}
        </span>
        {!compact ? (
          <span className="mt-1 text-[0.5rem] font-medium tracking-[0.1em] text-navy/70 uppercase sm:text-[0.58rem] sm:tracking-[0.22em]">
            {SITE.tagline}
          </span>
        ) : null}
      </span>
    </Link>
  );
}
