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
          DEFAULT: "#0F1720",
          dark: "#000000",
          light: "#2A3340",
          50: "#F4F7F5",
          100: "#E7F0EC",
          200: "#D1E5DC",
        },
        accent: {
          DEFAULT: "#E7F0EC",
          deep: "#C7DCD0",
          ink: "#3A5448",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          muted: "#666666",
          subtle: "#999999",
        },
        surface: {
          DEFAULT: "#ffffff",
          soft: "#F7F7F5",
          card: "#F0F0EB",
          tint: "#F0F4F8",
          warm: "#F4F6F9",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Inter Tight'", "Inter", "system-ui", "sans-serif"],
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
        "float-slow": "float 9s ease-in-out infinite",
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
        card: "0 4px 18px rgba(15, 23, 32, 0.06)",
        "card-hover": "0 12px 36px rgba(15, 23, 32, 0.12)",
        soft: "0 1px 2px rgba(15, 23, 32, 0.04), 0 4px 12px rgba(15, 23, 32, 0.04)",
      },
      maxWidth: {
        prose: "62ch",
      },
    },
  },
  plugins: [],
};

export default config;
