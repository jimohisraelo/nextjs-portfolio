"use client";

import Image from "next/image";
import Link from "next/link";
import "./styles/about-section.css";

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-wrapper">
        {/* Left: Image */}
        <div className="about-image">
          <Image
            src="/images/logo2.jpeg"
            alt="Jimoh Israel"
            width={400}
            height={400}
            className="profile-img"
          />
        </div>

        {/* Right: Text */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m <strong>Jimoh Israel</strong>, a professional web developer
            focused on building clean, functional, and visually appealing
            digital experiences. I believe in simple, thoughtful design that
            solves real problems.
          </p>

          <p>
            I’m passionate about using modern tools and best practices to
            deliver reliable and efficient results — always with an eye for
            detail and performance.
          </p>

          <Link href="#contact" className="contact-btn">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
