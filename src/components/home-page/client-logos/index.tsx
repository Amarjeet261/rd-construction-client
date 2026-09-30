import { clientLogos } from "@/utils/data/content";

export const ClientLogos = () => (
  <section aria-label="Our clients" className="px-4 pb-16">
    <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-6 text-lg font-semibold text-neutral-500">
      {clientLogos.map((logo) => (
        <li key={logo}>{logo}</li>
      ))}
    </ul>
  </section>
);
