import { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  muted?: boolean;
  children: ReactNode;
}

/** Shared wrapper so every section has the same spacing, width and heading style. */
export default function Section({ id, title, subtitle, muted, children }: SectionProps) {
  return (
    <section
      id={id}
      className={`px-4 py-20 sm:px-6 md:py-28 ${muted ? "bg-slate-50 dark:bg-slate-900/50" : ""}`}
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{subtitle}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
