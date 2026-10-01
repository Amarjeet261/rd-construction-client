import { features } from "@/utils/data/content";
import { Photo } from "@/components/ui/Photo";
import { SectionHeader } from "@/components/ui/SectionHeader";

const FeatureCard = ({ title, text, image, imageFirst }: { title: string; text: string; image: string; imageFirst: boolean }) => (
  <article className="grid grid-cols-2 items-stretch">
    <Photo src={image} alt={title} className={`min-h-44 ${imageFirst ? "" : "order-2"}`} />
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
      subtitle="Where premium marble meets precision craftsmanship, we create timeless spaces built to impress and last. From hand-picked slabs to a mirror-smooth finish, every floor, wall and staircase is planned, cut and fitted by our skilled team with complete care and honesty."
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
