import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get a free marble quote from RD Construction. Call, WhatsApp or email us today.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <main className="mx-auto max-w-6xl px-4 py-16">Contact</main>;
}
