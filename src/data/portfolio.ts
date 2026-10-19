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
  // Root-relative so the links also work from case study pages.
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
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
  /** Slug of an entry in `caseStudies`; adds a "Case study" link to the card. */
  caseStudy?: string;
}

export const projects: Project[] = [
  {
    title: "Ojarun Grocery Marketplace",
    description:
      "A Nigerian grocery platform shopped on the web or over WhatsApp. I built the rewards and referral system, an AI shopping assistant, customer accounts and a synced cart, and closed price-tampering and fraud loopholes.",
    image: "/images/ojarun.jpg",
    tags: ["Next.js", "TypeScript", "NestJS", "Prisma", "WhatsApp API"],
    live: "https://ojarun.com",
    caseStudy: "ojarun",
  },
  {
    title: "Blazing Torrent (Stanford Seed Alumni)",
    description:
      "A private networking and deal-room platform for Stanford Seed Transformation Program alumni. I built the whole backend: 80+ REST endpoints, a real-time WebSocket chat server and the admin backoffice.",
    image: "/images/blazing.jpg",
    tags: ["PHP", "CodeIgniter 4", "MySQL", "WebSockets", "JWT"],
    live: "https://www.blazingtorrent.org",
    caseStudy: "blazing-torrent",
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

export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  role: string;
  team: string;
  stack: string[];
  links: { label: string; href: string }[];
  stats: { value: string; label: string }[];
  challenge: string[];
  built: { title: string; points: string[] }[];
  highlights: { title: string; points: string[] };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "ojarun",
    title: "Ojarun Grocery Marketplace",
    summary:
      "An online grocery and food marketplace that brings Nigerian local markets to the customer's doorstep, shopped through a web storefront or directly over WhatsApp.",
    image: "/images/ojarun.jpg",
    imageAlt: "Ojarun home page: Bringing the Market to Your Doorstep",
    role: "Full-stack developer",
    team: "5 contributors · top committer on the web app",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "NestJS", "Prisma", "WhatsApp Cloud API", "Cloudinary", "Vercel"],
    links: [{ label: "ojarun.com", href: "https://ojarun.com" }],
    stats: [
      { value: "64", label: "Web-app commits, the most on the team" },
      { value: "8", label: "Product features shipped end to end" },
      { value: "118/119", label: "Products given photos" },
      { value: "10", label: "Catalogue categories" },
    ],
    challenge: [
      "Ojarun lets customers order fresh food from local markets, sourced by trained agents and delivered to their door. Customers can shop on the website or entirely over WhatsApp, so the experience had to work well in both places.",
      "The product needed the features that bring customers back — accounts, rewards, referrals and reviews — and it had to be safe to run with real money and real promotions.",
    ],
    built: [
      {
        title: "Customer accounts",
        points: [
          "Login, password reset, profile editing, saved delivery addresses and account deactivation.",
          "A server-synced cart, so a basket started on one device is waiting on another.",
        ],
      },
      {
        title: "Rewards and referrals",
        points: [
          "Loyalty points with Bronze, Silver and Gold tiers.",
          "Refer-and-earn and a promo-code engine for campaigns.",
        ],
      },
      {
        title: "AI shopping assistant",
        points: [
          "A chat widget where customers paste their shopping list and the assistant turns it into real products in the cart.",
        ],
      },
      {
        title: "Engagement and catalogue",
        points: [
          "Order ratings and reviews, notifications and meal favourites.",
          "Loaded product photos for 118 of 119 products across 10 categories.",
          "Turned Figma designs into responsive pages.",
          "Fixed mobile overflow bugs across the cart, checkout and marketplace pages.",
        ],
      },
    ],
    highlights: {
      title: "Security fixes",
      points: [
        "The server now re-prices every order, so a customer can't change prices in the browser before checkout.",
        "Closed a loophole that let the rewards system be abused for free points.",
        "Added rate limiting to the public AI chat API to stop abuse.",
      ],
    },
  },
  {
    slug: "blazing-torrent",
    title: "Blazing Torrent — Stanford Seed Alumni Platform",
    summary:
      "A private networking and business-exchange platform for graduates of the Stanford Seed Transformation Program (STP) in Africa — think LinkedIn meets a deal room, for a closed community.",
    image: "/images/blazing.jpg",
    imageAlt: "Blazing Torrent home page: Stay Connected. Grow Together.",
    role: "Backend developer — built the entire REST API and infrastructure",
    team: "Me on backend, with a frontend developer and a mobile/media developer",
    stack: ["PHP", "CodeIgniter 4 (HMVC)", "MySQL", "Ratchet WebSocket", "JWT", "PHPMailer", "Bluehost", "Azure VM"],
    links: [
      { label: "blazingtorrent.org", href: "https://www.blazingtorrent.org" },
      { label: "api.blazingtorrent.org", href: "https://api.blazingtorrent.org" },
    ],
    stats: [
      { value: "80+", label: "REST API endpoints" },
      { value: "30+", label: "API modules" },
      { value: "36", label: "Database tables" },
      { value: "120+", label: "Registered users on the live platform" },
    ],
    challenge: [
      "Stanford Seed alumni needed one private place to connect, find mentors, run events and do business with each other — not a public social network.",
      "That meant a large, secure API behind web and mobile apps, real-time chat, and tools for administrators to run the community.",
    ],
    built: [
      {
        title: "The full REST API",
        points: [
          "30+ modules and 80+ endpoints: authentication, profiles, connections, events, groups, deal rooms, messaging, resources, newsfeed and marketplace.",
          "A 36-table MySQL schema, JWT authentication, and uploads of images, video and documents up to 100MB.",
        ],
      },
      {
        title: "Real-time messaging",
        points: [
          "A WebSocket server (Ratchet, on an Azure VM) for live messages and online/offline presence.",
          "In-app notifications for connection requests, likes, comments and event updates.",
        ],
      },
      {
        title: "Admin backoffice",
        points: [
          "User management, an analytics dashboard, post moderation, an email dispatcher and a support inbox.",
        ],
      },
    ],
    highlights: {
      title: "Zero-downtime migration",
      points: [
        "Moved the platform from Azure to Bluehost without taking it offline.",
        "Fixed what broke on the new host: CORS, file uploads, path configuration and PHP limits.",
        "Kept the WebSocket server on Azure so live chat kept working.",
      ],
    },
  },
];
