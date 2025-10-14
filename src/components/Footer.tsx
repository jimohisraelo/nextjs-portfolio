"use client";

import React, { FC } from "react";
import Link from "next/link";
import { FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "./styles/footer.css";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul className="footer-nav-link-list">
          <li className="footer-nav-link-item">
            <Link href="/">Home</Link>
          </li>
          <li className="footer-nav-link-item">
            <Link href="#about">About</Link>
          </li>
          <li className="footer-nav-link-item">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="footer-nav-link-item">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="footer-socials">
        <a
          href="https://github.com/jimohisraelo?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a href="mailto:jimohisrael04@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a
          href="https://wa.me/+2347068985608"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>

      <div className="footer-credits">
        <div className="footer-credits-text">
          © {new Date().getFullYear()} <span className="font-semibold">Jimoh Israel</span>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
