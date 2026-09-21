import Image from "next/image";

import { CASE_STUDY } from "@/lib/site";
import { cn } from "@/lib/utils";

type CaseStudyPortraitProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function CaseStudyPortrait({
  className,
  priority = false,
  sizes = "(min-width: 1024px) 18rem, (min-width: 640px) 16rem, 70vw",
}: CaseStudyPortraitProps) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-xl border border-gold/80 bg-navy/5",
        className
      )}
    >
      <Image
        src={CASE_STUDY.portrait.src}
        alt={CASE_STUDY.portrait.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover object-[center_12%]"
      />
    </figure>
  );
}
