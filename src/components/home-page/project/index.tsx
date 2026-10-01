"use client";

import { useState } from "react";
import { projectCategories, projects, type ProjectCategory } from "@/utils/data/content";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const PortfolioSection = () => {
  const [category, setCategory] = useState<ProjectCategory>("All");
  const visible = projects.filter((project) => category === "All" || project.category === category);

  return (
    <section id="project" className="bg-ink px-4 py-16 text-white">
      <SectionHeader title="PROJECT" dark />

      <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] font-semibold uppercase">
        {projectCategories.map((name) => (
          <li key={name}>
            <button
              type="button"
              onClick={() => setCategory(name)}
              aria-pressed={category === name}
              className={`transition-colors hover:text-brand ${category === name ? "text-brand" : "text-white"}`}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-8 max-w-5xl bg-white p-1">
        {visible.length === 0 ? (
          <p className="py-16 text-center text-xs text-muted">No projects in this category yet.</p>
        ) : (
          <ul className="grid grid-cols-2 gap-1 md:grid-cols-3">
            {visible.map((project) => (
              <li key={project.id} className="group relative">
                <Photo src={project.image} alt={project.title} className="aspect-[4/3]" />
                <div className="absolute inset-0 flex items-end bg-black/50 p-3 text-xs font-bold opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {project.title}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-10 text-center">
        <Button href="#project">View All</Button>
      </div>
    </section>
  );
};
