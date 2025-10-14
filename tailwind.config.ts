import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      dark: "#0F172A",
      light: "#F8FAFC",
      accent: "#3B82F6",
      accentHover: "#2563EB",
    },
    fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
      poppins: ["var(--font-poppins)", "sans-serif"],
    },
    boxShadow: {
      soft: "0 2px 8px rgba(0,0,0,0.1)",
      strong: "0 4px 20px rgba(0,0,0,0.25)",
    },
    borderRadius: {
      lg: "24px",
    },
  },
  plugins: [],
};

export default config;
