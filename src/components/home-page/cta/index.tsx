import { Button } from "@/components/ui/Button";

export const CTASection = () => (
  <section className="bg-ink px-4 py-20 text-center text-white">
    <p className="text-[11px] italic">We are since 1975</p>
    <h2 className="mt-4 text-xl font-extrabold uppercase tracking-wide sm:text-2xl">
      The starting point of all achievement is desire
    </h2>
    <Button href="#contact" className="mt-8">
      Buy Now
    </Button>
  </section>
);
