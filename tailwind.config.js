/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,mjs}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1B3A8C",
          "blue-dark": "#10265F",
          sky: "#0EA5E9",
          yellow: "#F4C20F",
          orange: "#F97316",
          mint: "#10B981",
        },
        ink: "#111827",
        muted: "#526071",
        line: "#DFE7F3",
        soft: "#F4F8FF",
      },
      fontFamily: {
        thai: ["var(--font-thai)", "sans-serif"],
      },
      boxShadow: {
        brand: "0 16px 40px rgba(16, 38, 95, 0.1)",
        "brand-sm": "0 8px 20px rgba(16, 38, 95, 0.08)",
      },
      maxWidth: {
        container: "1120px",
      },
    },
  },
  plugins: [],
};
