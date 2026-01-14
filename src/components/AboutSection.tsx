"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Briefcase, Award } from "lucide-react";
import "./styles/about-section.css";

export default function AboutSection() {
  const stats = [
    { icon: <Code2 size={32} />, value: "3+", label: "Years Experience" },
    { icon: <Briefcase size={32} />, value: "10+", label: "Projects Completed" },
    { icon: <Award size={32} />, value: "Full-Stack", label: "Developer" },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-wrapper-centered">
        {/* Centered Text Content */}
        <div className="about-text-centered">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm <strong>Jimoh Israel</strong>, a professional web developer
            focused on building clean, functional, and visually appealing
            digital experiences. I believe in simple, thoughtful design that
            solves real problems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            I'm passionate about using modern tools and best practices to
            deliver reliable and efficient results — always with an eye for
            detail and performance.
          </motion.p>

          {/* Stats Cards */}
          <div className="stats-container">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="stat-card"
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Link href="#contact" className="contact-btn">
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
