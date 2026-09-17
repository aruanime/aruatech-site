export const SITE = {
  legalName: "ARUATECH SOLUTIONS INC",
  shortName: "ARUATECH",
  tagline: "PROBLEMS, OUR SOLUTIONS.",
  owner: "Ufuoma Aruakpor",
  location: "Windsor, ON",
  email: "aruatechsolutions@gmail.com",
  whatsapp: {
    label: "WhatsApp",
    status: "TBD",
  },
  description:
    "Strategic marketing solutions tailored for modern brands. Brand, web, content, and operations — in a monthly Growth Retainer.",
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const RETAINER = {
  name: "Monthly Growth Retainer",
  included: [
    {
      title: "Strategy call + written priorities",
      detail: "A monthly working session, followed by a short written plan you can run against.",
    },
    {
      title: "Brand messaging, offer, and visual direction",
      detail: "Clarity on what you say, what you sell, and how it should look.",
    },
    {
      title: "Website care (batch updates)",
      detail: "Scheduled site updates — copy, layout, and light production — in batches, not ad-hoc tickets.",
    },
    {
      title: "Content calendar + draft posts",
      detail: "A month of planned content, with drafts to start on Instagram.",
    },
    {
      title: "Ops (invoice, PayPal, funnel tweaks)",
      detail: "Small operational fixes that keep inquiries and payments moving.",
    },
    {
      title: "End-of-month report",
      detail: "A written close-out of what shipped, what we learned, and what is next.",
    },
  ],
  cadence: [
    { week: "Week 1", label: "Plan", detail: "Priorities, messaging, and the month’s build list." },
    { week: "Weeks 2–3", label: "Build & publish", detail: "Site care, content drafts, and live updates." },
    { week: "Week 4", label: "Review", detail: "Report, notes, and the next cycle’s direction." },
  ],
  outOfScope: [
    "Paid ads",
    "Full new websites (separate project fee)",
    "Photo / video production",
    "Client customer service / fulfillment",
    "Unlimited revisions",
  ],
} as const;

export const CASE_STUDY = {
  name: "Vee Woman Design",
  brand: "VE WOMAN",
  instagramHandle: "@ve_woman",
  instagramUrl: "https://www.instagram.com/ve_woman/",
  sector: "Fashion",
  base: "Nigeria",
  audience: "Global and US clients",
  teaser: "A complete brand and digital strategy overhaul.",
  challenge:
    "VE WOMAN is a fashion house based in Nigeria, dressing clients at home and in the United States. The work needed a tighter brand story, a clearer offer, and a digital presence that could travel with the collection — without inventing a new company voice from scratch.",
  approach:
    "ARUATECH SOLUTIONS INC treated the engagement as brand plus operating rhythm: messaging and visual direction first, then website care and Instagram-ready content in a Plan → Build → Publish → Review cadence. The aim was a presence that looks considered and a monthly process the studio can keep.",
  outcome: [
    "A clearer brand voice for VE WOMAN across site and social.",
    "A more coherent visual direction for lookbooks, posts, and web.",
    "A practical monthly rhythm for content, site care, and operations.",
    "A digital surface that reads as fashion-forward without losing the studio’s own identity.",
  ],
} as const;
