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
        brand: {
          DEFAULT: "#1a3f7a",
          dark: "#0d2a5c",
          light: "#2980b9",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
        },
        ink: {
          DEFAULT: "#1f2937",
          muted: "#6b7280",
          subtle: "#9ca3af",
        },
        surface: {
          DEFAULT: "#ffffff",
          soft: "#f9fafb",
          card: "#f3f4f6",
          tint: "#f0f4f8",
          warm: "#f4f6f9",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      spacing: {
        "13": "3.25rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        kenburns: "kenburns 22s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-ring": "pulseRing 2.6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-y": "floatY 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        kenburns: {
          "0%": { transform: "scale(1.06) translate(0, 0)" },
          "100%": { transform: "scale(1.14) translate(-1.5%, 1%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "0.5" },
          "100%": { transform: "scale(1.18)", opacity: "0" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      boxShadow: {
        card: "0 4px 12px rgba(26, 63, 122, 0.08)",
        "card-hover": "0 12px 32px rgba(26, 63, 122, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
