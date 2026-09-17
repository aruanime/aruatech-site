import Link from "next/link";

import { SITE } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-24 text-center sm:px-8">
      <p className="text-xs font-semibold tracking-[0.2em] text-navy/55 uppercase">
        {SITE.legalName}
      </p>
      <h1 className="mt-3 font-heading text-4xl text-navy">Page not found</h1>
      <p className="mt-4 text-navy/70">
        That URL is not part of this site. Head home or send an inquiry.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link
          href="/"
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-11 rounded-full bg-navy px-6 text-white hover:bg-navy-deep"
          )}
        >
          Home
        </Link>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-11 rounded-full px-6"
          )}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
