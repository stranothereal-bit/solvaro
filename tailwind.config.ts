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
        ink: "#0a0a0a",
        "ink-soft": "#141414",
        cream: "#f7f5f0",
        "cream-muted": "#ebe8e1",
        accent: "#c8b896",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        editorial: "72rem",
      },
      letterSpacing: {
        label: "0.2em",
      },
    },
  },
  plugins: [],
};

export default config;
