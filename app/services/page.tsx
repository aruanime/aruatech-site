import type { Metadata } from "next";
import Link from "next/link";

import { RETAINER, SITE } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description: `${RETAINER.name} from ${SITE.legalName} — strategy, brand, website care, content, and operations in a monthly cadence.`,
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-navy/55 uppercase">
            {SITE.legalName}
          </p>
          <h1 className="mt-3 font-heading text-4xl font-medium text-navy sm:text-5xl">
            {RETAINER.name}
          </h1>
          <div className="mx-auto mt-5 h-px w-20 bg-gold" aria-hidden="true" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-navy/75">
            A monthly partnership for brands that need strategy, presence, and
            operations working together. Pricing is shared in conversation — not
            on this page.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8" aria-labelledby="included">
        <h2 id="included" className="font-heading text-2xl text-navy sm:text-3xl">
          Included each month
        </h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {RETAINER.included.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-sand bg-cream/60 p-6"
            >
              <h3 className="font-heading text-xl text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-cream" aria-labelledby="cadence">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 id="cadence" className="font-heading text-2xl text-navy sm:text-3xl">
            Cadence
          </h2>
          <p className="mt-3 text-navy/70">
            Week 1 plan → Weeks 2–3 build and publish → Week 4 review.
          </p>
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {RETAINER.cadence.map((item) => (
              <li key={item.week} className="rounded-xl bg-white p-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-gold-dark uppercase">
                  {item.week}
                </p>
                <h3 className="mt-2 font-heading text-xl text-navy">{item.label}</h3>
                <p className="mt-2 text-sm text-navy/70">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8" aria-labelledby="out-of-scope">
        <h2 id="out-of-scope" className="font-heading text-2xl text-navy sm:text-3xl">
          Out of scope
        </h2>
        <p className="mt-3 max-w-2xl text-navy/70">
          These stay outside the retainer so the monthly work stays focused.
          Full websites are scoped as a separate project.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {RETAINER.outOfScope.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 border-b border-sand py-3 text-navy"
            >
              <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-gold" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-12 rounded-2xl bg-cream px-8 py-10 text-center">
          <p className="font-heading text-2xl text-navy">
            Tell us about the month ahead.
          </p>
          <p className="mt-3 text-navy/70">
            If the Growth Retainer looks like a fit, start a conversation. We
            will confirm scope before any work begins.
          </p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-6 h-11 rounded-full bg-navy px-8 text-white hover:bg-navy-deep"
            )}
          >
            Inquire about the retainer
          </Link>
        </div>
      </section>
    </div>
  );
}
