"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "React Weather App",
    description:
      "A simple yet powerful weather application built with React. It fetches real-time weather data from a public API and displays temperature, conditions, and location-based forecasts with a clean, responsive design. This project demonstrates my ability to integrate APIs, manage state effectively, and design responsive, user-friendly interfaces with modern frontend frameworks.",
    image: "/images/weather.png",
    link: "https://jimohisraelo.github.io/react-weather-app/",
    tags: ["React.js", "TailwindCSS", "API Integration"],
  },
  {
    title: "Forkify Recipe App",
    description:
      "A responsive web application that lets users search recipes via an external API, view details, adjust servings, bookmark favorites, and even upload custom recipes. Built with HTML5, SCSS, ES6+, Fetch API, and structured with an MVC pattern.",
    image: "/images/forkify.png",
    link: "https://forkify-israel.netlify.app/",
    tags: ["Html", "CSS", "Javascript", "API Integration"],
  },
  {
    title: "Personalized Career Bot",
    description:
      "An AI-powered chatbot built with Python and Flask that simulates my professional persona to answer career-related questions about my experience, skills, and journey in tech. It reflects my ability to develop intelligent conversational systems, integrate machine learning models, and design personalized AI interactions that represent a human profile authentically. Just ask it personalized career questions.",
    image: "/images/career.png",
    link: "https://huggingface.co/spaces/jimohisrael04/career_conversation",
    tags: ["Python", "Flask", "Machine Learning", "AI Chatbot"],
  },
  {
    title: "Wilf Africa Platform",
    description:
      "A scalable backend system built for WIFT Africa, a pan-African platform supporting women in film and television. The backend powers membership registration, professional profiles, networking features, events, and mentorship programs. I designed RESTful APIs, implemented secure JWT-based authentication with role-based access control, structured the database for dynamic member directories, and integrated email and notification services. This project demonstrates my ability to build secure, production-ready backend architectures with clean API design and scalable data modeling.",
    image: "/images/wilf.png",
    link: "https://www.wiftafrica.org/",
    tags: ["Mongoose", "Node.js", "MongoDB", "EJS", "NEXT"],
  },
  {
    title: "Sage Clothing Brand",
    description:
      "A modern fashion e-commerce platform built with Next.js, featuring dynamic product pages, sleek animations, and a responsive shopping experience.",
    image: "/images/sage.png",
    link: "https://sage-next.vercel.app/",
    tags: ["Next.js", "TailwindCSS", "Vercel"],
  },
  {
    title: "Trivia Quiz Game",
    description:
      "An interactive web-based trivia quiz built with Flask and JavaScript. Players can select categories, answer multiple-choice questions, view instant feedback, and see their final score with a confetti celebration at the end. It features a clean Bootstrap interface and real-time data from the Open Trivia Database API.",
    image: "/images/trivia.png",
    link: "https://flask-trivia-game.vercel.app/",
    tags: ["Python", "Flask", "Vercel"],
  },
  
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        padding: "7rem 1.5rem",
        backgroundColor: "var(--light, #ffffff)",
        transition: "background-color 0.3s",
      }}
      className="dark:bg-darkAlt"
    >
      {/* Section Header */}
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
          marginBottom: "6rem",
        }}
        className="md:text-6xl"
      >
        Featured Projects
      </motion.h2>

      {/* Project Grid */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            width: "100%",
            maxWidth: "80rem",
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: "var(--white, #ffffff)",
                borderRadius: "1rem",
                boxShadow:
                  "0 4px 12px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.04)",
                overflow: "hidden",
                transition: "transform 0.4s, box-shadow 0.4s",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                cursor: "pointer",
                position: "relative",
              }}
              className="dark:bg-dark hover:shadow-accent/30 hover:scale-[1.03]"
            >
              {/* Project Image */}
              <div style={{ position: "relative", height: "16rem" }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 shadow-md"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div style={{ padding: "2rem" }}>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    marginBottom: "0.75rem",
                    color: "var(--gray-900, #111827)",
                  }}
                  className="dark:text-gray-100 hover:text-accent transition-colors"
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: "var(--gray-600, #4B5563)",
                    fontSize: "0.95rem",
                    lineHeight: "1.7",
                    marginBottom: "1.5rem",
                  }}
                  className="dark:text-gray-400"
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.75rem",
                        padding: "0.25rem 0.75rem",
                        backgroundColor: "rgba(59, 130, 246, 0.1)",
                        color: "var(--accent, #3B82F6)",
                        borderRadius: "9999px",
                        border: "1px solid rgba(59, 130, 246, 0.3)",
                        fontWeight: "500",
                      }}
                      className="dark:text-accent-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Live Demo */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.875rem",
                    color: "var(--accent, #3B82F6)",
                    fontWeight: "600",
                  }}
                  className="hover:underline"
                >
                  View Live Demo <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
