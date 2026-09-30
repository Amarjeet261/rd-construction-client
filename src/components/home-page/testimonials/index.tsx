"use client";

import { useState } from "react";
import { testimonials } from "@/utils/data/content";
import { Photo } from "@/components/ui/Photo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SliderDots } from "@/components/ui/SliderDots";

const TestimonialCard = ({ text, author, role }: (typeof testimonials)[number]) => (
  <article className="flex gap-4 text-xs">
    <Photo alt={author} className="size-14 shrink-0" />
    <div>
      <p className="leading-relaxed text-muted">{text}</p>
      <p className="mt-3 text-[11px]">
        <span className="font-bold text-brand">{author},</span> <span className="text-muted">{role}</span>
      </p>
    </div>
  </article>
);

export const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const current = testimonials[active] ?? testimonials[0];

  return (
    <section className="px-4 py-16">
      <SectionHeader title="Testimonials" />
      <div className="mt-8 text-center text-3xl text-brand" aria-hidden>
        “
      </div>
      <div className="mx-auto mt-6 grid max-w-5xl gap-10 md:grid-cols-2">
        {/* Desktop shows every testimonial; mobile shows only the active one. */}
        {testimonials.map((item, index) => (
          <div key={index} className={index === active ? "block" : "hidden md:block"}>
            <TestimonialCard {...item} />
          </div>
        ))}
      </div>
      <div className="mt-10">
        <SliderDots count={testimonials.length} active={active} onSelect={setActive} label="Show testimonial" />
      </div>
      <span className="sr-only">{current?.author}</span>
    </section>
  );
};
