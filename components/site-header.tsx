"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

import { Logo } from "@/components/logo";
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
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) {
      return;
    }

    const panel = panelRef.current;
    const firstLink = panel?.querySelector("a");
    firstLink?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panel) {
        return;
      }

      const focusable = [
        buttonRef.current,
        ...Array.from(panel.querySelectorAll<HTMLElement>("a, button")),
      ].filter((node): node is HTMLElement => Boolean(node));

      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 shadow-[0_1px_0_0_rgba(26,39,68,0.06)] backdrop-blur-sm">
        <div className="h-[7px] bg-navy" aria-hidden="true" />
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-6 sm:px-8 sm:py-5">
          <div className="min-w-0 flex-1">
            <Logo />
          </div>
          <nav aria-label="Primary" className="hidden md:block">
            <NavLinks />
          </nav>
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-md text-navy md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
        <div
          ref={panelRef}
          id={panelId}
          hidden={!open}
          className="border-t border-sand bg-white md:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto max-w-6xl">
            <NavLinks
              onNavigate={() => setOpen(false)}
              className="flex-col items-stretch gap-0 px-2 py-2 text-lg [&>li>a]:block [&>li>a]:px-3 [&>li>a]:py-3"
            />
          </nav>
        </div>
      </header>
      {open ? (
        <div
          className="fixed inset-0 z-30 bg-navy/25 md:hidden"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      ) : null}
    </>
  );
}
