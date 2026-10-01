import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about RD Construction - trusted marble experts delivering precision craftsmanship and timeless spaces built to last.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <main className="mx-auto max-w-6xl px-4 py-16">About</main>;
}
