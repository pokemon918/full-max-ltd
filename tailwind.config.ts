import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Corporate palette — quiet, trustworthy, tech-forward
        canvas: "#FAFAF9",   // page background
        surface: "#FFFFFF",  // cards
        ink: "#0B0B0C",      // primary text / near-black
        graphite: "#3A3A3D", // secondary text
        mute: "#6B6B70",     // tertiary text / labels
        line: "#E7E5E4",     // hairlines / borders
        accent: "#0E7C66",   // deep emerald — quiet trust
        accentSoft: "#E7F3EF",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.035em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,11,12,0.04), 0 8px 24px -12px rgba(11,11,12,0.08)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
