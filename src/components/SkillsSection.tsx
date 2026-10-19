import type { IconType } from "react-icons";
import { FaCode } from "react-icons/fa";
import {
  SiBootstrap,
  SiCss3,
  SiFlask,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { skills, type SkillIcon } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

// Brand colour for each icon; `undefined` uses the current text colour so
// monochrome logos stay visible in both light and dark mode.
const icons: Record<SkillIcon, { Icon: IconType; color?: string }> = {
  html: { Icon: SiHtml5, color: "#E34F26" },
  css: { Icon: SiCss3, color: "#1572B6" },
  javascript: { Icon: SiJavascript, color: "#F7DF1E" },
  typescript: { Icon: SiTypescript, color: "#3178C6" },
  react: { Icon: SiReact, color: "#61DAFB" },
  nextjs: { Icon: SiNextdotjs },
  tailwind: { Icon: SiTailwindcss, color: "#06B6D4" },
  bootstrap: { Icon: SiBootstrap, color: "#7952B3" },
  php: { Icon: SiPhp, color: "#777BB4" },
  laravel: { Icon: SiLaravel, color: "#FF2D20" },
  laminas: { Icon: FaCode, color: "#68B604" },
  mysql: { Icon: SiMysql, color: "#4479A1" },
  python: { Icon: SiPython, color: "#3776AB" },
  flask: { Icon: SiFlask },
};

export default function SkillsSection() {
  return (
    <Section id="skills" title="Skills I use to build" subtitle="The languages, frameworks and tools I work with every day." muted>
      <ul className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => {
          const { Icon, color } = icons[skill.icon];
          return (
            <li key={skill.name} className="w-[calc(50%-0.5rem)] sm:w-36">
              <Reveal
                delay={i * 0.03}
                className="flex h-full flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <Icon aria-hidden className="text-4xl" style={{ color }} />
                <div>
                  <p className="text-sm font-semibold">{skill.name}</p>
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                    {skill.years} {skill.years === 1 ? "year" : "years"}
                  </p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
