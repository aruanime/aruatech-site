import Link from "next/link";

import { LogoMark } from "@/components/logo";
import { NAV, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-sand bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark className="size-9" />
            <p className="font-heading text-lg tracking-[0.12em] text-navy">
              {SITE.legalName}
            </p>
          </div>
          <p className="mt-3 max-w-sm text-sm tracking-[0.18em] text-navy/65 uppercase">
            {SITE.tagline}
          </p>
          <p className="mt-4 text-sm text-navy/70">
            {SITE.owner}
            <br />
            {SITE.location}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-navy/55 uppercase">
            Explore
          </p>
          <ul className="mt-3 space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-navy/80 hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-navy/55 uppercase">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm text-navy/80">
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
              >
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={SITE.whatsapp.href}
                className="hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
                rel="noreferrer"
                target="_blank"
              >
                {SITE.whatsapp.display}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-sand">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs tracking-wide text-navy/55 sm:px-8">
          © {new Date().getFullYear()} {SITE.legalName}. {SITE.location}.
        </p>
      </div>
    </footer>
  );
}
