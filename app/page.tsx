import type { Metadata } from "next";
import Link from "next/link";

import {
  BuildIcon,
  CaseStudyArt,
  PlanIcon,
  PublishIcon,
  ReviewIcon,
} from "@/components/how-it-works-icons";
import { CASE_STUDY, SITE } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: SITE.legalName,
  description: SITE.description,
};

const steps = [
  { title: "Plan", icon: PlanIcon },
  { title: "Build", icon: BuildIcon },
  { title: "Publish", icon: PublishIcon },
  { title: "Review", icon: ReviewIcon },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <h1 className="font-heading text-[2.35rem] leading-tight font-medium text-navy sm:text-5xl md:text-[3.35rem]">
            Elevate Your Digital Presence
          </h1>
          <div className="mx-auto mt-6 h-px w-24 bg-gold" aria-hidden="true" />
          <p className="mx-auto mt-6 max-w-xl text-lg text-navy/75 sm:text-xl">
            Strategic marketing solutions tailored for modern brands.
          </p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-10 h-12 rounded-full bg-navy px-8 text-base text-white hover:bg-navy-deep"
            )}
          >
            Start a Project
          </Link>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="how-it-works">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2
            id="how-it-works"
            className="text-center font-heading text-2xl font-medium text-navy sm:text-3xl"
          >
            How it works
          </h2>
          <ol className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
            {steps.map((step) => (
              <li key={step.title} className="text-center">
                <step.icon />
                <p className="mt-4 text-base font-medium text-navy">{step.title}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white pb-20" aria-labelledby="case-study">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Link
            href="/work"
            className="flex flex-col items-start justify-between gap-8 rounded-2xl bg-cream px-8 py-10 transition-colors hover:bg-sand/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:flex-row sm:items-center sm:px-12"
          >
            <div>
              <h2
                id="case-study"
                className="font-heading text-2xl font-medium text-navy sm:text-[1.75rem]"
              >
                Case Study: {CASE_STUDY.name}
              </h2>
              <p className="mt-3 max-w-xl text-navy/70">{CASE_STUDY.teaser}</p>
            </div>
            <CaseStudyArt className="h-24 w-40 shrink-0 sm:h-28 sm:w-48" />
          </Link>
        </div>
      </section>
    </>
  );
}
