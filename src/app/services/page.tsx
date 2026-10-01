import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Marble flooring, wall cladding, kitchen countertops, staircases, polishing and restoration by RD Construction.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <main className="mx-auto max-w-6xl px-4 py-16">Services</main>;
}
