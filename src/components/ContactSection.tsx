"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { profile } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const res = await fetch(profile.formspreeEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const channels = [
    { label: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
    { label: "Chat on WhatsApp", href: profile.whatsapp, Icon: FaWhatsapp },
    ...(profile.linkedin ? [{ label: "Connect on LinkedIn", href: profile.linkedin, Icon: FaLinkedin }] : []),
  ];

  return (
    <Section
      id="contact"
      title="Let's connect"
      subtitle="Ready to bring your ideas to life? I'd love to hear about your next project."
      muted
    >
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.6fr]">
        <Reveal className="space-y-4">
          <h3 className="text-lg font-semibold">Prefer to reach out directly?</h3>
          <ul className="space-y-3">
            {channels.map(({ label, href, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 font-medium transition hover:border-accent hover:text-accent dark:border-slate-800 dark:bg-slate-900 dark:hover:border-accent-soft dark:hover:text-accent-soft"
                >
                  <Icon size={20} aria-hidden className="shrink-0" />
                  <span className="break-all">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold">
                  Your name
                </label>
                <input id="name" name="name" type="text" required autoComplete="name" placeholder="John Doe" className={inputClass} />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-semibold">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Tell me about your project..."
                className={`${inputClass} resize-y`}
              />
            </div>

            {/* Honeypot field: hidden from people, filled in by spam bots, rejected by Formspree. */}
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 font-semibold text-white transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "sending" ? (
                <>
                  Sending <Loader2 size={18} className="animate-spin" aria-hidden />
                </>
              ) : (
                <>
                  Send message <Send size={18} aria-hidden />
                </>
              )}
            </button>

            <div aria-live="polite" className="text-sm">
              {status === "success" && (
                <p className="flex items-center gap-2 font-medium text-green-700 dark:text-green-400">
                  <CheckCircle2 size={18} aria-hidden /> Thanks! Your message has been sent — I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="font-medium text-red-600 dark:text-red-400">
                  Something went wrong sending your message. Please try again or email me at{" "}
                  <a href={`mailto:${profile.email}`} className="underline">
                    {profile.email}
                  </a>
                  .
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
