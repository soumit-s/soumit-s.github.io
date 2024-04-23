import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        common: "var(--common-color)",
        accent: "var(--accent-color)",
        foreground: "var(--foreground-color)",
      },
      fontFamily: {
        "bricolage-grotesque": ["'Bricolage Grotesque'", "sans-serif"],
        "reddit-mono": ["'Reddit Mono'", "monospace"],
        "work-sans": ["'Work Sans'", "sans"],
        "victor-mono": ["'Victor Mono'", "monospace"],
        ojuju: ["Ojuju", "sans-serif"],
        "fira-code": ["'Fira Code'", "monospace"],
        sedan: ["Sedan", "sans-serif"],
        "space-grotesk": ["'Space Grotesk'", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
