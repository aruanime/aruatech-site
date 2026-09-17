import type { Metadata } from "next";
import Link from "next/link";

import { LogoMark } from "@/components/logo";
import { SITE } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: `${SITE.legalName} is led by ${SITE.owner} in ${SITE.location}.`,
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <div className="mb-6 flex justify-center">
            <LogoMark className="size-16" />
          </div>
          <h1 className="font-heading text-4xl font-medium text-navy sm:text-5xl">
            {SITE.legalName}
          </h1>
          <div className="mx-auto mt-5 h-px w-20 bg-gold" aria-hidden="true" />
          <p className="mt-6 text-lg tracking-[0.18em] text-navy/70 uppercase">
            {SITE.tagline}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2">
        <article>
          <h2 className="font-heading text-2xl text-navy sm:text-3xl">The studio</h2>
          <p className="mt-4 leading-relaxed text-navy/75">
            {SITE.legalName} is a marketing studio for brands that need their
            story, site, and operations to move in the same direction. We work
            through a monthly Growth Retainer: plan, build, publish, and review
            — without padding the work with invented metrics or hard-sell
            pricing pages.
          </p>
          <p className="mt-4 leading-relaxed text-navy/75">
            The practice sits at the intersection of brand messaging, website
            care, content, and light operations. When a full new website is the
            right next step, it is scoped as a separate project — not folded
            into retainer noise.
          </p>
        </article>
        <article className="rounded-2xl bg-cream p-8">
          <h2 className="font-heading text-2xl text-navy sm:text-3xl">
            {SITE.owner}
          </h2>
          <p className="mt-1 text-sm tracking-[0.14em] text-navy/55 uppercase">
            Founder · {SITE.location}
          </p>
          <p className="mt-4 leading-relaxed text-navy/75">
            {SITE.owner} leads {SITE.legalName} from Windsor, Ontario. The work
            is hands-on: strategy on the call, written priorities after,
            production in the middle of the month, and a clear close-out at the
            end.
          </p>
          <p className="mt-4 leading-relaxed text-navy/75">
            The studio takes a small number of retainers so each brand gets
            senior attention — including fashion and consumer brands that sell
            across borders, such as Vee Woman Design.
          </p>
        </article>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
          <p className="font-heading text-2xl text-navy">
            If the problems are yours, the solutions can be ours.
          </p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-6 h-11 rounded-full bg-navy px-8 text-white hover:bg-navy-deep"
            )}
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
}
