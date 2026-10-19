"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/portfolio";

// The particle effect is decorative, so it loads after the page content.
const ParticlesBackground = dynamic(() => import("./ParticlesBackground"), { ssr: false });

// CSS animation (see globals.css) so the hero shows immediately, even before JavaScript loads.
const fadeUp = "animate-fade-up motion-reduce:animate-none";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-svh items-center justify-center overflow-hidden px-4 pb-16 pt-28 text-center sm:px-6">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950" />
      {!reduceMotion && (
        <div className="absolute inset-0 -z-10">
          <ParticlesBackground />
        </div>
      )}

      <div className="mx-auto max-w-3xl">
        <p className={`${fadeUp} mb-4 text-sm font-semibold uppercase tracking-widest text-accent dark:text-accent-soft`}>
          {profile.role}
        </p>

        <h1
          className={`${fadeUp} text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl`}
          style={{ animationDelay: "0.1s" }}
        >
          Turning <span className="text-accent dark:text-accent-soft">ideas</span> into impactful products.
        </h1>

        <p
          className={`${fadeUp} mt-6 text-lg text-slate-700 sm:text-xl dark:text-slate-300`}
          style={{ animationDelay: "0.25s" }}
        >
          Hi, I&apos;m <span className="font-semibold text-slate-900 dark:text-white">{profile.shortName}</span> — a
          full-stack developer who builds digital experiences that feel alive.
        </p>

        <p
          className={`${fadeUp} mt-4 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400`}
          style={{ animationDelay: "0.35s" }}
        >
          From sleek front-ends to powerful back-ends, I merge creativity with technology to craft human-centred,
          future-ready web applications.
        </p>

        <div
          className={`${fadeUp} mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row`}
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-accent-hover"
          >
            View my work <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-7 py-3.5 font-semibold text-slate-800 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-accent-soft dark:hover:text-accent-soft"
          >
            Get in touch
          </a>
          {profile.resume && (
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 px-4 py-3.5 font-semibold text-slate-700 hover:text-accent dark:text-slate-300 dark:hover:text-accent-soft"
            >
              <Download size={18} /> Download CV
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
