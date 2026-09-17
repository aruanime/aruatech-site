# ARUATECH SOLUTIONS INC — Marketing Site

Public marketing website for **ARUATECH SOLUTIONS INC**, a studio led by Ufuoma Aruakpor in Windsor, ON.

Tagline: **PROBLEMS, OUR SOLUTIONS.**

This is a static-friendly Next.js App Router site. There is no CMS, auth, or payment backend. The contact form opens a `mailto:` draft to the studio inbox.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- shadcn/ui (Button, Input, Textarea, Checkbox, Label, Sheet)

## Pages

| Route | Contents |
| --- | --- |
| `/` | Concept C homepage — centered hero, How it works (Plan → Build → Publish → Review), Vee Woman Design case-study teaser |
| `/services` | Monthly Growth Retainer: included work, cadence, out of scope. No prices. |
| `/work` | Vee Woman Design / VE WOMAN case study (qualitative only) |
| `/about` | ARUATECH SOLUTIONS INC and Ufuoma Aruakpor, Windsor, ON |
| `/contact` | Inquiry form + mailto fallback (`aruatechsolutions@gmail.com`). WhatsApp TBD. |

## Run locally

```bash
npm install
npm run dev
```

Dev server: [http://127.0.0.1:43211](http://127.0.0.1:43211)

## Production build

```bash
npm run build
npm start
```

`next build` is Vercel-ready. No environment variables are required for v1.

## Brand rules (v1)

- Legal / public name: **ARUATECH SOLUTIONS INC**
- Colors: navy + gold on white / off-white
- Do not invent prices, client counts, ROI, or testimonials with stats
- Footer always includes ARUATECH SOLUTIONS INC

## Contact constants

Edit `lib/site.ts` to change email, WhatsApp status, or navigation.

- Email: `aruatechsolutions@gmail.com`
- WhatsApp: TBD (placeholder, not a fake number)
