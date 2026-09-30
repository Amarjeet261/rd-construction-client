"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SliderDots } from "@/components/ui/SliderDots";

const slides = [
  {
    title: ["MAKE YOUR", "DREAM TRUE WITH US"],
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
  },
  {
    title: ["BUILD YOUR", "FUTURE WITH US"],
    text: "Quality construction and expert engineering delivered on time, every time.",
  },
  {
    title: ["TRUSTED BUILDERS,", "RD CONSTRUCTION"],
    text: "Decades of experience turning blueprints into lasting structures.",
  },
];

export const HeroSection = () => {
  const [active, setActive] = useState(0);
  const slide = slides[active] ?? slides[0];

  return (
    <section id="home" className="relative -mt-[58px] flex min-h-[560px] items-center bg-gradient-to-br from-slate-500 to-slate-700 pt-28 pb-24 md:min-h-[640px]">
      {/* HeroBackground: swap this gradient for a background image later */}
      <div aria-hidden className="absolute inset-0 bg-black/20" />
      <div className="relative mx-auto w-full max-w-6xl px-4">
        <div className="max-w-xl">
          <h1 className="space-y-2 text-2xl font-extrabold text-white sm:text-3xl">
            {slide.title.map((line) => (
              <span key={line} className="block w-fit bg-ink/90 px-3 py-1">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-5 max-w-md text-xs leading-relaxed text-white">{slide.text}</p>
          <div className="mt-6 flex gap-3">
            <Button href="#contact">Buy Now</Button>
            <Button href="#about" variant="dark">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-16">
        <SliderDots count={slides.length} active={active} onSelect={setActive} label="Go to slide" />
      </div>
    </section>
  );
};
