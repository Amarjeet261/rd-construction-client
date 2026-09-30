import { posts } from "@/utils/data/content";
import { Photo } from "@/components/ui/Photo";
import { SectionHeader } from "@/components/ui/SectionHeader";

const BlogCard = ({ title, date, text }: { title: string; date: string; text: string }) => (
  <article className="bg-white p-4 text-xs shadow-md">
    <Photo alt={title} className="aspect-[4/3]" />
    <h3 className="mt-4 font-semibold">{title}</h3>
    <p className="mt-2 leading-relaxed text-muted">{text}</p>
    <div className="mt-4 flex items-center justify-between text-[11px]">
      <span className="italic text-muted">
        posted on <span className="text-brand">{date}</span>
      </span>
      <a href="#" className="font-bold uppercase text-brand hover:text-brand-dark">
        Read more
      </a>
    </div>
  </article>
);

export const BlogSection = () => (
  <section id="blog" className="bg-surface px-4 py-16">
    <SectionHeader title="Blog" />
    <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
      {posts.map((post, index) => (
        <BlogCard key={index} {...post} />
      ))}
    </div>
  </section>
);
