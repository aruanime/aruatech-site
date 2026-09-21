import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Inquire with ${SITE.legalName}. Email ${SITE.email}. ${SITE.whatsapp.display}.`,
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <h1 className="font-heading text-4xl font-medium text-navy sm:text-5xl">
            Start a Project
          </h1>
          <div className="mx-auto mt-5 h-px w-20 bg-gold" aria-hidden="true" />
          <p className="mx-auto mt-6 max-w-xl text-lg text-navy/75">
            Tell us about the brand, the month ahead, and whether a Growth
            Retainer is what you have in mind. We will reply from the ARUATECH
            business inbox.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-sand bg-cream/40 p-6 sm:p-8">
          <h2 className="font-heading text-2xl text-navy">Inquiry form</h2>
          <p className="mt-2 mb-8 text-sm text-navy/70">
            Submitting opens your email app with a draft to {SITE.email}. Nothing
            is stored on this site.
          </p>
          <ContactForm />
        </div>
        <aside className="space-y-8">
          <div>
            <h2 className="font-heading text-2xl text-navy">Email</h2>
            <p className="mt-2 text-navy/75">
              Prefer to write directly? Use the ARUATECH business inbox:
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-3 inline-block text-navy underline decoration-gold underline-offset-4 hover:decoration-navy"
            >
              {SITE.email}
            </a>
          </div>
          <div>
            <h2 className="font-heading text-2xl text-navy">WhatsApp</h2>
            <p className="mt-2 text-navy/75">
              Message {SITE.shortName} on WhatsApp:
            </p>
            <a
              href={SITE.whatsapp.href}
              className="mt-3 inline-block text-navy underline decoration-gold underline-offset-4 hover:decoration-navy"
              rel="noreferrer"
              target="_blank"
            >
              {SITE.whatsapp.display}
            </a>
          </div>
          <div>
            <h2 className="font-heading text-2xl text-navy">Business</h2>
            <p className="mt-2 text-navy/75">
              {SITE.owner}
              <br />
              {SITE.legalName}
              <br />
              {SITE.location}
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
