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
        bg: {
          main: "#050816",
          surface: "#0A1020",
          card: "#111827",
          hover: "#1A2338",
        },
        accent: {
          primary: "#4169FF",
          secondary: "#5A7DFF",
          hover: "#6D8DFF",
          green: "#10B981",
          amber: "#F59E0B",
        },
        border: {
          glow: "rgba(255, 255, 255, 0.06)",
          bright: "rgba(65, 105, 255, 0.3)",
        },
        txt: {
          primary: "#F8FAFC",
          secondary: "#AAB4C5",
          muted: "#7A879C",
        },
        // Backwards compatibility tokens
        "primary-blue": "#4169FF",
        "deep-navy": "#F8FAFC",
        "accent-green": "#10B981",
        "accent-amber": "#F59E0B",
        "bg-white": "#050816",
        "bg-soft": "#0A1020",
        "text-slate": "#AAB4C5",
        "border-slate": "rgba(255, 255, 255, 0.06)",
        "bg-dark": "#050816",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        xxl: "48px",
        huge: "64px",
        section: "96px",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        sm: "0.25rem",
        md: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(65, 105, 255, 0.35)",
        "glow-lg": "0 0 70px -10px rgba(65, 105, 255, 0.45)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
