// All site content lives here. Edit this file to update the portfolio —
// components read from it and never need to change for content updates.

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nextjs-portfolio-blue-iota.vercel.app";

export const profile = {
  name: "Jimoh Israel",
  shortName: "Israel",
  role: "Full-Stack Developer",
  tagline: "Turning ideas into impactful products.",
  description:
    "Full-stack developer building clean, fast and reliable web applications — from polished front-ends to secure, scalable back-ends.",
  email: "jimohisrael04@gmail.com",
  whatsapp: "https://wa.me/2347068985608",
  github: "https://github.com/jimohisraelo",
  // Add your LinkedIn profile URL to show it in the footer and contact section.
  linkedin: "",
  // CV file in /public; shows a "Download CV" button in the hero. Set to "" to hide it.
  resume: "/Jimoh-Israel-CV.pdf",
  formspreeEndpoint: "https://formspree.io/f/mjkabkdg",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  paragraphs: [
    "I'm Jimoh Israel, a professional web developer focused on building clean, functional and visually appealing digital experiences. I believe in simple, thoughtful design that solves real problems.",
    "I'm passionate about using modern tools and best practices to deliver reliable and efficient results — always with an eye for detail and performance.",
  ],
  stats: [
    { value: "6+", label: "Years coding" },
    { value: "10+", label: "Projects completed" },
    { value: "Full-Stack", label: "Front-end to back-end" },
  ],
};

export type SkillIcon =
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "react"
  | "nextjs"
  | "tailwind"
  | "bootstrap"
  | "php"
  | "laravel"
  | "laminas"
  | "mysql"
  | "python"
  | "flask";

export const skills: { name: string; icon: SkillIcon; years: number }[] = [
  { name: "HTML", icon: "html", years: 5 },
  { name: "CSS", icon: "css", years: 5 },
  { name: "JavaScript", icon: "javascript", years: 3 },
  { name: "TypeScript", icon: "typescript", years: 2 },
  { name: "React", icon: "react", years: 3 },
  { name: "Next.js", icon: "nextjs", years: 2 },
  { name: "Tailwind CSS", icon: "tailwind", years: 2 },
  { name: "Bootstrap", icon: "bootstrap", years: 3 },
  { name: "PHP", icon: "php", years: 4 },
  { name: "Laravel", icon: "laravel", years: 3 },
  { name: "Laminas", icon: "laminas", years: 2 },
  { name: "MySQL", icon: "mysql", years: 2 },
  { name: "Python", icon: "python", years: 3 },
  { name: "Flask", icon: "flask", years: 2 },
];

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  live: string;
  source?: string;
}

export const projects: Project[] = [
  {
    title: "Ojarun Grocery Marketplace",
    description:
      "A Nigerian grocery platform shopped on the web or over WhatsApp. I built the rewards and referral system, an AI shopping assistant, customer accounts and a synced cart, and closed price-tampering and fraud loopholes.",
    image: "/images/ojarun.jpg",
    tags: ["Next.js", "TypeScript", "NestJS", "Prisma", "WhatsApp API"],
    live: "https://ojarun.com",
  },
  {
    title: "Blazing Torrent (Stanford Seed Alumni)",
    description:
      "A private networking and deal-room platform for Stanford Seed Transformation Program alumni. I built the whole backend: 80+ REST endpoints, a real-time WebSocket chat server and the admin backoffice.",
    image: "/images/blazing.jpg",
    tags: ["PHP", "CodeIgniter 4", "MySQL", "WebSockets", "JWT"],
    live: "https://www.blazingtorrent.org",
  },
  {
    title: "WIFT Africa Platform",
    description:
      "Built at Unleashified: backend for a networking and portfolio platform for women in film and TV across Africa — authentication, professional profiles, multi-step chapter onboarding, messaging, posts and connections.",
    image: "/images/wilf.png",
    tags: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Zod"],
    live: "https://www.wiftafrica.org/",
  },
  {
    title: "Sage Clothing Brand",
    description:
      "A modern fashion e-commerce storefront with dynamic product pages, smooth animations and a fully responsive shopping experience.",
    image: "/images/sage.png",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    live: "https://sage-next.vercel.app/",
    source: "https://github.com/jimohisraelo/sage-next",
  },
  {
    title: "Personalized Career Bot",
    description:
      "An AI chatbot that represents my professional persona and answers questions about my experience, skills and journey in tech.",
    image: "/images/career.png",
    tags: ["Python", "Flask", "Machine Learning", "AI"],
    live: "https://huggingface.co/spaces/jimohisrael04/career_conversation",
  },
  {
    title: "Forkify Recipe App",
    description:
      "Search recipes from an external API, adjust servings, bookmark favourites and upload your own — built with vanilla JavaScript using the MVC pattern.",
    image: "/images/forkify.png",
    tags: ["HTML", "SCSS", "JavaScript", "API Integration"],
    live: "https://forkify-israel.netlify.app/",
  },
  {
    title: "React Weather App",
    description:
      "Real-time weather for any location, with current conditions and forecasts in a clean, responsive interface.",
    image: "/images/weather.png",
    tags: ["React", "Tailwind CSS", "API Integration"],
    live: "https://jimohisraelo.github.io/react-weather-app/",
    source: "https://github.com/jimohisraelo/react-weather-app",
  },
  {
    title: "Trivia Quiz Game",
    description:
      "A multiple-choice trivia game with category selection, instant feedback and a final score, powered by the Open Trivia Database.",
    image: "/images/trivia.png",
    tags: ["Python", "Flask", "JavaScript", "Bootstrap"],
    live: "https://flask-trivia-game.vercel.app/",
    source: "https://github.com/jimohisraelo/Flask-Trivia-Game",
  },
];
