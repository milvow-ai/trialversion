import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0A",
          soft: "#1A1A1A",
          muted: "#6E6E6E",
          subtle: "#A8A8A8",
          faint: "#D6D6D6",
          line: "#E8E6E1",
        },
        paper: {
          DEFAULT: "#FFFFFF",
          warm: "#FAFAF7",
          cream: "#F4F2EC",
          tint: "#F0EFE9",
        },
      },
      fontFamily: {
        sans: ["Geist", "Inter Tight", "Inter", "system-ui", "sans-serif"],
        mono: ["'Geist Mono'", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
      },
      borderRadius: {
        "2.5xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "1.75rem",
        media: "24px",
      },
      boxShadow: {
        whisper: "0 1px 2px rgba(10,10,10,0.04)",
        soft: "0 8px 24px rgba(10,10,10,0.04)",
      },
      maxWidth: {
        prose: "62ch",
        editorial: "1320px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
