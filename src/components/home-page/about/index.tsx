import { features } from "@/utils/data/content";
import { Photo } from "@/components/ui/Photo";
import { SectionHeader } from "@/components/ui/SectionHeader";

const FeatureCard = ({ title, text, imageFirst }: { title: string; text: string; imageFirst: boolean }) => (
  <article className="grid grid-cols-2 items-stretch">
    <Photo alt={title} className={`min-h-44 ${imageFirst ? "" : "order-2"}`} />
    <div className="flex flex-col justify-center bg-white p-5 text-xs">
      <h3 className="font-bold">{title}</h3>
      <p className="mt-2 leading-relaxed text-muted">{text}</p>
      <a href="#" className="mt-3 text-[10px] font-bold uppercase text-brand hover:text-brand-dark">
        Read more
      </a>
    </div>
  </article>
);

export const AboutIntro = () => (
  <section id="about" className="relative z-10 mx-auto -mt-10 max-w-6xl bg-white px-4 pt-12 pb-16 shadow-sm">
    <SectionHeader
      title="We Are RD Construction"
      subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    />
    <div className="mt-10 grid gap-px md:grid-cols-2">
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.title}
          {...feature}
          imageFirst={index % 2 === 0}
        />
      ))}
    </div>
  </section>
);
