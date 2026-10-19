import { about } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <Section id="about" title="About me">
      <div className="mx-auto max-w-3xl space-y-5 text-center text-lg leading-relaxed text-slate-700 dark:text-slate-300">
        {about.paragraphs.map((text, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <p>{text}</p>
          </Reveal>
        ))}
      </div>

      <dl className="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-3">
        {about.stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={0.2 + i * 0.1}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</dt>
            <dd className="order-first mb-2 text-3xl font-bold text-accent dark:text-accent-soft">{stat.value}</dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
