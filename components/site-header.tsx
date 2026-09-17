"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

function NavLinks({
  onNavigate,
  className,
}: {
  onNavigate?: () => void;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <ul className={cn("flex items-center gap-8", className)}>
      {NAV.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={cn(
                "text-[0.95rem] tracking-wide text-navy/80 transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2",
                active && "text-navy"
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 shadow-[0_1px_0_0_rgba(26,39,68,0.06)] backdrop-blur-sm">
      <div className="h-[7px] bg-navy" aria-hidden="true" />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:gap-6 sm:px-8 sm:py-5">
        <div className="min-w-0">
          <Logo />
        </div>
        <nav aria-label="Primary" className="hidden md:block">
          <NavLinks />
        </nav>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon-lg"
                className="shrink-0 text-navy md:hidden"
                aria-label="Open menu"
              />
            }
          >
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="right" className="bg-cream">
            <SheetHeader>
              <SheetTitle className="font-heading tracking-wide text-navy">
                Menu
              </SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile">
              <NavLinks
                onNavigate={() => setOpen(false)}
                className="flex-col items-start gap-5 px-4 pb-8 text-lg"
              />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
