import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function ProjectsSection() {
  return (
    <Section id="projects" title="Featured projects" subtitle="A selection of things I've designed, built and shipped.">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 0.1} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-hidden
                className="relative block aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800"
              >
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </a>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-slate-600 dark:text-slate-400">{project.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-5 text-sm font-semibold">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent hover:underline dark:text-accent-soft"
                  >
                    Live demo <ExternalLink size={15} aria-hidden />
                    <span className="sr-only">: {project.title} (opens in a new tab)</span>
                  </a>
                  {project.source && (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-950 hover:underline dark:text-slate-300 dark:hover:text-white"
                    >
                      <FaGithub size={15} aria-hidden /> Source
                      <span className="sr-only">: {project.title} (opens in a new tab)</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
