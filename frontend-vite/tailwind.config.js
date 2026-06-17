/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        /* Primary */
        primary: "#0F172A",        // Deep Navy Blue
        secondary: "#334155",      // Charcoal Gray

        /* Backgrounds */
        background: "#FFFFFF",
        surface: "#F1F5F9",

        /* Accent (choose one) */
        accent: "#16A34A",         // Export Green
        // accent: "#EA580C",      // Trade Orange (optional)

        /* Text */
        textPrimary: "#0F172A",
        textSecondary: "#334155",
        textMuted: "#64748B",
      },

      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      fontSize: {
        h1: ["48px", { lineHeight: "1.2" }],
        h2: ["32px", { lineHeight: "1.25" }],
        h3: ["24px", { lineHeight: "1.3" }],
        body: ["16px", { lineHeight: "1.6" }],
        small: ["14px", { lineHeight: "1.5" }],
      },

      spacing: {
        section: "96px",   // Section top/bottom spacing
        card: "32px",
      },

      borderRadius: {
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },

      boxShadow: {
        soft: "0 10px 25px -5px rgba(0,0,0,0.05)",
        card: "0 4px 15px rgba(0,0,0,0.06)",
      },

      transitionDuration: {
        DEFAULT: "200ms",
      },
      keyframes: {
        progress: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        progress: "progress 6s linear forwards",
      },
    },
  },
  plugins: [],
};
