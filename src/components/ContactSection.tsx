"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import "./styles/contact-section.css";

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState("");

  return (
    <section id="contact" className="contact-section">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="contact-header"
      >
        <h2>Let’s Connect</h2>
        <p>
          Ready to bring your ideas to life? I’d love to hear about your next
          project.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        action="https://formspree.io/f/mjkabkdg"
        method="POST"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        onSubmit={() =>
          setFormStatus(
            "✅ Thank you! Your message has been sent successfully."
          )
        }
        className="contact-form"
      >
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="example@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder="Tell me about your project..."
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="submit-btn"
        >
          Send Message
          <Send className="icon" />
        </motion.button>

        <a
          href="https://wa.me/+2347068985608"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          Message me on WhatsApp
        </a>

        {formStatus && <p className="form-status">{formStatus}</p>}
      </motion.form>
    </section>
  );
}
