"use client";

import { useEffect, useState } from "react";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { contact, navItems } from "@/utils/data/content";

const telHref = `tel:${contact.phone.replace(/\s/g, "")}`;
const whatsappHref = `https://wa.me/${contact.whatsapp}`;

const Logo = () => (
  <a href="#home" className="py-4 text-lg font-extrabold tracking-widest text-ink">
    <span className="text-brand">RD</span> CONSTRUCTION
  </a>
);

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(navItems[0]?.href ?? "#home");

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const selectItem = (href: string) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-60 bg-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <Logo />

        {/* Desktop menu */}
        <ul className="hidden items-center lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setActive(item.href)}
                className={`block px-4 py-5 text-[10px] font-semibold uppercase tracking-wide transition-colors ${active === item.href ? "bg-brand text-white" : "hover:text-brand"}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions: pills on sm+, icon-only call on phones, hamburger below lg */}
        <div className="flex items-center gap-3">
          <a
            href={telHref}
            className="hidden items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-bold transition-colors hover:border-brand hover:text-brand sm:flex"
          >
            <Phone className="size-4" aria-hidden />
            Call Now
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#00c853] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#00b34a] sm:flex"
          >
            <MessageCircle className="size-4" aria-hidden />
            WhatsApp
          </a>
          <a
            href={telHref}
            aria-label="Call now"
            className="flex size-10 items-center justify-center rounded-full border border-neutral-200 sm:hidden"
          >
            <Phone className="size-5" aria-hidden />
          </a>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="flex size-10 items-center justify-center rounded-full bg-surface lg:hidden"
          >
            <Menu className="size-5" aria-hidden />
          </button>
        </div>
      </div>

      {/* Mobile panel: slides in from the right */}
      <div
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-0 flex flex-col bg-white transition-transform duration-300 ease-out lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-neutral-100 px-4">
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex size-10 items-center justify-center rounded-full bg-surface"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <ul className="space-y-1 px-4 py-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => selectItem(item.href)}
                className={`block rounded-2xl px-5 py-4 text-base font-semibold transition-colors ${active === item.href ? "bg-brand/15 text-ink" : "text-ink-soft hover:bg-surface"}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-auto space-y-3 border-t border-neutral-100 p-4 pb-8">
          <a
            href={telHref}
            className="flex items-center justify-center gap-2 rounded-2xl border border-neutral-200 py-4 text-sm font-bold"
          >
            <Phone className="size-5" aria-hidden />
            Call
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl bg-[#00c853] py-4 text-sm font-bold text-white"
          >
            <MessageCircle className="size-5" aria-hidden />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};
