# Jimoh Israel — Portfolio

Personal portfolio site for Jimoh Israel, full-stack developer.

**Live:** https://nextjs-portfolio-blue-iota.vercel.app

## Tech stack

- [Next.js 15](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) with class-based dark mode via `next-themes`
- [Framer Motion](https://motion.dev) for scroll animations (respects "reduce motion")
- [tsParticles](https://particles.js.org) for the hero background
- [Formspree](https://formspree.io) for the contact form

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Editing content

All text, links, skills and projects live in **`src/data/portfolio.ts`** — you shouldn't need to touch the components to update the site.

- **Add a project:** add an entry to `projects` and put its screenshot in `public/images/`.
- **Add a skill:** add an entry to `skills` (and an icon mapping in `src/components/SkillsSection.tsx` if it's a new technology).
- **LinkedIn / CV:** set `profile.linkedin` and `profile.resume` — the links appear automatically once filled in.

## Project structure

```
src/
  app/          layout, page, metadata, favicon and social preview image
  components/   one component per section + shared Section / Reveal helpers
  data/         portfolio.ts — all site content
public/images/  project screenshots
```

## Deployment

Deployed on Vercel. Set `NEXT_PUBLIC_SITE_URL` if the site moves to a custom domain so social previews use the right URL.
