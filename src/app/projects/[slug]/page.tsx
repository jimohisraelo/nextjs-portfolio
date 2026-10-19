import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import { caseStudies, profile } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  const title = `${study.title} — Case study | ${profile.name}`;
  return {
    title,
    description: study.summary,
    alternates: { canonical: `/projects/${study.slug}` },
    openGraph: { type: "article", url: `/projects/${study.slug}`, title, description: study.summary, images: [study.image] },
    twitter: { card: "summary_large_image", title, description: study.summary, images: [study.image] },
  };
}

const sectionHeading = "text-2xl font-bold tracking-tight";

function PointList({ points }: { points: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {points.map((point) => (
        <li key={point} className="flex gap-3 leading-relaxed text-slate-700 dark:text-slate-300">
          <CheckCircle2 size={20} aria-hidden className="mt-0.5 shrink-0 text-accent dark:text-accent-soft" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <article className="px-4 pb-20 pt-28 sm:px-6 md:pb-28">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-accent dark:text-slate-400 dark:hover:text-accent-soft"
        >
          <ArrowLeft size={16} aria-hidden /> All projects
        </Link>

        <header className="mt-6 animate-fade-up motion-reduce:animate-none">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent dark:text-accent-soft">Case study</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">{study.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-400">{study.summary}</p>
        </header>

        <dl className="mt-10 grid gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:grid-cols-2 dark:border-slate-800 dark:bg-slate-900/50">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">My role</dt>
            <dd className="mt-1 font-medium">{study.role}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Team</dt>
            <dd className="mt-1 font-medium">{study.team}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Tech stack</dt>
            <dd className="mt-2">
              <ul className="flex flex-wrap gap-2">
                {study.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Live</dt>
            <dd className="mt-1 flex flex-wrap gap-x-6 gap-y-2">
              {study.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-accent hover:underline dark:text-accent-soft"
                >
                  {link.label} <ExternalLink size={15} aria-hidden />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              ))}
            </dd>
          </div>
        </dl>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg dark:border-slate-800 dark:bg-slate-800">
          <Image src={study.image} alt={study.imageAlt} fill priority sizes="(min-width: 896px) 896px, 100vw" className="object-cover object-top" />
        </div>

        <Reveal>
          <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {study.stats.map((stat) => (
              <li
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="text-3xl font-extrabold text-accent dark:text-accent-soft">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <section className="mt-16">
            <h2 className={sectionHeading}>The challenge</h2>
            {study.challenge.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                {paragraph}
              </p>
            ))}
          </section>
        </Reveal>

        <section className="mt-16">
          <Reveal>
            <h2 className={sectionHeading}>What I built</h2>
          </Reveal>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {study.built.map((group) => (
              <Reveal key={group.title} className="h-full">
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <h3 className="text-lg font-bold">{group.title}</h3>
                  <PointList points={group.points} />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal>
          <section className="mt-16 rounded-2xl border border-blue-200 bg-blue-50 p-6 sm:p-8 dark:border-blue-500/20 dark:bg-blue-500/5">
            <h2 className={sectionHeading}>{study.highlights.title}</h2>
            <PointList points={study.highlights.points} />
          </section>
        </Reveal>

        <Reveal>
          <div className="mt-16 flex flex-col items-center gap-4 border-t border-slate-200 pt-12 text-center dark:border-slate-800">
            <p className="text-xl font-semibold">Need someone who can build systems like this?</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-accent-hover"
              >
                Get in touch
              </Link>
              <Link
                href="/#projects"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-3.5 font-semibold transition hover:border-accent hover:text-accent dark:border-slate-700 dark:hover:border-accent-soft dark:hover:text-accent-soft"
              >
                See more projects
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
