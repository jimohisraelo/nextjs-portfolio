"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState, useMemo } from "react";

export default function HeroSection() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesConfig: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      interactivity: {
        events: { onHover: { enable: true, mode: "repulse" } },
        modes: { repulse: { distance: 100, duration: 0.4 } },
      },
      particles: {
        color: { value: "#3B82F6" },
        links: {
          color: "#93C5FD",
          distance: 140,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: { enable: true, speed: 1, outModes: { default: "bounce" } },
        number: { value: 70, density: { enable: true, area: 800 } },
        opacity: { value: 0.6 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) {
    return (
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center bg-white text-gray-800 overflow-hidden px-6" />
    );
  }

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center bg-white text-gray-800 overflow-hidden px-6">
      <Particles id="tsparticles" options={particlesConfig} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100/30 via-transparent to-white z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 space-y-6 max-w-3xl mx-auto"
      >
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Turning <span className="text-blue-600">Ideas</span> into{" "}
          <span className="text-blue-500">Impactful Products</span>.
        </h1>

        {/* Sub-heading / Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium"
        >
          Hi, I’m <span className="text-blue-600 font-semibold">Israel</span> — a full-stack developer
          who builds digital experiences that feel alive.
        </motion.p>

        {/* Short Description */}
        <motion.p
          initial={{ opacity: 0 }}  
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
        >
          From sleek front-ends to powerful back-ends, I merge creativity with
          technology to craft human-centered, future-ready web applications.
        </motion.p>
        

        {/* Call To Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8"
        >     

          {/* Secondary CTA */}
          <motion.a
            href="#projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            style={{
              fontSize: "1.1rem",
              borderRadius: "12px",
              padding: "5px",
              margin: "10px",
              border: "1px solid #000000",
              color: "black",
            }}
            className="px-8 py-4 border-2 border-blue-500 text-blue-600 text-lg rounded-full hover:bg-blue-50 transition-all duration-300"
          >
            Explore Works
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
