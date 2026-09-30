import { loremLong, socialLinks, team } from "@/utils/data/content";
import { Photo } from "@/components/ui/Photo";
import { SectionHeader } from "@/components/ui/SectionHeader";

const TeamCard = ({ name, role }: { name: string; role: string }) => (
  <article className="text-center text-xs">
    <Photo alt={name} className="aspect-[4/3]" />
    <h3 className="mt-4 font-semibold">{name}</h3>
    <p className="mt-1 text-[11px] text-brand">{role}</p>
    <p className="mt-3 leading-relaxed text-muted">{loremLong}</p>
    <ul className="mt-4 flex justify-center gap-4 text-[11px] font-bold">
      {socialLinks.map((link) => (
        <li key={link.label}>
          <a href={link.href} aria-label={`${name} on ${link.label}`} className="hover:text-brand">
            {link.short}
          </a>
        </li>
      ))}
    </ul>
  </article>
);

export const TeamSection = () => (
  <section className="px-4 py-16">
    <SectionHeader title="Our Team" />
    <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {team.map((member) => (
        <TeamCard key={member.name} {...member} />
      ))}
    </div>
  </section>
);
