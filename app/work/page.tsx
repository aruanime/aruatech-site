import type { Metadata } from "next";
import Link from "next/link";

import { CaseStudyPortrait } from "@/components/case-study-portrait";
import { CaseStudyArt } from "@/components/how-it-works-icons";
import { CASE_STUDY, SITE } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Work",
  description: `Featured client: ${CASE_STUDY.name} (${CASE_STUDY.brand}) — fashion brand work by ${SITE.legalName}.`,
};

const gallery = [
  { label: "Lookbook direction" },
  { label: "Campaign stills" },
  { label: "Instagram drafts" },
  { label: "Website surfaces" },
];

export default function WorkPage() {
  return (
    <div className="bg-white">
      <section className="bg-cream">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-navy/55 uppercase">
              Featured client
            </p>
            <h1 className="mt-3 font-heading text-4xl font-medium text-navy sm:text-5xl">
              {CASE_STUDY.name}
            </h1>
            <p className="mt-3 text-lg text-navy/75">
              {CASE_STUDY.brand} · {CASE_STUDY.sector} · {CASE_STUDY.base}, serving{" "}
              {CASE_STUDY.audience}
            </p>
            <p className="mt-5 max-w-xl text-navy/70">{CASE_STUDY.teaser}</p>
            <p className="mt-4 text-sm text-navy/70">
              Instagram:{" "}
              <a
                href={CASE_STUDY.instagramUrl}
                className="text-navy underline decoration-gold underline-offset-4 hover:decoration-navy"
                rel="noreferrer"
                target="_blank"
              >
                {CASE_STUDY.instagramHandle}
              </a>
            </p>
          </div>
          <CaseStudyPortrait
            className="mx-auto aspect-[3/4] w-full max-w-[16.5rem] shrink-0 lg:mx-0 lg:max-w-[18.5rem]"
            priority
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-3">
        <article>
          <h2 className="font-heading text-2xl text-navy">Challenge</h2>
          <p className="mt-3 text-navy/75 leading-relaxed">{CASE_STUDY.challenge}</p>
        </article>
        <article>
          <h2 className="font-heading text-2xl text-navy">Approach</h2>
          <p className="mt-3 text-navy/75 leading-relaxed">{CASE_STUDY.approach}</p>
        </article>
        <article>
          <h2 className="font-heading text-2xl text-navy">Outcome</h2>
          <ul className="mt-3 space-y-3">
            {CASE_STUDY.outcome.map((item) => (
              <li key={item} className="flex gap-3 text-navy/75">
                <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="bg-cream" aria-labelledby="gallery">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 id="gallery" className="font-heading text-2xl text-navy sm:text-3xl">
            Gallery
          </h2>
          <p className="mt-3 max-w-2xl text-navy/70">
            Visual frames for the engagement. Finished photography lives with
            the studio; these placeholders mark the surfaces we directed.
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item) => (
              <li
                key={item.label}
                className="flex aspect-[4/5] flex-col justify-between rounded-xl border border-gold/70 bg-white p-5"
              >
                <CaseStudyArt className="mx-auto mt-6 h-20 w-32 opacity-80" />
                <p className="text-sm font-medium text-navy">{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
        <p className="font-heading text-2xl text-navy">
          Work like this starts with a conversation.
        </p>
        <p className="mt-3 text-navy/70">
          {SITE.legalName} takes on a small number of monthly retainers. If your
          brand needs the same kind of care, inquire — we will not invent
          numbers to sell the work.
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
      </section>
    </div>
  );
}
