"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiPython,
  SiFlask,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiLaravel,
  SiBootstrap,
  SiTypescript,
  SiMysql,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const skills = [
  { name: "HTML", icon: <SiHtml5 style={{ color: "#E34F26" }} />, exp: "5 years experience" },
  { name: "CSS", icon: <SiCss3 style={{ color: "#1572B6" }} />, exp: "5 years experience" },
  { name: "JavaScript", icon: <SiJavascript style={{ color: "#F7DF1E" }} />, exp: "3 years experience" },
  { name: "React", icon: <SiReact style={{ color: "#61DAFB" }} />, exp: "3 years experience" },
  { name: "Next.js", icon: <SiNextdotjs style={{ color: "#000000" }} />, exp: "2 years experience" },
  { name: "TailwindCSS", icon: <SiTailwindcss style={{ color: "#06B6D4" }} />, exp: "2 years experience" },
  { name: "PHP", icon: <SiPhp style={{ color: "#777BB4" }} />, exp: "4 years experience" },
  { name: "Laravel", icon: <SiLaravel style={{ color: "#FF2D20" }} />, exp: "3 years experience" },
  { name: "Laminas", icon: <FaCode style={{ color: "#7E57C2" }} />, exp: "2 years experience" },
  { name: "Mysql", icon: <SiMysql style={{ color: "#7E57C2" }} />, exp: "2 years experience" },
  { name: "Bootstrap", icon: <SiBootstrap style={{ color: "#7952B3" }} />, exp: "3 years experience" },
  { name: "Python", icon: <SiPython style={{ color: "#3776AB" }} />, exp: "3 years experience" },
  { name: "Flask", icon: <SiFlask style={{ color: "#000000" }} />, exp: "2 years experience" },
  { name: "Typescript", icon: <SiTypescript style={{ color: "#000000" }} />, exp: "2 years experience" },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      style={{
        padding: "7rem 1.5rem",
        backgroundColor: "var(--light, #ffffff)",
        transition: "background-color 0.3s"
      }}
      className="dark:bg-darkAlt"
    >
      {/* Header with larger text and more spacing */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          textAlign: "center",
          color: "var(--accent, #3B82F6)",
          marginBottom: "8rem"
        }}
        className="md:text-6xl"
      >
        Skills I Use to Build 
      </motion.h2>

      {/* Grid container */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2rem",
          width: "100%",
          maxWidth: "72rem"
        }}
        className="sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                padding: "1.25rem",
                backgroundColor: "var(--white, #ffffff)",
                borderRadius: "0.75rem",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                cursor: "pointer",
                position: "relative",
                transition: "all 0.3s"
              }}
              className="dark:bg-dark hover:shadow-accent/30 hover:scale-105"
              data-tooltip-id={skill.name}
              data-tooltip-content={skill.exp}
            >
              <div style={{ 
                fontSize: "2.25rem",
                transition: "transform 0.3s"
              }}
              className="group-hover:scale-125"
              >
                {skill.icon}
              </div>
              <p style={{
                fontSize: "0.875rem",
                color: "var(--gray-700, #374151)",
                fontWeight: "500",
                textAlign: "center"
              }}
              className="dark:text-gray-300"
              >
                {skill.name}
              </p>

              <Tooltip
                id={skill.name}
                style={{ 
                  backgroundColor: "var(--accent, #3B82F6)",
                  color: "white",
                  fontSize: "0.75rem",
                  padding: "0.5rem 0.75rem",
                  borderRadius: "0.25rem"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}