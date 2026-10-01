import { loremShort, services, servicesImage } from "@/utils/data/content";
import { Photo } from "@/components/ui/Photo";

const ServiceCard = ({ title, text }: { title: string; text: string }) => (
  <article className="flex gap-4 bg-white/70 p-5 text-xs">
    <span
      aria-hidden
      className="flex size-10 shrink-0 items-center justify-center rounded bg-brand/15 text-lg font-bold text-brand"
    >
      {title.charAt(0)}
    </span>
    <div>
      <h3 className="font-bold">{title}</h3>
      <p className="mt-2 leading-relaxed text-muted">{text}</p>
      <a href="#" className="mt-3 inline-block text-[10px] font-bold uppercase text-brand hover:text-brand-dark">
        Read more
      </a>
    </div>
  </article>
);

export const ServicesSection = () => (
  <section id="services" className="bg-surface">
    <div className="mx-auto grid max-w-6xl items-end gap-8 px-4 pt-16 lg:grid-cols-[2fr_3fr]">
      <Photo src={servicesImage} alt="RD Construction worker with tools" className="hidden min-h-[480px] lg:block" />
      <div className="pb-16">
        <div className="mb-8 flex items-start gap-4">
          <h2 className="text-xl font-extrabold uppercase leading-tight">
            Our
            <br />
            Service
          </h2>
          <p className="border-l-2 border-brand pl-4 text-xs leading-relaxed text-muted">
            {loremShort} Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
          </p>
        </div>
        <div className="grid gap-px sm:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={`${service.title}-${index}`} {...service} />
          ))}
        </div>
      </div>
    </div>
  </section>
);
